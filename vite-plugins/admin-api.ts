import type { Plugin, Connect } from "vite";
import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import crypto from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";

const ADMIN_COOKIE = "ja_admin_session";
const DATA_ROOT = path.resolve(process.cwd(), "src/data");
const UPLOADS_ROOT = path.resolve(process.cwd(), "public/uploads");
const GALLERIES_FILE = path.join(DATA_ROOT, "galleries.json");

function parseCookies(header: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i === -1) continue;
    out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

function getToken() {
  return process.env.ADMIN_SESSION_TOKEN || "suitelifeofjz";
}
function getCreds() {
  return {
    username: process.env.ADMIN_USERNAME || "admin@jz.com",
    password: process.env.ADMIN_PASSWORD || "admin@123",
  };
}

function isAuthed(req: IncomingMessage) {
  const token = getToken();
  if (!token) return false;
  return parseCookies(req.headers.cookie)[ADMIN_COOKIE] === token;
}

function safeResolve(rel: string) {
  const target = path.resolve(DATA_ROOT, rel);
  if (!target.startsWith(DATA_ROOT + path.sep) && target !== DATA_ROOT) {
    throw new Error("Path escapes data root");
  }
  if (!target.endsWith(".json")) throw new Error("Only .json files are editable");
  return target;
}

async function listFiles() {
  async function walk(dir: string) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      return entries
        .filter((e) => e.isFile() && e.name.endsWith(".json"))
        .map((e) => e.name)
        .sort();
    } catch {
      return [] as string[];
    }
  }
  const [meta, pages, rootEntries] = await Promise.all([
    walk(path.join(DATA_ROOT, "meta")),
    walk(path.join(DATA_ROOT, "pages")),
    fs.readdir(DATA_ROOT, { withFileTypes: true }).catch(() => []),
  ]);
  const root = (Array.isArray(rootEntries) ? rootEntries : [])
    .filter((e) => e.isFile() && e.name.endsWith(".json"))
    .map((e) => e.name)
    .sort();
  return { meta, pages, root };
}

function send(
  res: ServerResponse,
  status: number,
  body: unknown,
  extraHeaders: Record<string, string> = {},
) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  for (const [k, v] of Object.entries(extraHeaders)) res.setHeader(k, v);
  res.end(JSON.stringify(body));
}

async function readJsonBody(req: IncomingMessage, limitBytes = 25 * 1024 * 1024): Promise<unknown> {
  return await new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let total = 0;
    req.on("data", (c) => {
      total += (c as Buffer).length;
      if (total > limitBytes) {
        reject(new Error("Payload too large"));
        req.destroy();
        return;
      }
      chunks.push(c as Buffer);
    });
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

async function ensureUploads() {
  await fs.mkdir(UPLOADS_ROOT, { recursive: true });
}

function safeUpload(name: string) {
  const target = path.resolve(UPLOADS_ROOT, name);
  if (!target.startsWith(UPLOADS_ROOT + path.sep)) throw new Error("Invalid path");
  return target;
}

const middleware: Connect.NextHandleFunction = async (req, res, next) => {
  if (!req.url || !req.url.startsWith("/api/admin")) return next();
  const url = new URL(req.url, "http://localhost");
  const route = url.pathname.replace(/^\/api\/admin/, "");

  try {
    if (route === "/login" && req.method === "POST") {
      const body = (await readJsonBody(req)) as { username?: string; password?: string };
      const creds = getCreds();
      const token = getToken();
      if (!creds.username || !creds.password || !token) {
        return send(res, 500, { error: "Admin credentials not configured on server" });
      }
      if (body.username !== creds.username || body.password !== creds.password) {
        return send(res, 401, { error: "Invalid username or password" });
      }
      return send(
        res,
        200,
        { ok: true },
        {
          "Set-Cookie": `${ADMIN_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`,
        },
      );
    }

    if (route === "/logout" && req.method === "POST") {
      return send(
        res,
        200,
        { ok: true },
        {
          "Set-Cookie": `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
        },
      );
    }

    if (route === "/check" && req.method === "GET") {
      return send(res, 200, { authed: isAuthed(req) });
    }

    if (route === "/files" && req.method === "GET") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      return send(res, 200, await listFiles());
    }

    if (route === "/file") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      if (req.method === "GET") {
        const p = url.searchParams.get("path");
        if (!p) return send(res, 400, { error: "Missing path" });
        const target = safeResolve(p);
        const raw = await fs.readFile(target, "utf8");
        return send(res, 200, { json: raw });
      }
      if (req.method === "PUT") {
        const body = (await readJsonBody(req)) as { path?: string; json?: string };
        if (!body.path || typeof body.json !== "string") {
          return send(res, 400, { error: "Missing path/json" });
        }
        let parsed: unknown;
        try {
          parsed = JSON.parse(body.json);
        } catch {
          return send(res, 400, { error: "Invalid JSON payload" });
        }
        const target = safeResolve(body.path);
        await fs.writeFile(target, JSON.stringify(parsed, null, 2) + "\n", "utf8");
        return send(res, 200, { ok: true });
      }
    }

    // GET /galleries -> read galleries.json
    if (route === "/galleries" && req.method === "GET") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      try {
        const raw = await fs.readFile(GALLERIES_FILE, "utf8");
        return send(res, 200, JSON.parse(raw));
      } catch {
        return send(res, 200, {});
      }
    }

    // PUT /galleries -> overwrite galleries.json
    if (route === "/galleries" && req.method === "PUT") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      const body = await readJsonBody(req);
      await fs.writeFile(GALLERIES_FILE, JSON.stringify(body, null, 2) + "\n", "utf8");
      return send(res, 200, { ok: true });
    }

    // POST /upload  { filename, dataBase64 } -> { url }
    if (route === "/upload" && req.method === "POST") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      const body = (await readJsonBody(req)) as { filename?: string; dataBase64?: string };
      if (!body.filename || !body.dataBase64) {
        return send(res, 400, { error: "Missing filename or data" });
      }
      await ensureUploads();
      const ext = path.extname(body.filename).toLowerCase() || ".bin";
      const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"];
      if (!allowed.includes(ext)) return send(res, 400, { error: "Unsupported file type" });
      const slug =
        path
          .basename(body.filename, ext)
          .replace(/[^a-z0-9-_]+/gi, "-")
          .slice(0, 60) || "image";
      const hash = crypto.randomBytes(4).toString("hex");
      const name = `${slug}-${hash}${ext}`;
      const target = safeUpload(name);
      const buf = Buffer.from(body.dataBase64, "base64");
      await fs.writeFile(target, buf);
      return send(res, 200, { url: `/uploads/${name}` });
    }

    // DELETE /upload?name=... -> remove file in public/uploads
    if (route === "/upload" && req.method === "DELETE") {
      if (!isAuthed(req)) return send(res, 401, { error: "Unauthorized" });
      const name = url.searchParams.get("name");
      if (!name) return send(res, 400, { error: "Missing name" });
      try {
        await fs.unlink(safeUpload(name));
      } catch {
        /* ignore */
      }
      return send(res, 200, { ok: true });
    }

    return send(res, 404, { error: "Not found" });
  } catch (e) {
    return send(res, 500, { error: e instanceof Error ? e.message : "Server error" });
  }
};

export function adminApiPlugin(): Plugin {
  return {
    name: "admin-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
