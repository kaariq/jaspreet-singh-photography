// Build a TanStack Router head() object from a meta JSON file.
// Keep this client-safe (no node imports) — it runs during route head().

export type PageMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: string;
  jsonLd?: unknown;
  // Allow arbitrary extra fields without breaking the helper.
  [key: string]: unknown;
};

export function buildHead(meta: PageMeta) {
  const m: Array<Record<string, string>> = [];

  if (meta.title) m.push({ title: meta.title });
  if (meta.description) m.push({ name: "description", content: meta.description });
  if (meta.keywords) m.push({ name: "keywords", content: meta.keywords });
  if (meta.robots) m.push({ name: "robots", content: meta.robots });

  if (meta.ogTitle) m.push({ property: "og:title", content: meta.ogTitle });
  if (meta.ogDescription) m.push({ property: "og:description", content: meta.ogDescription });
  if (meta.ogType) m.push({ property: "og:type", content: meta.ogType });
  if (meta.ogUrl) m.push({ property: "og:url", content: meta.ogUrl });
  if (meta.ogImage) m.push({ property: "og:image", content: meta.ogImage });

  if (meta.twitterCard) m.push({ name: "twitter:card", content: meta.twitterCard });
  if (meta.twitterTitle) m.push({ name: "twitter:title", content: meta.twitterTitle });
  if (meta.twitterDescription)
    m.push({ name: "twitter:description", content: meta.twitterDescription });
  if (meta.ogImage) m.push({ name: "twitter:image", content: meta.ogImage });

  const links: Array<Record<string, string>> = [];
  if (meta.canonical) links.push({ rel: "canonical", href: meta.canonical });

  const scripts: Array<Record<string, string>> = [];
  if (meta.jsonLd) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(meta.jsonLd),
    });
  }

  return { meta: m, links, scripts };
}
