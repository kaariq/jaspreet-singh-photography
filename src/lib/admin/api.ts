// Simple client for the /api/admin/* endpoints served by the Vite middleware
// (see vite-plugins/admin-api.ts).

export type FileLists = { meta: string[]; pages: string[]; root: string[] };
export type Galleries = Record<string, Array<{ src: string; cat?: string }>>;

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: "same-origin",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const msg =
      body && typeof body === "object" && "error" in body
        ? String((body as { error: unknown }).error)
        : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return body as T;
}

export function adminLogin(username: string, password: string) {
  return request<{ ok: true }>("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export function adminLogout() {
  return request<{ ok: true }>("/api/admin/logout", { method: "POST" });
}

export function adminCheck() {
  return request<{ authed: boolean }>("/api/admin/check");
}

export function adminListFiles() {
  return request<FileLists>("/api/admin/files");
}

export function adminReadFile(path: string) {
  return request<{ json: string }>(`/api/admin/file?path=${encodeURIComponent(path)}`);
}

export function adminWriteFile(path: string, json: string) {
  return request<{ ok: true }>("/api/admin/file", {
    method: "PUT",
    body: JSON.stringify({ path, json }),
  });
}

export function adminGetGalleries() {
  return request<Galleries>("/api/admin/galleries");
}

export function adminSaveGalleries(data: Galleries) {
  return request<{ ok: true }>("/api/admin/galleries", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function adminUploadImage(file: File): Promise<{ url: string }> {
  const dataBase64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
  return request<{ url: string }>("/api/admin/upload", {
    method: "POST",
    body: JSON.stringify({ filename: file.name, dataBase64 }),
  });
}

export function adminDeleteUpload(url: string) {
  // only delete files we hosted in /uploads/
  const m = url.match(/^\/uploads\/([^/]+)$/);
  if (!m) return Promise.resolve({ ok: true } as const);
  return request<{ ok: true }>(`/api/admin/upload?name=${encodeURIComponent(m[1])}`, {
    method: "DELETE",
  });
}
