import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqFloating } from "@/components/FaqFloating";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Jaspreet Singh Photography" },
      {
        name: "description",
        content:
          "How I work, the process I follow, how I help, and how I shoot weddings — a quiet, considered way of making pictures.",
      },
      { property: "og:title", content: "Approach — Jaspreet Singh Photography" },
      {
        property: "og:description",
        content: "How I work, the process I follow, and how I shoot weddings.",
      },
    ],
  }),
  component: ApproachPage,
});

const PROCESS = [
  {
    n: "01",
    title: "We talk first",
    body: "Before anything else, a slow conversation — over a call or coffee — about who you are and what this moment actually means to you.",
  },
  {
    n: "02",
    title: "We shape the day",
    body: "I send a simple plan: timing, light, locations, the small details that quietly make or break a shoot. You stay in charge; I stay prepared.",
  },
  {
    n: "03",
    title: "We shoot",
    body: "Mostly invisible, occasionally guiding. I work in the gaps — between speeches, before the dress is zipped, in the car ride no one thinks to photograph.",
  },
  {
    n: "04",
    title: "I sit with the photos",
    body: "I edit every frame myself. Nothing is outsourced. I take the time it deserves so the final set feels like one continuous breath.",
  },
  {
    n: "05",
    title: "You receive a story",
    body: "Delivered as a private gallery, with a small printed selection if you want one. Yours forever, in a format that won't disappear with the next app.",
  },
];

const HELPS = [
  {
    title: "Calm direction",
    body: "Gentle prompts when you need them, silence when you don't. Most people forget the camera within twenty minutes.",
  },
  {
    title: "A second pair of eyes",
    body: "Timelines, light windows, family-photo logistics — I'll quietly nudge anything I notice that could go sideways.",
  },
  {
    title: "Honest counsel",
    body: "If something won't serve the story, I'll say so kindly. If something will, I'll fight for it.",
  },
  {
    title: "Long after the day",
    body: "Re-edits, additional prints, album design — I stay reachable long after the gallery lands.",
  },
];

function ApproachPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      {/* Hero */}
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-28 md:pt-36">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
          The approach
        </p>
        <h1 className="font-serif text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.92]">
          A quieter way of{" "}
          <span className="italic" style={{ color: "var(--tomato)" }}>
            making pictures.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-[13.5px] leading-relaxed text-black/60">
          I work slowly on purpose. The best frames almost always happen in the
          minute right before — or right after — anyone thinks something is
          happening at all.
        </p>
      </header>

      {/* How I work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            How I work
          </p>
          <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
            Considered, not{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              complicated.
            </span>
          </h2>
        </div>

        <div className="grid gap-px bg-black/10 md:grid-cols-2">
          {HELPS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-serif text-[1.3rem] leading-tight">{h.title}</h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black/55">
                {h.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Process */}
      <section className="bg-[#0C0909] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                The process
              </p>
              <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
                Five steps, no{" "}
                <span className="italic" style={{ color: "#E8B84A" }}>
                  surprises.
                </span>
              </h2>
            </div>
          </div>

          <ol className="space-y-px">
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="grid grid-cols-[60px_1fr] items-start gap-6 border-t border-white/10 py-6 md:grid-cols-[80px_220px_1fr] md:py-7"
              >
                <span
                  className="font-display text-[11px] font-semibold tracking-[0.22em]"
                  style={{ color: "#E8B84A" }}
                >
                  {p.n}
                </span>
                <h3 className="font-serif text-[1.4rem] leading-tight md:text-[1.6rem]">
                  {p.title}
                </h3>
                <p className="col-span-2 max-w-xl text-[13px] leading-relaxed text-white/60 md:col-span-1">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* How I Shoot Weddings */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden bg-black/5"
          style={{ boxShadow: "0 40px 90px -55px rgba(0,0,0,0.4)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            alt="Wedding photography"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            On weddings
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.4rem)] leading-[0.95]">
            How I shoot{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              weddings.
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-[13.5px] leading-[1.75] text-black/65">
            <p>
              I show up early, almost annoyingly so. I want to see the room
              before it's a room — the chairs not yet straightened, the light
              before it's been told what to do.
            </p>
            <p>
              I shoot mostly documentary: the small kisses on the forehead, the
              uncles arguing about whisky, your mother re-pinning her dupatta
              twelve times. The big moments take care of themselves. I'm there
              for the rest.
            </p>
            <p>
              I'll pull you aside for a small handful of portraits — fifteen
              minutes, no more — somewhere with good light. The rest of the day
              you're a guest at your own wedding. That's the deal.
            </p>
            <p>
              You'll get a private gallery within four to six weeks, plus a
              short teaser set within seventy-two hours so the day doesn't feel
              like it ended too soon.
            </p>
          </div>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 bg-black py-2 pl-5 pr-2 text-white transition hover:bg-black/85"
          >
            <span className="text-[12px] font-medium tracking-wide">
              Tell me about your wedding
            </span>
            <span
              className="inline-flex h-8 w-8 items-center justify-center text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </motion.div>
      </section>

      <FaqFloating />
      <SiteFooter />
    </main>
  );
}
