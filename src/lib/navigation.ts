export type SubItem = { label: string; items?: string[] };
export type NavSection = { key: string; label: string; href: string; submenu?: SubItem[]; feature?: { title: string; image: string; href: string } };

import lehenga from "@/assets/collection-lehenga.jpg";
import sherwani from "@/assets/collection-sherwani.jpg";
import fabrics from "@/assets/fabrics-stack.jpg";
import embroidery from "@/assets/embroidery-detail.jpg";
import anarkali from "@/assets/collection-anarkali.jpg";
import tailor from "@/assets/tailor-hands.jpg";

export const navigation: NavSection[] = [
  {
    key: "tailoring",
    label: "Tailoring",
    href: "/tailoring",
    feature: { title: "Bespoke Bridal Lehenga", image: lehenga, href: "/collections" },
    submenu: [
      { label: "Women's Wear", items: ["Blouse", "Kurta", "Anarkali", "Lehenga", "Bottoms & Salwars"] },
      { label: "Men's Wear", items: ["Suits & Blazers", "Sherwani", "Kurta Pyjama", "Waistcoats", "Trousers"] },
      { label: "Customizations", items: ["Embroidery & Work", "Neckline Designs", "Sleeve Styles", "Fabric Dyeing"] },
      { label: "Alterations & Repairs" },
    ],
  },
  {
    key: "collections",
    label: "Collections",
    href: "/collections",
    feature: { title: "The Wedding Edit 2026", image: anarkali, href: "/collections" },
    submenu: [
      { label: "Occasions", items: ["Wedding Edit", "Festive Wear", "Party & Evening", "Formal Business"] },
      { label: "Styles", items: ["Casual Daily", "Boho Chic", "Classic Vintage", "Modern Minimalist"] },
      { label: "Seasonal", items: ["Summer Breeze", "Winter Velvet", "Monsoon Essentials"] },
      { label: "New Arrivals" },
      { label: "Best Sellers" },
    ],
  },
  {
    key: "pricing",
    label: "Pricing",
    href: "/pricing",
    feature: { title: "Transparent, honest rates", image: fabrics, href: "/pricing" },
    submenu: [
      { label: "Standard Rates" },
      { label: "Premium Bespoke" },
      { label: "Alteration Charges" },
      { label: "Bulk Orders" },
    ],
  },
  {
    key: "explore",
    label: "Explore",
    href: "/explore",
    feature: { title: "AI Design Tool — try it free", image: embroidery, href: "/explore" },
    submenu: [
      { label: "Gallery & Lookbook" },
      { label: "Blog & Fashion News" },
      { label: "AI Design Tool" },
      { label: "Personal Style Quiz" },
      { label: "Customer Showreels" },
    ],
  },
  {
    key: "booking",
    label: "Booking & Guide",
    href: "/booking",
    feature: { title: "Book a fitting at your home", image: tailor, href: "/booking" },
    submenu: [
      { label: "Our Process" },
      { label: "Measurement Guide" },
      { label: "Book Appointment" },
      { label: "Virtual Consultation" },
    ],
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    submenu: [
      { label: "Find Our Studio" },
      { label: "WhatsApp Support" },
      { label: "Corporate Inquiries" },
    ],
  },
];

export const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
