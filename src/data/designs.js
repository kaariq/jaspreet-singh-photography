// Predefined design subcategories for each tailoring category.
// Each design: { id, label, blurb, image, basePrice }
import { IMAGES } from "@/mock/mock";

const _i = IMAGES;

export const DESIGNS = {
  blouse: [
    {
      id: "princess-cut",
      label: "Princess Cut Blouse",
      blurb: "Structured contour fit with elegant shaping.",
      image: _i.women,
      basePrice: 2200,
      tags: ["bridal", "classic", "tailored"],
    },
    {
      id: "halter-neck",
      label: "Halter Neck Blouse",
      blurb: "Modern neckline with open shoulder silhouette.",
      image: _i.women,
      basePrice: 2600,
      tags: ["modern", "cocktail", "pinterest"],
    },
    {
      id: "four-dart",
      label: "Four Dart Blouse",
      blurb: "Precision-tailored fit with enhanced structure.",
      image: _i.women,
      basePrice: 2400,
      tags: ["tailored", "traditional", "fitted"],
    },
    {
      id: "deep-back",
      label: "Deep Back Blouse",
      blurb: "Elegant deep-back styling with tie-up detailing.",
      image: _i.embroidery,
      basePrice: 3200,
      tags: ["bridal", "viral", "festive"],
    },
    {
      id: "choli-cut",
      label: "Choli Cut Blouse",
      blurb: "Traditional choli-inspired cropped silhouette.",
      image: _i.festive,
      basePrice: 2800,
      tags: ["ethnic", "garba", "wedding"],
    },
    {
      id: "corset",
      label: "Corset Blouse",
      blurb: "Boned structured silhouette with couture finish.",
      image: _i.wedding,
      basePrice: 4200,
      tags: ["pinterest", "luxury", "celebrity"],
    },
    {
      id: "boat-neck",
      label: "Boat Neck Blouse",
      blurb: "Elegant wide neckline with timeless appeal.",
      image: _i.women,
      basePrice: 2100,
      tags: ["minimal", "elegant", "classic"],
    },
    {
      id: "off-shoulder",
      label: "Off Shoulder Blouse",
      blurb: "Contemporary off-shoulder festive silhouette.",
      image: _i.wedding,
      basePrice: 3500,
      tags: ["party", "modern", "instagram"],
    },
  ],
  kurti: [
    {
      id: "a-line",
      label: "A-Line Kurti",
      blurb: "Easy-flow silhouette for everyday elegance.",
      image: _i.casual,
      basePrice: 2200,
      tags: ["office", "minimal", "dailywear"],
    },
    {
      id: "angrakha",
      label: "Angrakha Kurti",
      blurb: "Overlap tie-up silhouette with ethnic detailing.",
      image: _i.festive,
      basePrice: 3400,
      tags: ["traditional", "festive", "ethnic"],
    },
    {
      id: "pakistani",
      label: "Pakistani Kurta",
      blurb: "Relaxed luxe fit inspired by modern Pakistani fashion.",
      image: _i.festive,
      basePrice: 4200,
      tags: ["viral", "luxury", "instagram"],
    },
    {
      id: "kaftan",
      label: "Kaftan Kurti",
      blurb: "Relaxed resort-inspired silhouette with fluid drape.",
      image: _i.casual,
      basePrice: 3800,
      tags: ["modern", "resort", "pinterest"],
    },
    {
      id: "anarkali-panel",
      label: "Panelled Anarkali Kurti",
      blurb: "Multi-panel flare with graceful movement.",
      image: _i.festive,
      basePrice: 5200,
      tags: ["festive", "wedding", "luxury"],
    },
    {
      id: "straight-cut",
      label: "Straight Cut Kurti",
      blurb: "Sharp straight silhouette with modern simplicity.",
      image: _i.casual,
      basePrice: 2100,
      tags: ["minimal", "office", "smart"],
    },
  ],
  lehenga: [
    {
      id: "panelled",
      label: "Panelled Lehenga",
      blurb: "Multi-panel construction with couture flare.",
      image: _i.wedding,
      basePrice: 42000,
      tags: ["bridal", "couture", "luxury"],
    },
    {
      id: "fish-cut",
      label: "Fish Cut Lehenga",
      blurb: "Figure-hugging silhouette with dramatic flare.",
      image: _i.wedding,
      basePrice: 48000,
      tags: ["reception", "glam", "celebrity"],
    },
    {
      id: "double-dupatta",
      label: "Double Dupatta Lehenga",
      blurb: "Royal bridal styling with layered dupatta drape.",
      image: _i.wedding,
      basePrice: 65000,
      tags: ["bridal", "royal", "trending"],
    },
    {
      id: "a-line",
      label: "A-Line Lehenga",
      blurb: "Elegant structured flare for timeless bridal looks.",
      image: _i.wedding,
      basePrice: 36000,
      tags: ["classic", "wedding", "minimal"],
    },
    {
      id: "can-can",
      label: "Can-Can Lehenga",
      blurb: "Heavy volume silhouette with grand movement.",
      image: _i.wedding,
      basePrice: 58000,
      tags: ["bridal", "dramatic", "luxury"],
    },
  ],

  suit: [
    {
      id: "two-piece",
      label: "Two Piece Suit",
      blurb: "Timeless formal tailoring with sharp structure.",
      image: _i.men,
      basePrice: 24000,
      tags: ["formal", "business", "classic"],
    },
    {
      id: "three-piece",
      label: "Three Piece Suit",
      blurb: "Waistcoat layered tailoring for elevated occasions.",
      image: _i.men,
      basePrice: 32000,
      tags: ["wedding", "luxury", "premium"],
    },
    {
      id: "tuxedo",
      label: "Tuxedo Suit",
      blurb: "Satin lapel formalwear for black tie events.",
      image: _i.men,
      basePrice: 42000,
      tags: ["blacktie", "groom", "luxury"],
    },
    {
      id: "bandhgala",
      label: "Bandhgala Suit",
      blurb: "Royal Indian formal silhouette with structured collar.",
      image: _i.men,
      basePrice: 34000,
      tags: ["royal", "wedding", "heritage"],
    },
  ],

  sherwani: [
    {
      id: "classic",
      label: "Classic Sherwani",
      blurb: "Traditional groomwear with timeless embroidery.",
      image: _i.wedding,
      basePrice: 32000,
      tags: ["groom", "traditional", "wedding"],
    },
    {
      id: "indo-western",
      label: "Indo-Western Sherwani",
      blurb: "Fusion silhouette blending modern and ethnic tailoring.",
      image: _i.men,
      basePrice: 42000,
      tags: ["designer", "modern", "luxury"],
    },
    {
      id: "achkan",
      label: "Achkan Sherwani",
      blurb: "Elegant elongated silhouette inspired by royal courts.",
      image: _i.wedding,
      basePrice: 36000,
      tags: ["royal", "heritage", "premium"],
    },
  ],

  "kurta-pyjama": [
    {
      id: "classic-kurta",
      label: "Classic Kurta Pyjama",
      blurb: "Simple elegant ethnic staple for all occasions.",
      image: _i.consultation,
      basePrice: 3800,
      tags: ["festive", "traditional", "minimal"],
    },
    {
      id: "pathani",
      label: "Pathani Kurta",
      blurb: "Relaxed masculine silhouette with bold ethnic styling.",
      image: _i.consultation,
      basePrice: 4500,
      tags: ["ethnic", "classic", "eid"],
    },
    {
      id: "short-kurta",
      label: "Short Kurta",
      blurb: "Contemporary short-length silhouette for casual wear.",
      image: _i.consultation,
      basePrice: 3200,
      tags: ["casual", "modern", "smart"],
    },
  ],
};

// Customisation options used by the order journey
export const NECKLINES = [
  {
    id: "round",
    label: "Round Neck",
    tags: ["classic", "minimal", "dailywear"],
  },
  {
    id: "deep-round",
    label: "Deep Round Neck",
    tags: ["traditional", "festive", "elegant"],
  },
  {
    id: "v-neck",
    label: "V Neck",
    tags: ["modern", "slimming", "minimal"],
  },
  {
    id: "deep-v",
    label: "Deep V Neck",
    tags: ["bold", "party", "bridal"],
  },
  {
    id: "sweetheart",
    label: "Sweetheart Neck",
    tags: ["bridal", "romantic", "luxury"],
  },
  {
    id: "square",
    label: "Square Neck",
    tags: ["vintage", "structured", "pinterest"],
  },
  {
    id: "boat",
    label: "Boat Neck",
    tags: ["timeless", "graceful", "elegant"],
  },
  {
    id: "halter",
    label: "Halter Neck",
    tags: ["modern", "cocktail", "celebrity"],
  },
  {
    id: "mandarin",
    label: "Mandarin Collar",
    tags: ["ethnic", "royal", "heritage"],
  },
  {
    id: "collar",
    label: "Shirt Collar Neck",
    tags: ["fusion", "formal", "smart"],
  },
  {
    id: "high-neck",
    label: "High Neck",
    tags: ["winter", "royal", "modest"],
  },
  {
    id: "queen-anne",
    label: "Queen Anne Neck",
    tags: ["bridal", "luxury", "designer"],
  },
  {
    id: "illusion",
    label: "Illusion Neck",
    tags: ["net", "couture", "bridal"],
  },
  {
    id: "off-shoulder",
    label: "Off Shoulder Neck",
    tags: ["party", "instagram", "trending"],
  },
  {
    id: "one-shoulder",
    label: "One Shoulder Neck",
    tags: ["cocktail", "designer", "modern"],
  },
  {
    id: "keyhole-neck",
    label: "Keyhole Neck",
    tags: ["stylish", "fusion", "elegant"],
  },
  {
    id: "scallop",
    label: "Scallop Neck",
    tags: ["feminine", "luxury", "soft"],
  },
  {
    id: "u-neck",
    label: "U Neck",
    tags: ["traditional", "versatile", "ethnic"],
  },
  {
    id: "pot-neck",
    label: "Pot Neck",
    tags: ["south-indian", "bridal", "classic"],
  },
  {
    id: "princess-neck",
    label: "Princess Neck",
    tags: ["tailored", "elegant", "bridal"],
  },
  {
    id: "plunging-neck",
    label: "Plunging Neck",
    tags: ["bold", "celebrity", "party"],
  },
  {
    id: "jewel-neck",
    label: "Jewel Neck",
    tags: ["formal", "minimal", "clean"],
  },
  {
    id: "cowl-neck",
    label: "Cowl Neck",
    tags: ["designer", "draped", "luxury"],
  },
  {
    id: "notched-neck",
    label: "Notched Neck",
    tags: ["indo-western", "smart", "modern"],
  },
];

export const BACK_DESIGNS = [
  {
    id: "closed",
    label: "Closed Back",
    tags: ["classic", "formal", "minimal"],
  },
  {
    id: "deep-u",
    label: "Deep U Back",
    tags: ["bridal", "traditional", "viral"],
  },
  {
    id: "deep-v",
    label: "Deep V Back",
    tags: ["bold", "party", "modern"],
  },
  {
    id: "backless-dori",
    label: "Backless Dori",
    tags: ["bridal", "celebrity", "trending"],
  },
  {
    id: "keyhole",
    label: "Keyhole Back",
    tags: ["subtle", "designer", "elegant"],
  },
  {
    id: "button",
    label: "Button Back",
    tags: ["tailored", "vintage", "luxury"],
  },
  {
    id: "zipper",
    label: "Concealed Zipper Back",
    tags: ["structured", "modern", "clean"],
  },
  {
    id: "tie-up",
    label: "Tie-Up Back",
    tags: ["ethnic", "festive", "designer"],
  },
  {
    id: "criss-cross",
    label: "Criss Cross Back",
    tags: ["party", "instagram", "bold"],
  },
  {
    id: "sheer-net",
    label: "Sheer Net Back",
    tags: ["luxury", "bridal", "couture"],
  },
  {
    id: "latkan-back",
    label: "Latkan Back",
    tags: ["traditional", "festive", "trending"],
  },
  {
    id: "bow-back",
    label: "Bow Tie Back",
    tags: ["cute", "feminine", "designer"],
  },
  {
    id: "multi-dori",
    label: "Multi Dori Back",
    tags: ["bridal", "statement", "viral"],
  },
  {
    id: "window-back",
    label: "Window Cut Back",
    tags: ["modern", "stylish", "fusion"],
  },
  {
    id: "corset-back",
    label: "Corset Tie Back",
    tags: ["luxury", "celebrity", "pinterest"],
  },
  {
    id: "pearl-back",
    label: "Pearl String Back",
    tags: ["soft-glam", "bridal", "luxury"],
  },
];

export const SLEEVE_STYLES = [
  {
    id: "sleeveless",
    label: "Sleeveless",
    tags: ["modern", "summer", "minimal"],
  },
  {
    id: "cap",
    label: "Cap Sleeve",
    tags: ["cute", "casual", "soft"],
  },
  {
    id: "short",
    label: "Short Sleeve",
    tags: ["dailywear", "comfortable", "simple"],
  },
  {
    id: "half",
    label: "Half Sleeve",
    tags: ["versatile", "office", "classic"],
  },
  {
    id: "three-quarter",
    label: "3/4 Sleeve",
    tags: ["ethnic", "smart", "elegant"],
  },
  {
    id: "full",
    label: "Full Sleeve",
    tags: ["formal", "graceful", "winter"],
  },
  {
    id: "puff",
    label: "Puff Sleeve",
    tags: ["princess", "vintage", "pinterest"],
  },
  {
    id: "bell",
    label: "Bell Sleeve",
    tags: ["boho", "festive", "statement"],
  },
  {
    id: "bishop",
    label: "Bishop Sleeve",
    tags: ["dramatic", "luxury", "designer"],
  },
  {
    id: "cold-shoulder",
    label: "Cold Shoulder Sleeve",
    tags: ["trending", "party", "instagram"],
  },
  {
    id: "cape",
    label: "Cape Sleeve",
    tags: ["couture", "luxury", "bridal"],
  },
  {
    id: "slit",
    label: "Slit Sleeve",
    tags: ["designer", "modern", "elegant"],
  },
  {
    id: "umbrella",
    label: "Umbrella Sleeve",
    tags: ["dramatic", "fusion", "designer"],
  },
  {
    id: "ruffle",
    label: "Ruffle Sleeve",
    tags: ["cute", "soft", "feminine"],
  },
  {
    id: "layered",
    label: "Layered Sleeve",
    tags: ["luxury", "statement", "fashion"],
  },
  {
    id: "net",
    label: "Net Sleeve",
    tags: ["bridal", "elegant", "designer"],
  },
  {
    id: "embroidered",
    label: "Embroidered Sleeve",
    tags: ["wedding", "luxury", "traditional"],
  },
  {
    id: "sheer",
    label: "Sheer Sleeve",
    tags: ["soft-glam", "party", "modern"],
  },
  {
    id: "detachable",
    label: "Detachable Sleeve",
    tags: ["convertible", "designer", "viral"],
  },
  {
    id: "shoulder-cut",
    label: "Shoulder Cut Sleeve",
    tags: ["fusion", "trendy", "modern"],
  },
  {
    id: "juliet",
    label: "Juliet Sleeve",
    tags: ["vintage", "royal", "feminine"],
  },
  {
    id: "batwing",
    label: "Batwing Sleeve",
    tags: ["kaftan", "flowy", "relaxed"],
  },
  {
    id: "kimono",
    label: "Kimono Sleeve",
    tags: ["indo-western", "designer", "resort"],
  },
  {
    id: "dhoti-sleeve",
    label: "Dhoti Sleeve",
    tags: ["experimental", "couture", "fashion"],
  },
  {
    id: "cuffed",
    label: "Cuffed Sleeve",
    tags: ["tailored", "formal", "smart"],
  },
];

export const HOW_TO_MEASURE = [
  {
    title: "Use a soft measuring tape",
    body: "Use a flexible cloth tape instead of a metal scale or ruler for accurate body measurements.",
  },
  {
    title: "Wear fitted clothes",
    body: "Measure over a light t-shirt, leggings, or fitted clothing. Avoid hoodies, jackets, or loose outfits.",
  },
  {
    title: "Stand straight and relaxed",
    body: "Stand naturally with your shoulders relaxed. Don’t hold your stomach in or puff your chest out.",
  },
  {
    title: "Keep the tape snug, not tight",
    body: "The tape should sit comfortably on your body — not hanging loose and not squeezing the skin.",
  },
  {
    title: "Measure in inches",
    body: "Use inches unless asked otherwise. Most tailoring measurements are easier and more accurate in inches.",
  },
  {
    title: "Ask someone to help",
    body: "For shoulder width, back neck, sleeve length, and full length measurements, another person helps a lot.",
  },
  {
    title: "Measure twice for accuracy",
    body: "Take every measurement at least 2 times to avoid mistakes before submitting.",
  },
  {
    title: "Bust / Chest measurement",
    body: "Wrap the tape around the fullest part of your bust or chest while keeping it level at the back.",
  },
  {
    title: "Waist measurement",
    body: "Measure around your natural waist — usually the narrowest part above the belly button.",
  },
  {
    title: "Hip measurement",
    body: "Stand with feet together and measure around the widest part of your hips.",
  },
  {
    title: "Shoulder measurement",
    body: "Measure from the edge of one shoulder bone to the other across your upper back.",
  },
  {
    title: "Sleeve length",
    body: "Start from the shoulder edge and measure down to where you want the sleeve to end.",
  },
  {
    title: "Kurti / blouse length",
    body: "Measure from the highest shoulder point down to the desired garment length.",
  },
  {
    title: "Bottom / trouser length",
    body: "Measure from the waist down to the ankle or desired pant length while standing straight.",
  },
  {
    title: "Neck depth matters",
    body: "For deep necks or back designs, mention the exact depth you are comfortable with.",
  },
  {
    title: "Send reference photos if possible",
    body: "Pinterest, Instagram, or existing outfit photos help us understand your preferred fit and styling better.",
  },
  {
    title: "Mention fit preference",
    body: "Tell us if you prefer a slim fit, regular fit, relaxed fit, or extra comfort fitting.",
  },
  {
    title: "Heels can affect length",
    body: "For lehengas, gowns, or flared outfits, measure while wearing the heel height you plan to use.",
  },
  {
    title: "Don’t panic about tiny differences",
    body: "Small variations are normal. Our tailoring team reviews and adjusts measurements before stitching.",
  },
];
