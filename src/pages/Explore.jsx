import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "@/components/PageBits";
import { IMAGES, GALLERY, BLOG } from "@/mock/mock";
import { Sparkles, ArrowRight, Wand2, ChevronRight } from "lucide-react";

const quizQs = [
  {
    q: "How would you describe your everyday style?",
    a: ["Classic & tailored", "Bohemian & relaxed", "Modern minimal", "Festive & ornate"],
  },
  {
    q: "Which palette pulls you in?",
    a: ["Ivory & gold", "Earthy neutrals", "Jewel tones", "Pastels"],
  },
  {
    q: "A perfect occasion to dress for?",
    a: ["Wedding sangeet", "Sunday brunch", "Boardroom meeting", "Diwali night"],
  },
];
const showreels = [
  { name: "Ananya M.", city: "Mumbai", vid: IMAGES.women },
  { name: "Rohan K.", city: "Delhi", vid: IMAGES.men },
  { name: "Priya I.", city: "Bengaluru", vid: IMAGES.casual },
  { name: "Arjun N.", city: "Singapore", vid: IMAGES.boutique },
];

export default function Explore() {
  const { slug } = useParams();
  const view = slug || "gallery-and-lookbook";
  return (
    <main className="pb-12 sm:pb-20">
      <PageHero
        tag="EXPLORE"
        title={
          <>
            Stories, style, <span className="italic">and inspiration</span>.
          </>
        }
        subtitle="Step into the Kaariq world — a curated lookbook, journal entries, AI-led design tools and films from our customers."
        image={IMAGES.lookbook}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12 flex sm:flex-wrap gap-2 overflow-x-auto no-scrollbar -mx-0 sm:mx-0">
        {[
          ["gallery-and-lookbook", "Gallery & Lookbook"],
          ["blog-and-fashion-news", "Journal"],
          ["ai-design-tool", "AI Design Tool"],
          ["personal-style-quiz", "Style Quiz"],
          ["customer-showreels", "Showreels"],
        ].map(([s, l]) => (
          <Link
            key={s}
            to={`/explore/${s}`}
            className={`shrink-0 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 border whitespace-nowrap transition-colors ${view === s ? "bg-ink text-white border-ink" : "border-rose hover:border-ink"}`}
          >
            {l}
          </Link>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12">
        {view === "gallery-and-lookbook" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-5">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-rose-pale ${i % 5 === 0 ? "aspect-[3/4] lg:row-span-2 lg:aspect-[3/5]" : "aspect-[3/4]"}`}
              >
                <img
                  src={g}
                  alt=""
                  className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        )}
        {view === "blog-and-fashion-news" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {[...BLOG, ...BLOG].map((b, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-rose-pale mb-3 sm:mb-4">
                  <img
                    src={b.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-mute">
                  {b.tag} · {b.date}
                </div>
                <h3 className="font-serif-display text-xl sm:text-2xl mt-1.5 sm:mt-2 leading-tight">
                  {b.title}
                </h3>
                <span className="link-underline text-[11px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-2 sm:mt-3 inline-block">
                  Read article →
                </span>
              </article>
            ))}
          </div>
        )}
        {view === "ai-design-tool" && <AITool />}
        {view === "personal-style-quiz" && <Quiz qs={quizQs} />}
        {view === "customer-showreels" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {showreels.map((s) => (
              <div key={s.name} className="group relative aspect-[3/5] overflow-hidden bg-black">
                <img
                  src={s.vid}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 right-3 sm:right-4 text-white">
                  <div className="edit-num opacity-90 text-[9px] sm:text-xs">SHOWREEL</div>
                  <div className="font-serif-display text-lg sm:text-2xl mt-1 leading-tight">
                    {s.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase opacity-80">
                    {s.city}
                  </div>
                </div>
                <button
                  className="absolute inset-0 m-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Play"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-ink ml-1" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function AITool() {
  const [prompt, setPrompt] = useState(
    "A pastel anarkali with delicate floral threadwork for a daytime sangeet",
  );
  const [result, setResult] = useState(null);
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-blush border border-rose p-8 lg:p-10">
        <div className="flex items-center gap-2 text-wine">
          <Wand2 className="w-5 h-5" />
          <span className="edit-num">KAARIQ DESIGN STUDIO</span>
        </div>
        <h3 className="font-serif-display text-3xl mt-3">Describe your dream outfit.</h3>
        <p className="text-sm text-mute mt-2">
          Our AI will sketch a moodboard and recommend fabrics, embroideries, and an estimated
          price.
        </p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full mt-5 bg-white border border-rose p-4 text-sm focus:outline-none focus:border-ink min-h-[120px]"
        />
        <button
          onClick={() => setResult({ id: Date.now() })}
          className="mt-4 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-wine transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          Generate moodboard
        </button>
        <p className="text-[11px] mt-3 text-mute">
          *Demo only — connect API to enable live AI design.
        </p>
      </div>
      <div className="bg-blush border border-rose p-6 lg:p-8">
        {!result && (
          <div className="h-full flex items-center justify-center text-center min-h-[280px]">
            <div>
              <Sparkles className="w-7 h-7 mx-auto text-wine" />
              <div className="text-sm text-mute mt-3">Your moodboard will appear here.</div>
            </div>
          </div>
        )}
        {result && (
          <div>
            <div className="grid grid-cols-2 gap-2">
              <img src={IMAGES.embroidery} alt="" className="aspect-square object-cover" />
              <img src={IMAGES.festive} alt="" className="aspect-square object-cover" />
              <img src={IMAGES.fabric} alt="" className="aspect-square object-cover" />
              <img src={IMAGES.women} alt="" className="aspect-square object-cover" />
            </div>
            <div className="mt-5">
              <div className="font-serif-display text-2xl">Suggested look</div>
              <p className="text-sm text-mute mt-1">
                Pastel pista anarkali · organza dupatta · floral resham work · estimate ₹16,500 –
                ₹22,000.
              </p>
              <Link
                to="/booking/book-appointment"
                className="link-underline text-[12px] tracking-[0.22em] uppercase mt-4 inline-block"
              >
                Book a fitting →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Quiz({ qs }) {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState([]);
  const done = step >= qs.length;
  return (
    <div className="max-w-2xl mx-auto bg-blush border border-rose p-8 lg:p-12">
      {!done && (
        <>
          <div className="edit-num text-mute">
            QUESTION 0{step + 1} / 0{qs.length}
          </div>
          <h3 className="font-serif-display text-3xl mt-2">{qs[step].q}</h3>
          <div className="mt-6 space-y-2">
            {qs[step].a.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setAns([...ans, opt]);
                  setStep(step + 1);
                }}
                className="w-full text-left p-4 border border-rose hover:border-ink hover:bg-white transition-colors text-sm"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
      {done && (
        <div className="text-center">
          <Sparkles className="w-7 h-7 mx-auto text-wine" />
          <div className="edit-num text-mute mt-3">YOUR STYLE</div>
          <h3 className="font-serif-display text-4xl mt-2">Modern Heritage</h3>
          <p className="text-sm text-mute mt-3">
            Refined classics with a contemporary edge — crisp tailoring, hand-finished details, and
            a calm palette.
          </p>
          <Link
            to="/collections/modern-minimalist"
            className="inline-flex items-center gap-2 mt-6 bg-ink text-white px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-wine transition-colors"
          >
            See your edit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
