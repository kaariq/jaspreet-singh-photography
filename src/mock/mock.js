// Mock data for Kaariq Tailoring & Boutique

export const SITE = {
  brand: "Kaariq",
  tagline: "Your fabric, your fit, your story.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "contact@kaariq.com",
  hours: "Mon – Sat · 10:00 – 18:00",
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
        items: [
          "Kurti",
          "Suits",
          "Blouse",
          "Lehengas",
          "Sharara & Co-ord Sets",
          "Western Dresses & Jumpsuits",
          "Shirts & Trousers",
        ],
      },
      {
        title: "Men's Wear",
        items: [
          "Shirts",
          "Trousers",
          "Kurta Pyjama",
          "Nehru Jackets",
          "Sherwanis",
          "Suits & Blazers",
        ],
      },
      {
        title: "Customizations",
        items: [
          "Embroidery & Work",
          "Neckline & Sleeve Designs",
          "Lace & Patch Work",
          "Fabric Dyeing",
          "Fittings & Alterations",
        ],
      },
    ],
  },
  {
    key: "collections",
    label: "Collections",
    columns: [
      {
        title: "Signature Collections",
        items: ["New Arrivals", "Best Sellers", "Custom Tailoring", "Premium Designs"],
      },
      {
        title: "Shop by Occasion",
        items: ["Wedding Edit", "Festive Wear", "Party Wear", "Office Looks"],
      },
      {
        title: "Trending Styles",
        items: ["Celebrity Inspired", "Everyday Chic", "Modern Ethnic"],
      },
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
        items: ["Find Our Boutique", "WhatsApp Support", "Corporate Inquiries"],
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
    desc: "Elegant ethnic and western tailoring — from kurtis and blouses to lehengas, dresses, and co-ord sets.",
    img: "/cards/womens-wear.png",
    link: "/tailoring/womens-wear",
  },
  {
    title: "Men's Wear",
    desc: "Precision-crafted menswear including shirts, trousers, sherwanis, kurtas, suits, and Nehru jackets.",
    img: "/cards/mens-wear.png",
    link: "/tailoring/mens-wear",
  },
  {
    title: "Customizations",
    desc: "Personalize every outfit with embroidery, neckline styling, sleeve designs, patch work, dyeing, and fittings.",
    img: "/cards/customizations.png",
    link: "/tailoring/customizations",
  },
  {
    title: "Collections",
    desc: "Discover signature collections, festive edits, wedding wear, premium designs, and trending modern ethnic styles.",
    img: "/cards/collections.png",
    link: "/collections",
  },
  {
    title: "Booking Guide",
    desc: "Book appointments, explore measurement guides, understand our process, or schedule a virtual consultation.",
    img: "/cards/booking-guide.png",
    link: "/booking",
  },
  {
    title: "Explore",
    desc: "Browse lookbooks, customer showreels, fashion blogs, AI design tools, and personalized style inspiration.",
    img: "/cards/explore.png",
    link: "/explore",
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
  {
    title: "Doorstep Measurement",
    desc: "Get professionally measured at home for a hassle-free tailoring experience.",
  },
  {
    title: "Virtual Consultation",
    desc: "Connect with our designers online to discuss styles, fabrics, and fittings from anywhere.",
  },
  {
    title: "Perfect Fit Guarantee",
    desc: "Every outfit is tailored to your exact measurements with fitting support included.",
  },
  {
    title: "Premium Craftsmanship",
    desc: "Skilled artisans ensure flawless stitching, finishing, and attention to every detail.",
  },
  {
    title: "Fully Customizable Designs",
    desc: "Choose your preferred necklines, sleeves, embroidery, fabrics, and styling details.",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Timely stitching and delivery without compromising on quality or finishing.",
  },
  {
    title: "Affordable Bespoke Tailoring",
    desc: "Luxury-style customization and tailoring at transparent, customer-friendly pricing.",
  },
  {
    title: "Trusted Alterations & Support",
    desc: "Easy post-delivery alterations and dedicated assistance for complete peace of mind.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Consult",
    desc: "Tell us your story, occasion, and style — on WhatsApp, at our boutique, or at your home. No pressure, just a friendly conversation.",
  },
  {
    n: "02",
    title: "Fabric Pickup",
    desc: "Hand us your saree, suit length, lehenga, or any fabric — we collect it from your door at a time that suits you.",
  },
  {
    n: "03",
    title: "Measure",
    desc: "Our expert darzi takes 16 precise measurements and posture notes — at your home or boutique — for a perfect fit every time.",
  },
  {
    n: "04",
    title: "Design Together",
    desc: "We sketch your silhouette and finalise details — neckline, sleeves, embroidery, gota work, lining — before we begin stitching.",
  },
  {
    n: "05",
    title: "Craft",
    desc: "Hand-stitched by skilled karigars in our boutique. We share WhatsApp photos as your outfit takes shape.",
  },
  {
    n: "06",
    title: "Fitting",
    desc: "Two rounds of fittings — we visit your home or you come to us — until every seam and drape is exactly right.",
  },
  {
    n: "07",
    title: "Deliver",
    desc: "Your outfit arrives beautifully packaged at your door. Minor alterations are free for 60 days — we stand by our craft.",
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
      "I was honestly nervous about getting my bridal lehenga stitched, but the fitting and finishing turned out better than I imagined. Everyone kept asking where I got it made.",
    type: "image",
    thumb: "https://images.unsplash.com/photo-1724856604403-60304b28906c",
    src: "https://images.unsplash.com/photo-1724856604403-60304b28906c",
  },
  {
    name: "Rohan Khanna",
    role: "Delhi",
    quote:
      "The fit of my sherwani was spot on from the first trial itself. Clean stitching, great fabric suggestions, and the whole process felt very smooth.",
    type: "video",
    thumb: "https://images.pexels.com/photos/6687162/pexels-photo-6687162.jpeg",
    src: "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1",
  },
  {
    name: "Priya Iyer",
    role: "Bengaluru",
    quote:
      "I ordered a kurta set after seeing their work online and was genuinely impressed. The fitting was perfect and even the packaging felt thoughtful.",
    type: "image",
    thumb: "https://images.unsplash.com/photo-1768651925875-d1523ed07cb6",
    src: "https://images.unsplash.com/photo-1768651925875-d1523ed07cb6",
  },
  {
    name: "Arjun Nair",
    role: "Singapore",
    quote:
      "I live outside India, so I was unsure about virtual tailoring, but the team guided me really well. The suits arrived fitting surprisingly well.",
    type: "video",
    thumb: "https://images.unsplash.com/photo-1729347917808-e3e35a462fec",
    src: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
  },
];

export const TESTIMONIALS = TESTIMONIAL_MEDIA;

export const BLOG = [
  {
    title: "Met Gala 2026 Proved One Thing: Indian Fashion Is Taking Over Globally",
    slug: "met-gala-2026-indian-fashion-takeover",
    date: "May 03, 2026",
    tag: "Trending",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    excerpt:
      "From saree-inspired gowns to intricate hand embroidery, Indian craftsmanship dominated global fashion conversations this year.",
    description:
      "A deep dive into the biggest Indian-inspired looks from Met Gala 2026 and why global luxury fashion is embracing Indian textiles and tailoring.",
  },
  {
    title: "5 Fashion Mistakes That Make Expensive Outfits Look Cheap",
    slug: "fashion-mistakes-style-guide",
    date: "Apr 28, 2026",
    tag: "Style Tips",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    excerpt:
      "Even premium outfits can lose their charm because of poor fitting and styling mistakes.",
    description:
      "Learn the most common fashion mistakes people make with ethnic and western wear — and simple tailoring fixes that instantly upgrade your look.",
  },
  {
    title: "Why Ready-Made Clothes Never Fit Like Tailor-Made Outfits",
    slug: "ready-made-vs-tailor-made",
    date: "Apr 22, 2026",
    tag: "Awareness",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    excerpt: "The difference between looking dressed and looking polished often comes down to fit.",
    description:
      "Discover how proper tailoring changes posture, comfort, confidence, and the overall appearance of your outfits.",
  },
  {
    title: "Top Bridal Lehenga Trends Every 2026 Bride Is Saving on Pinterest",
    slug: "bridal-lehenga-trends-2026",
    date: "Apr 16, 2026",
    tag: "Bridal Fashion",
    img: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg",
    excerpt:
      "Muted tones, heritage embroidery, and modern silhouettes are defining bridal fashion this year.",
    description:
      "Explore the bridal lehenga styles trending across weddings, Instagram, and Pinterest in 2026.",
  },
  {
    title: "The Hidden Problem With Fast Fashion Nobody Talks About",
    slug: "hidden-problem-fast-fashion",
    date: "Apr 10, 2026",
    tag: "Awareness",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    excerpt:
      "Cheap fashion often comes with poor quality, wasted fabric, and clothes that barely last a season.",
    description:
      "Understand how fast fashion impacts quality, sustainability, and even personal style — and why custom tailoring is making a comeback.",
  },
  {
    title: "How Celebrities Always Look Perfect in Ethnic Wear",
    slug: "celebrity-ethnic-fashion-secrets",
    date: "Apr 04, 2026",
    tag: "Celebrity Style",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    excerpt:
      "It’s not just designer labels — tailoring plays a much bigger role than most people realize.",
    description:
      "From structured fits to custom drapes and styling tricks, here’s how celebrity ethnic looks are carefully tailored for perfection.",
  },
  {
    title: "Before You Buy Your Wedding Outfit, Read This First",
    slug: "wedding-outfit-shopping-guide",
    date: "Mar 29, 2026",
    tag: "Wedding Guide",
    img: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg",
    excerpt:
      "Most wedding outfit regrets happen because people focus only on design, not fitting and comfort.",
    description:
      "A practical guide to choosing bridal and groom wear that looks luxurious, photographs beautifully, and stays comfortable for long events.",
  },
  {
    title: "The Simple Tailoring Trick That Makes Any Outfit Look Premium",
    slug: "tailoring-tricks-premium-look",
    date: "Mar 21, 2026",
    tag: "Fashion Hacks",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    excerpt: "The secret behind expensive-looking outfits is often surprisingly simple.",
    description:
      "Discover how proper sleeve length, shoulder fitting, hemming, and structure can instantly elevate everyday clothing.",
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
    q: "What if my outfit doesn’t fit properly after delivery?",
    a: "We provide alteration support for fitting issues. In most cases, minor adjustments can be done quickly to achieve the perfect fit.",
  },
  {
    q: "I don’t know which design or style will suit me. Can you help?",
    a: "Yes, our team guides you with design suggestions based on your body type, occasion, comfort, and personal style preferences.",
  },
  {
    q: "Can you stitch outfits from reference photos or Pinterest designs?",
    a: "Yes, you can share inspiration images, and we’ll help recreate a similar design tailored to your measurements and preferences.",
  },
  {
    q: "What if I’m unable to visit the boutique in person?",
    a: "You can book a virtual consultation or doorstep measurement service, making the entire process convenient from home.",
  },
  {
    q: "How many fittings are usually required?",
    a: "Most outfits require only one fitting, while bridal or heavily customized garments may need additional trials for precision.",
  },
  {
    q: "Can alterations be done on ready-made clothes?",
    a: "Yes, we alter ready-made ethnic and western wear including dresses, blouses, suits, trousers, and occasion wear.",
  },
  {
    q: "What if I need my outfit urgently for an event or wedding?",
    a: "Depending on the design and workload, we do accept urgent orders whenever possible. We recommend contacting us early for priority scheduling.",
  },
  {
    q: "Will the final outfit look exactly like the sample or reference image?",
    a: "We aim to recreate the overall style and detailing closely, while also adapting the design to your fabric, measurements, and finishing preferences.",
  },
  {
    q: "Do you help with fabric selection?",
    a: "Yes, we guide customers on suitable fabrics based on design, fall, comfort, occasion, and budget.",
  },
  {
    q: "How do I give measurements if I’m ordering online?",
    a: "We provide a simple measurement guide and can also assist you through video call support for accurate sizing.",
  },
];
