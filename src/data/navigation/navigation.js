// Single source of truth for site navigation.
// Loaded from src/data/navigation.json and exposes helpers + legacy `NAV` shape.
import NAVIGATION_JSON from "./navigation.json";

export const NAVIGATION = NAVIGATION_JSON;

// Legacy `NAV` shape used by Header / SubCategoryCarousel:
// [{ key, label, columns: [{ title, items: [labelString] }] }]
export const NAV = NAVIGATION.map((n) => ({
  key: n.key,
  label: n.label,
  columns: n.groups.map((g) => ({
    title: g.title,
    items: g.items.map((it) => ({
      label: it.label,
      slug: it.slug,
    })),
  })),
}));

// Find a section by key.
export const getSection = (key) => NAVIGATION.find((s) => s.key === key);

// Flat list of items in a section.
export const flatItems = (key) => {
  const s = getSection(key);
  return s ? s.groups.flatMap((g) => g.items) : [];
};

// Look up an item by section key + slug.
export const findItem = (key, slug) => flatItems(key).find((i) => i.slug === slug);

// Resolve route for an item.
export const routeForItem = (sectionKey, slug) => `/${sectionKey}/${slug}`;

// Build slug→meta lookup for a section (used by routers).
export const slugMap = (key) => Object.fromEntries(flatItems(key).map((i) => [i.slug, i]));
