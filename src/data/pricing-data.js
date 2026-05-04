// Comprehensive pricing tables
export const PRICING_GROUPS = [
  {
    id: "womens",
    label: "Women's Wear",
    intro:
      "Bespoke tailoring with two fittings, premium lining, and complimentary alteration warranty.",
    rows: [
      ["Blouse — Standard", "₹2,500", "5–6 days"],
      ["Blouse — Designer", "from ₹3,500", "5–6 days"],
      ["Kurti / Kurta", "from ₹1,000", "2 days"],
      ["Anarkali — Light", "from ₹2,500", "3 days"],
      ["Anarkali — Heavy", "from ₹3,000", "3 weeks"],
      ["Lehenga — Festive", "from ₹9,000", "5–6 days"],
      ["Lehenga — Bridal", "from ₹15,000", "5–6 days"],
      ["Salwar / Pant", "from ₹1200", "2 days"],
      ["Saree Blouse + Fall-Pico", "₹1,650", "1 days"],
    ],
  },
  {
    id: "mens",
    label: "Men's Wear",
    intro: "Hand-cut canvas, full-canvas construction available on premium suits.",
    rows: [
      ["Two-piece Suit", "from ₹10,000", "1–2 weeks"],
      ["Three-piece Suit", "from ₹12,500", "1–2 weeks"],
      ["Tuxedo", "from ₹15,000", "1–2 weeks"],
      ["Bandhgala / Jodhpuri", "from ₹15,000", "1–2 weeks"],
      ["Sherwani — Wedding", "from ₹20,000", "2-3 weeks"],
      ["Kurta Pyjama", "from ₹2,000", "2-3 days"],
      ["Designer Waistcoat", "from ₹4,000", "2-3 days"],
      ["Trousers", "from ₹1,500", "2–3 days"],
    ],
  },
  {
    id: "embroidery",
    label: "Embroidery & Hand Work",
    intro:
      "Charged in addition to garment cost. Final pricing depends on motif density and panel size.",
    rows: [
      ["Light Resham / Threadwork", "from ₹2,500", "+5–7 days"],
      ["Medium Aari / Zari", "from ₹6,500", "+10–14 days"],
      ["Heavy Zardozi", "from ₹14,000", "+3–4 weeks"],
      ["Mirror / Sheesha Work", "from ₹4,500", "+7–10 days"],
      ["Sequin / Bead Work", "from ₹5,500", "+7–12 days"],
      ["Cutwork / Chikankari", "from ₹7,500", "+2–3 weeks"],
    ],
  },
  {
    id: "alterations",
    label: "Alterations & Repairs",
    intro:
      "Free for life on every Kaariq bespoke order. Below rates apply to ready-to-wear and external garments.",
    rows: [
      ["Hem (trouser / kurta)", "₹250", "1-2 days"],
      ["Take in / Let out", "₹400", "1-2 days"],
      ["Sleeve Shorten", "₹300", "2 days"],
      ["Zipper Replacement", "₹350", "1-2 days"],
      ["Lining Replacement", "₹900", "1-2 days"],
      ["Blouse Refit", "₹600", "2-3 days"],
      ["Bridal Restoration", "on quote", "1–2 weeks"],
    ],
  },
  {
    id: "addons",
    label: "Add-ons & Finishing",
    intro: "Add to any order to elevate the finish.",
    rows: [
      ["Premium Inner Lining", "₹350", "—"],
      ["Bra-cup Padding", "₹250", "—"],
      ["Contrast Piping", "₹200", "—"],
      ["Fall & Pico (saree)", "₹150", "—"],
      ["Cancan / Volume Net", "₹1,200", "—"],
      ["Designer Buttons", "₹300", "—"],
      ["Concealed Side Zipper", "₹200", "—"],
      ["Dori with Tassels", "₹400", "—"],
    ],
  },
  {
    id: "bulk",
    label: "Bulk & Corporate",
    intro: "Wedding parties, brand uniforms, and trousseau orders.",
    rows: [
      ["10–25 pieces", "8% off", "Dedicated PM"],
      ["26–50 pieces", "12% off", "Dedicated PM + courier"],
      ["51–100 pieces", "15% off", "Priority production"],
      ["100+ pieces", "18% off", "Custom contract"],
    ],
  },
];

export const PRICING_INCLUDED = [
  "Free design consultation",
  "Free 14-point measurement",
  "Two rounds of fittings",
  "Premium packaging",
  "Lifetime free alterations*",
  "Free pickup & delivery (in 25+ cities)",
];
