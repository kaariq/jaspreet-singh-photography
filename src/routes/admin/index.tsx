import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Save, RefreshCw, LogOut, FileJson, Image as ImageIcon, Upload, Trash2 } from "lucide-react";
import {
  adminCheck,
  adminListFiles,
  adminLogout,
  adminReadFile,
  adminWriteFile,
  adminGetGalleries,
  adminSaveGalleries,
  adminUploadImage,
  adminDeleteUpload,
  type Galleries,
} from "@/lib/admin/api";
import { JsonForm } from "@/components/admin/JsonForm";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin · Content" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

type FileLists = { meta: string[]; pages: string[]; root: string[] };
type Entry = { path: string; title: string; group: "Page" | "SEO" | "Site" };

const PAGE_TITLES: Record<string, string> = {
  home: "Home",
  about: "About",
  work: "Work",
  approach: "Approach",
  contact: "Contact",
  journal: "Journal",
  site: "Site settings",
};

const GALLERY_LABELS: Array<{ key: string; label: string; hint: string }> = [
  { key: "work", label: "Work · Gallery", hint: "Images shown on the /work page grid" },
  { key: "selected", label: "Home · Selected work", hint: "Stack cards on the landing page" },
  { key: "landing", label: "Home · Hero images", hint: "Images that appear on the landing page" },
  { key: "about", label: "About · Photos", hint: "Images shown on the About page" },
];

function prettyTitle(filePath: string): string {
  const base = filePath.split("/").pop()?.replace(/\.json$/, "") ?? filePath;
  return PAGE_TITLES[base] ?? base.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [files, setFiles] = useState<FileLists | null>(null);
  const [tab, setTab] = useState<"content" | "images">("content");

  useEffect(() => {
    document.body.classList.add("admin-shell");
    return () => document.body.classList.remove("admin-shell");
  }, []);

  useEffect(() => {
    (async () => {
      const res = await adminCheck();
      if (!res.authed) {
        navigate({ to: "/admin/login" });
        return;
      }
      setAuthed(true);
      const list = await adminListFiles();
      setFiles(list);
    })();
  }, [navigate]);

  const entries: Entry[] = useMemo(() => {
    if (!files) return [];
    const out: Entry[] = [];
    for (const f of files.pages) out.push({ path: `pages/${f}`, title: prettyTitle(f), group: "Page" });
    for (const f of files.meta) out.push({ path: `meta/${f}`, title: `${prettyTitle(f)} · SEO`, group: "SEO" });
    for (const f of files.root) out.push({ path: f, title: prettyTitle(f), group: "Site" });
    return out;
  }, [files]);

  if (authed === null || !files) {
    return (
      <main className="admin-shell flex min-h-screen items-center justify-center bg-background text-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
      </main>
    );
  }

  async function onLogout() {
    await adminLogout();
    navigate({ to: "/admin/login" });
  }

  return (
    <main className="admin-shell relative min-h-screen bg-background text-foreground">
      <div className="canvas-grid" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl uppercase tracking-tight">Content Admin</h1>
            <p className="text-sm text-muted-foreground">
              Edit everything that powers the public site.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="mr-2 h-3.5 w-3.5" /> Sign out
          </Button>
        </header>

        <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
          <TabsList>
            <TabsTrigger value="content">
              <FileJson className="mr-2 h-3.5 w-3.5" /> Content
            </TabsTrigger>
            <TabsTrigger value="images">
              <ImageIcon className="mr-2 h-3.5 w-3.5" /> Images
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-6">
            <ContentPane entries={entries} />
          </TabsContent>

          <TabsContent value="images" className="mt-6">
            <ImagesPane />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

function ContentPane({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState<string | null>(entries[0]?.path ?? null);
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (!active) return;
    setLoading(true);
    setDirty(false);
    adminReadFile(active)
      .then((res) => setData(JSON.parse(res.json)))
      .catch((e) => toast.error(e instanceof Error ? e.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, [active]);

  async function save() {
    if (!active || data === null) return;
    setSaving(true);
    try {
      await adminWriteFile(active, JSON.stringify(data));
      toast.success("Saved");
      setDirty(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function reload() {
    if (!active) return;
    setLoading(true);
    setDirty(false);
    try {
      const res = await adminReadFile(active);
      setData(JSON.parse(res.json));
    } finally {
      setLoading(false);
    }
  }

  if (entries.length === 0) {
    return <p className="text-sm text-muted-foreground">Nothing to edit yet.</p>;
  }

  const grouped: Record<string, Entry[]> = {};
  for (const e of entries) (grouped[e.group] ||= []).push(e);
  const activeEntry = entries.find((e) => e.path === active);

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4 rounded-md border border-border bg-card p-3">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <div className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {group}
            </div>
            <div className="space-y-1">
              {items.map((f) => (
                <button
                  key={f.path}
                  onClick={() => setActive(f.path)}
                  className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm transition ${
                    active === f.path ? "bg-foreground/10 font-medium" : "text-muted-foreground hover:bg-foreground/5"
                  }`}
                >
                  <span className="truncate">{f.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>

      <section className="min-w-0 rounded-md border border-border bg-card p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-sm font-medium">{activeEntry?.title ?? ""}</div>
          <div className="flex items-center gap-2">
            <Button type="button" size="sm" variant="outline" onClick={reload} disabled={loading}>
              <RefreshCw className={`mr-2 h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Reload
            </Button>
            <Button type="button" size="sm" onClick={save} disabled={saving || !dirty}>
              {saving ? <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> : <Save className="mr-2 h-3.5 w-3.5" />}
              Save
            </Button>
          </div>
        </div>

        {loading || data === null ? (
          <div className="flex h-40 items-center justify-center text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          <JsonForm
            value={data as never}
            onChange={(v) => {
              setData(v);
              setDirty(true);
            }}
          />
        )}
      </section>
    </div>
  );
}

function ImagesPane() {
  const [galleries, setGalleries] = useState<Galleries | null>(null);
  const [activeKey, setActiveKey] = useState<string>(GALLERY_LABELS[0].key);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    adminGetGalleries()
      .then((g) => {
        // ensure all expected keys exist
        const next: Galleries = { ...g };
        for (const { key } of GALLERY_LABELS) if (!next[key]) next[key] = [];
        setGalleries(next);
      })
      .catch((e) => toast.error(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  async function persist(next: Galleries) {
    setGalleries(next);
    setSaving(true);
    try {
      await adminSaveGalleries(next);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onUpload(files: FileList | null) {
    if (!files || !galleries) return;
    const list = Array.from(files);
    const uploaded: { src: string }[] = [];
    for (const f of list) {
      try {
        const { url } = await adminUploadImage(f);
        uploaded.push({ src: url });
      } catch (e) {
        toast.error(`${f.name}: ${e instanceof Error ? e.message : "upload failed"}`);
      }
    }
    if (uploaded.length === 0) return;
    const next = { ...galleries, [activeKey]: [...(galleries[activeKey] ?? []), ...uploaded] };
    await persist(next);
    toast.success(`Added ${uploaded.length} image${uploaded.length === 1 ? "" : "s"}`);
  }

  async function onDelete(idx: number) {
    if (!galleries) return;
    const item = galleries[activeKey][idx];
    const next = {
      ...galleries,
      [activeKey]: galleries[activeKey].filter((_, i) => i !== idx),
    };
    await persist(next);
    // Best-effort cleanup of uploaded file
    if (item?.src) adminDeleteUpload(item.src).catch(() => {});
  }

  async function onAddUrl() {
    if (!galleries) return;
    const url = window.prompt("Image URL");
    if (!url) return;
    const next = { ...galleries, [activeKey]: [...(galleries[activeKey] ?? []), { src: url }] };
    await persist(next);
  }

  async function onUpdateCat(idx: number, cat: string) {
    if (!galleries) return;
    const list = galleries[activeKey].slice();
    list[idx] = { ...list[idx], cat };
    await persist({ ...galleries, [activeKey]: list });
  }

  if (!galleries) {
    return (
      <div className="flex h-40 items-center justify-center text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  const items = galleries[activeKey] ?? [];
  const activeLabel = GALLERY_LABELS.find((g) => g.key === activeKey);

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-1 rounded-md border border-border bg-card p-2">
        {GALLERY_LABELS.map((g) => (
          <button
            key={g.key}
            onClick={() => setActiveKey(g.key)}
            className={`flex w-full items-center justify-between gap-2 rounded px-3 py-2 text-left text-sm transition ${
              activeKey === g.key ? "bg-foreground/10 font-medium" : "text-muted-foreground hover:bg-foreground/5"
            }`}
          >
            <span className="truncate">{g.label}</span>
            <span className="rounded bg-muted px-1.5 text-[10px] tabular-nums">
              {(galleries[g.key] ?? []).length}
            </span>
          </button>
        ))}
      </aside>

      <section className="min-w-0 rounded-md border border-border bg-card p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm font-medium">{activeLabel?.label}</div>
            <div className="text-xs text-muted-foreground">{activeLabel?.hint}</div>
          </div>
          <div className="flex items-center gap-2">
            {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" /> : null}
            <Button type="button" size="sm" variant="outline" onClick={onAddUrl}>
              Add by URL
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => {
                onUpload(e.target.files);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            />
            <Button type="button" size="sm" onClick={() => fileInputRef.current?.click()}>
              <Upload className="mr-2 h-3.5 w-3.5" /> Upload
            </Button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex h-40 items-center justify-center rounded border border-dashed border-border text-sm text-muted-foreground">
            No images yet. Upload one to get started.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((img, i) => (
              <div
                key={img.src + i}
                className="group relative overflow-hidden rounded-md border border-border bg-black/5"
              >
                <img src={img.src} alt="" className="aspect-square w-full object-cover" />
                <button
                  type="button"
                  onClick={() => onDelete(i)}
                  className="absolute right-1.5 top-1.5 rounded-full bg-black/70 p-1.5 text-white opacity-0 transition group-hover:opacity-100"
                  aria-label="Delete"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                <Input
                  value={img.cat ?? ""}
                  placeholder="Caption / category"
                  onChange={(e) => onUpdateCat(i, e.target.value)}
                  className="rounded-none border-0 border-t bg-card text-xs"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
