import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JS Lens Studio" },
      {
        name: "description",
        content:
          "Let's talk about your story. Book a call or send a note to start a photography project with JS Lens Studio.",
      },
      { property: "og:title", content: "Contact — JS Lens Studio" },
      {
        property: "og:description",
        content: "Let's talk about your story. Book a call or send a note.",
      },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { Icon: Mail, label: "Email", value: "hello@jslens.studio", href: "mailto:hello@jslens.studio" },
  { Icon: Phone, label: "Phone", value: "+1 (555) 010-2026", href: "tel:+15550102026" },
  { Icon: MapPin, label: "Studio", value: "Lisbon · travelling worldwide", href: "#" },
];

function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <SiteNav />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-28 pt-32 md:grid-cols-[1fr_1fr] md:pt-44">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45">
            Let's talk
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            start your{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
              story.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-[14px] leading-relaxed text-black/60">
            Tell me a little about what you're planning. I reply to every note
            within a day, and the first call is always a relaxed conversation —
            no pressure.
          </p>

          <div className="mt-10 space-y-4">
            {DETAILS.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-black/70 transition group-hover:border-black/30">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    {label}
                  </span>
                  <span className="font-serif text-lg italic">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-9"
          style={{ boxShadow: "0 50px 100px -55px rgba(0,0,0,0.4)" }}
        >
          <div className="grid gap-5">
            <Field label="Your name" placeholder="Jane Doe" />
            <Field label="Email" placeholder="jane@email.com" type="email" />
            <Field label="What are you planning?" placeholder="Wedding · June 2026" />
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your story…"
                className="w-full resize-none rounded-2xl border border-black/10 bg-secondary px-4 py-3 text-[14px] outline-none transition focus:border-black/30"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-black py-3 pl-6 pr-2 text-white transition hover:bg-black/85"
            >
              <span className="text-[13px] font-medium">Send message</span>
              <span
                className="grid h-9 w-9 place-items-center rounded-full text-black transition group-hover:rotate-45"
                style={{ backgroundColor: "var(--mustard)" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </motion.form>
      </section>

      <SiteFooter />
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-secondary px-4 py-3 text-[14px] outline-none transition focus:border-black/30"
      />
    </div>
  );
}
