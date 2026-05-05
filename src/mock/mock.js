// Mock data for Kaariq Tailoring & Boutique

export const SITE = {
  brand: "Kaariq",
  tagline: "Your fabric, your fit, your story.",
  phone: "+91 98000 00000",
  whatsapp: "+91 98000 00000",
  email: "hello@kaariq.in",
  address: "Kaariq Atelier, 12 Heritage Lane, Bandra West, Mumbai 400050",
  hours: "Mon – Sat · 11:00 – 20:00",
};

export const ANNOUNCEMENTS = [
  "Complimentary doorstep measurement on orders above ₹5,000",
  "New Wedding Edit · Now Open for Consultations",
  "Free virtual fitting · Book in 60 seconds",
];

export const NAV = [
  {
    key: "tailoring",
    label: "Tailoring",
    columns: [
      {
        title: "Women's Wear",
        items: ["Blouse", "Kurta", "Anarkali", "Lehenga", "Bottoms & Salwars"],
      },
      {
        title: "Men's Wear",
        items: ["Suits & Blazers", "Sherwani", "Kurta Pyjama", "Waistcoats", "Trousers"],
      },
      {
        title: "Customizations",
        items: ["Embroidery & Work", "Neckline Designs", "Sleeve Styles", "Fabric Dyeing"],
      },
      { title: "Alterations", items: ["Alterations & Repairs"] },
    ],
  },
  {
    key: "collections",
    label: "Collections",
    columns: [
      {
        title: "Occasions",
        items: ["Wedding Edit", "Festive Wear", "Party & Evening", "Formal Business"],
      },
      {
        title: "Styles",
        items: ["Casual Daily", "Boho Chic", "Classic Vintage", "Modern Minimalist"],
      },
      { title: "Seasonal", items: ["Summer Breeze", "Winter Velvet", "Monsoon Essentials"] },
      { title: "Featured", items: ["New Arrivals", "Best Sellers"] },
    ],
  },
  {
    key: "pricing",
    label: "Pricing",
    columns: [
      {
        title: "Rates",
        items: ["Standard Rates", "Premium Bespoke", "Alteration Charges", "Bulk Orders"],
      },
    ],
  },
  {
    key: "explore",
    label: "Explore",
    columns: [
      {
        title: "Discover",
        items: [
          "Gallery & Lookbook",
          "Blog & Fashion News",
          "AI Design Tool",
          "Personal Style Quiz",
          "Customer Showreels",
        ],
      },
    ],
  },
  {
    key: "booking",
    label: "Booking Guide",
    columns: [
      {
        title: "Plan Your Visit",
        items: ["Our Process", "Measurement Guide", "Book Appointment", "Virtual Consultation"],
      },
    ],
  },
  {
    key: "contact",
    label: "Contact Us",
    columns: [
      {
        title: "Get In Touch",
        items: ["Find Our Studio", "WhatsApp Support", "Corporate Inquiries"],
      },
    ],
  },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1746372283841-dbb3838f9935",
  women: "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg",
  men: "https://images.pexels.com/photos/6458310/pexels-photo-6458310.jpeg",
  embroidery: "https://images.unsplash.com/photo-1724856604254-f7cf4e9c8f72",
  craft: "/longBanner.png",
  wedding: "https://images.unsplash.com/photo-1724856604403-60304b28906c",
  festive: "https://images.pexels.com/photos/12100636/pexels-photo-12100636.jpeg",
  casual: "https://images.unsplash.com/photo-1768651925875-d1523ed07cb6",
  lookbook: "https://images.unsplash.com/photo-1724433530860-f094e39b64e7",
  fabric: "https://images.pexels.com/photos/34191411/pexels-photo-34191411.jpeg",
  consultation: "https://images.unsplash.com/photo-1764298493253-e49696c110e7",
  boutique: "https://images.pexels.com/photos/6044231/pexels-photo-6044231.jpeg",
};

export const SERVICES = [
  {
    title: "Women's Wear",
    desc: "Blouses, Kurtas, Anarkalis, Lehengas, and bottoms — bespoke from sketch to stitch.",
    img: "/cards/womens-wear.png",
    link: "/tailoring/womens-wear",
  },
  {
    title: "Men's Wear",
    desc: "Suits, Sherwanis, Kurta-pyjamas and waistcoats — tailored to a flawless silhouette.",
    img: "/cards/mens-wear.png",
    link: "/tailoring/mens-wear",
  },
  {
    title: "Customizations",
    desc: "Hand embroidery, necklines, sleeves, and dyeing — make every piece unmistakably yours.",
    img: "/cards/customizations.png",
    link: "/tailoring/customizations",
  },
  {
    title: "Alterations & Repairs",
    desc: "Trusted alterations and restoration for ready-to-wear or beloved heirlooms.",
    img: "/cards/alterations.png",
    link: "/tailoring/alterations",
  },
];

export const COLLECTIONS = [
  {
    tag: "Daily Wear",
    title: "Daily Wear",
    images: [
      "/collections/daily/1.png",
      "/collections/daily/2.png",
      "/collections/daily/3.png",
      "/collections/daily/4.png",
      "/collections/daily/5.png",
      "/collections/daily/6.png",
    ],
    blurb: "Comfort-first styles for everyday elegance.",
  },
  {
    tag: "Office Wear",
    title: "Office Wear",
    images: [
      "/collections/formals/1.png",
      "/collections/formals/2.png",
      "/collections/formals/3.png",
      "/collections/formals/4.png",
      "/collections/formals/5.png",
      "/collections/formals/6.png",
    ],
    blurb: "Sharp, confident looks for workdays.",
  },
  {
    tag: "Wedding Edit",
    title: "Wedding Edit",
    images: [
      "/collections/wedding/1.png",
      "/collections/wedding/2.png",
      "/collections/wedding/3.png",
      "/collections/wedding/4.png",
    ],
    blurb: "Statement pieces for grand celebrations.",
  },
];

export const FEATURES = [
  { title: "Doorstep Measurement", desc: "Our master tailor visits you at home or office." },
  {
    title: "Virtual Fitting",
    desc: "Consult with our e-designer over video, anywhere in the world.",
  },
  { title: "Expert Craftsmanship", desc: "Hand-finished by artisans with 20+ years of training." },
  {
    title: "Perfect Fit Promise",
    desc: "Three rounds of fittings included on every bespoke order.",
  },
  { title: "Eye for Detail", desc: "Curated linings, buttons, threads — nothing left to chance." },
  { title: "Quick Turnaround", desc: "From sketch to delivery in as little as 14 days." },
  {
    title: "Sustainable Practices",
    desc: "Zero-waste cutting, natural dyes and end-of-life take-back.",
  },
  {
    title: "Timeless Fashion",
    desc: "Silhouettes that outlast trends — built to be worn for years.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Consult",
    desc: "Tell us your story, occasion, and inspirations — at the studio, your home, or on a video call.",
  },
  {
    n: "02",
    title: "Measure",
    desc: "Master tailor records 14 reference measurements and posture notes.",
  },
  {
    n: "03",
    title: "Design",
    desc: "We sketch, swatch and finalise fabric, lining, embroidery and trims.",
  },
  {
    n: "04",
    title: "Craft",
    desc: "Hand-cut, machine and hand-stitched in our atelier — with regular updates.",
  },
  { n: "05", title: "Fit", desc: "Two rounds of fittings included to perfect every seam." },
  {
    n: "06",
    title: "Deliver",
    desc: "Beautifully packaged and delivered to your door, with a lifetime alteration warranty.",
  },
];

export const PRICING = [
  {
    plan: "Standard",
    headline: "Everyday tailoring, exceptional quality.",
    items: [
      ["Blouse (basic)", "₹1,200"],
      ["Kurta (women)", "₹1,800"],
      ["Salwar / Pant", "₹900"],
      ["Kurta Pyjama (men)", "₹2,200"],
      ["Trousers", "₹1,400"],
      ["Waistcoat", "₹1,800"],
    ],
  },
  {
    plan: "Premium Bespoke",
    headline: "Hand-finished with master artisans.",
    featured: true,
    items: [
      ["Bridal Lehenga", "from ₹85,000"],
      ["Anarkali (heavy work)", "from ₹18,000"],
      ["Sherwani", "from ₹22,000"],
      ["Designer Suit (men)", "from ₹28,000"],
      ["Designer Blouse", "from ₹4,500"],
      ["Hand Embroidery", "from ₹6,000"],
    ],
  },
  {
    plan: "Alterations",
    headline: "Bring your wardrobe back to life.",
    items: [
      ["Hem (trouser/kurta)", "₹250"],
      ["Take in / Let out", "₹400"],
      ["Zipper Replacement", "₹350"],
      ["Lining Replacement", "₹900"],
      ["Blouse refit", "₹600"],
      ["Bridal restoration", "on quote"],
    ],
  },
];

export const HERO_SLIDES = [
  {
    id: "fast-home-tailoring",
    title: "48-Hour Stitching.\nPickup & Delivery.",
    body: "We pick up from your home, stitch in 2 days, and deliver ready to wear.",
    cta: { label: "Book Free Pickup", to: "/booking/book-appointment" },
    image: "/banners/home-tailoring.png",
    align: "left",
    overlay:
      "linear-gradient(90deg, rgba(50,56,43,0.8) 0%, rgba(50,56,43,0.35) 55%, rgba(0,0,0,0) 85%)",
  },
  {
    id: "custom-design",
    title: "Send Any Design.\nWe Stitch It for You.",
    body: "Pinterest, Instagram, or your idea — we design, stitch, and deliver in 48 hours.",
    cta: { label: "Upload Your Design", to: "/custom-design" },
    image: "/banners/custom-design.png",
    align: "right",
    overlay:
      "linear-gradient(270deg, rgba(50,56,43,0.78) 0%, rgba(50,56,43,0.35) 55%, rgba(0,0,0,0) 85%)",
  },
  {
    id: "design-help",
    title: "No Design?\nWe Help You Choose.",
    body: "Get expert advice, design options, and stitching — all handled for you.",
    cta: { label: "Get Style Advice", to: "/design-consultation" },
    image: "/banners/design-help.png",
    align: "left",
    overlay:
      "linear-gradient(90deg, rgba(50,56,43,0.78) 0%, rgba(50,56,43,0.35) 50%, rgba(0,0,0,0) 80%)",
  },
  {
    id: "perfect-fit",
    title: "Perfect Fit.\nFree Alterations.",
    body: "If it’s not right, we fix it free within 4 days — no extra charges.",
    cta: { label: "Fix My Fit", to: "/alterations" },
    image: "/banners/perfect-fit.png",
    align: "right",
    overlay:
      "linear-gradient(270deg, rgba(50,56,43,0.8) 0%, rgba(50,56,43,0.4) 55%, rgba(0,0,0,0) 85%)",
  },
  {
    id: "custom-work",
    title: "Embroidery, Dyeing,\nLacework — Done.",
    body: "Custom detailed work, made to your design and finished exactly how you want.",
    cta: { label: "Explore Custom Work", to: "/custom-work" },
    image: "/banners/custom-work.png",
    align: "left",
    overlay:
      "linear-gradient(90deg, rgba(50,56,43,0.75) 0%, rgba(50,56,43,0.3) 50%, rgba(0,0,0,0) 80%)",
  },
  {
    id: "mens-stitching",
    title: "Men’s Clothes That Actually Fit.",
    body: "Shirts, trousers, kurtas — home measurement, 48-hour stitching, doorstep delivery.",
    cta: { label: "View Men’s Styles", to: "/mens-stitching" },
    image: "/banners/mens-stitching.png",
    align: "right",
    overlay:
      "linear-gradient(270deg, rgba(50,56,43,0.8) 0%, rgba(50,56,43,0.35) 55%, rgba(0,0,0,0) 85%)",
  },
];
export const TESTIMONIAL_MEDIA = [
  {
    name: "Ananya Mehta",
    role: "Bride, Mumbai",
    quote:
      "My bridal lehenga felt like a second skin. The Kaariq team understood my brief in a single sitting and delivered the most exquisite hand-zardozi I have seen.",
    type: "image",
    thumb: "https://images.unsplash.com/photo-1724856604403-60304b28906c",
    src: "https://images.unsplash.com/photo-1724856604403-60304b28906c",
  },
  {
    name: "Rohan Khanna",
    role: "Groom, Delhi",
    quote:
      "A sherwani that fit perfectly on day one \u2014 without a single follow-up alteration. Effortless, world-class craftsmanship.",
    type: "video",
    thumb: "https://images.pexels.com/photos/6687162/pexels-photo-6687162.jpeg",
    src: "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1",
  },
  {
    name: "Priya Iyer",
    role: "Bengaluru",
    quote:
      "I sent my measurements on a Sunday and a kurta set arrived in 12 days. Beautifully finished, packaging like a luxury brand.",
    type: "image",
    thumb: "https://images.unsplash.com/photo-1768651925875-d1523ed07cb6",
    src: "https://images.unsplash.com/photo-1768651925875-d1523ed07cb6",
  },
  {
    name: "Arjun Nair",
    role: "Singapore",
    quote: "Their virtual fitting actually works. Three suits later, I am a customer for life.",
    type: "video",
    thumb: "https://images.unsplash.com/photo-1729347917808-e3e35a462fec",
    src: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
  },
];

export const TESTIMONIALS = TESTIMONIAL_MEDIA;

export const BLOG = [
  {
    title: "A guide to choosing the right blouse neckline",
    date: "Apr 18, 2026",
    tag: "Style",
    img: "https://images.pexels.com/photos/36435092/pexels-photo-36435092.jpeg",
  },
  {
    title: "Why hand-zardozi is making a comeback",
    date: "Apr 02, 2026",
    tag: "Craft",
    img: "https://images.unsplash.com/photo-1763400126795-d83e07d3449e",
  },
  {
    title: "How to take measurements at home",
    date: "Mar 21, 2026",
    tag: "Guide",
    img: "https://images.pexels.com/photos/13206032/pexels-photo-13206032.jpeg",
  },
  {
    title: "Inside our atelier: the making of a bridal lehenga",
    date: "Mar 06, 2026",
    tag: "Atelier",
    img: "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg",
  },
];

export const GALLERY = [
  IMAGES.wedding,
  IMAGES.lookbook,
  IMAGES.women,
  IMAGES.embroidery,
  IMAGES.festive,
  IMAGES.men,
  IMAGES.casual,
  IMAGES.fabric,
  IMAGES.craft,
  IMAGES.boutique,
  IMAGES.consultation,
  IMAGES.hero,
];

export const FAQ = [
  {
    q: "How long does a bespoke order take?",
    a: "14–21 days for most garments. Bridal pieces with heavy hand-work take 6–10 weeks.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship worldwide via DHL with full insurance. Delivery in 4–7 business days.",
  },
  {
    q: "What if the fit isn\u2019t right?",
    a: "Every bespoke order includes 2 fittings. If the fit is still off, we re-make it on us.",
  },
  {
    q: "Can I bring my own fabric?",
    a: "Absolutely. We charge stitching only — and will advise on lining and trims.",
  },
];
