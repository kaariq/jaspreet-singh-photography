import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

/**
 * Recursive form generator. Renders inputs based on the shape of `value`.
 * - string  -> Input (Textarea if it contains \n or is long)
 * - number  -> number Input
 * - boolean -> Switch
 * - array   -> list with add/remove
 * - object  -> nested fieldset
 *
 * Add new fields by editing the JSON file (or use the "Add field" control on
 * objects). The form auto-adapts.
 */
export function JsonForm({
  value,
  onChange,
}: {
  value: Json;
  onChange: (next: Json) => void;
}) {
  return <Node value={value} path="" onChange={onChange} root />;
}

function Node({
  value,
  onChange,
  path,
  root = false,
}: {
  value: Json;
  onChange: (v: Json) => void;
  path: string;
  root?: boolean;
}) {
  if (value === null) {
    return (
      <Input
        value=""
        placeholder="null"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  if (typeof value === "string") {
    const multiline = value.includes("\n") || value.length > 80;
    return multiline ? (
      <Textarea
        value={value}
        rows={Math.min(10, Math.max(2, value.split("\n").length + 1))}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    );
  }

  if (typeof value === "number") {
    return (
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
      />
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-center gap-3">
        <Switch checked={value} onCheckedChange={(v) => onChange(Boolean(v))} />
        <span className="text-sm text-muted-foreground">{value ? "true" : "false"}</span>
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {value.map((item, i) => (
          <div
            key={i}
            className="rounded-md border border-border bg-card/40 p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">
                [{i}]
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  const next = value.slice();
                  next.splice(i, 1);
                  onChange(next);
                }}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
            <Node
              value={item}
              path={`${path}[${i}]`}
              onChange={(v) => {
                const next = value.slice();
                next[i] = v;
                onChange(next);
              }}
            />
          </div>
        ))}
        <ArrayAdd value={value} onChange={onChange} />
      </div>
    );
  }

  // object
  const entries = Object.entries(value);
  return (
    <div className={root ? "space-y-5" : "space-y-4 rounded-md border border-border/60 bg-card/30 p-4"}>
      {entries.map(([key, child]) => (
        <div key={key} className="space-y-2">
          <Label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>{key}</span>
            <button
              type="button"
              className="text-xs text-destructive opacity-0 transition-opacity hover:underline group-hover:opacity-100"
              onClick={() => {
                const next = { ...value };
                delete next[key];
                onChange(next);
              }}
              title="Remove field"
            >
              remove
            </button>
          </Label>
          <Node
            value={child as Json}
            path={path ? `${path}.${key}` : key}
            onChange={(v) => onChange({ ...value, [key]: v })}
          />
        </div>
      ))}
      <ObjectAdd value={value} onChange={onChange} />
    </div>
  );
}

function ArrayAdd({ value, onChange }: { value: Json[]; onChange: (v: Json) => void }) {
  const sample = value[0];
  function addItem() {
    let next: Json = "";
    if (sample !== undefined) {
      next = deepClone(sample);
      next = blankify(next);
    }
    onChange([...value, next]);
  }
  return (
    <Button type="button" variant="outline" size="sm" onClick={addItem}>
      <Plus className="mr-1 h-3.5 w-3.5" /> Add item
    </Button>
  );
}

function ObjectAdd({
  value,
  onChange,
}: {
  value: { [k: string]: Json };
  onChange: (v: Json) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState<"string" | "number" | "boolean" | "object" | "array">("string");

  if (!open) {
    return (
      <Button type="button" variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <Plus className="mr-1 h-3.5 w-3.5" /> Add field
      </Button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border border-dashed border-border p-2">
      <Input
        placeholder="field name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-40"
      />
      <select
        className="rounded-md border border-input bg-background px-2 py-1.5 text-sm"
        value={type}
        onChange={(e) => setType(e.target.value as typeof type)}
      >
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="boolean">boolean</option>
        <option value="object">object</option>
        <option value="array">array</option>
      </select>
      <Button
        type="button"
        size="sm"
        onClick={() => {
          if (!name.trim() || name in value) {
            setOpen(false);
            return;
          }
          const fresh: Json =
            type === "string" ? "" : type === "number" ? 0 : type === "boolean" ? false : type === "array" ? [] : {};
          onChange({ ...value, [name]: fresh });
          setName("");
          setOpen(false);
        }}
      >
        Add
      </Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => setOpen(false)}>
        Cancel
      </Button>
    </div>
  );
}

function deepClone<T extends Json>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

function blankify(v: Json): Json {
  if (typeof v === "string") return "";
  if (typeof v === "number") return 0;
  if (typeof v === "boolean") return false;
  if (v === null) return null;
  if (Array.isArray(v)) return [];
  const out: { [k: string]: Json } = {};
  for (const k of Object.keys(v)) out[k] = blankify(v[k]);
  return out;
}
