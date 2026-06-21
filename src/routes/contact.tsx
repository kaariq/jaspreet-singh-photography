import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import meta from "@/data/meta/contact.json";
import { buildHead } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => buildHead(meta),
  component: ContactPage,
});


const DETAILS = [
  { Icon: Mail, label: "Email", value: "hello@jslens.studio", href: "mailto:hello@jslens.studio" },
  { Icon: Phone, label: "Phone", value: "+1 (416) 555-0126", href: "tel:+14165550126" },
  { Icon: MapPin, label: "Studio", value: "Toronto, Canada · travelling worldwide", href: "#map" },
  { Icon: Instagram, label: "Instagram", value: "@jaspreetsingh.photo", href: "#" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("That doesn't look like a valid email").max(255),
  subject: z.string().trim().min(1, "What are you planning?").max(160),
  message: z.string().trim().min(1, "Add a few words").max(1500),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      <header className="mx-auto max-w-3xl px-6 pb-14 pt-32 text-center md:pb-20 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--mustard)" }} />
          Say hello
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2.8rem,8vw,6rem)] font-light leading-[0.94]"
        >
          Let's make something
          <br />
          <span className="italic" style={{ color: "var(--tomato)" }}>
            worth remembering.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-7 max-w-md text-[14px] leading-[1.85] text-black/60"
        >
          Tell me a little about what you're planning. I read every note myself,
          reply within a day, and the first call is always a relaxed
          conversation — no pressure, no scripts.
        </motion.p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 md:grid-cols-[0.9fr_1.1fr]">
        {/* Left: details */}
        <div>
          <div className="space-y-5">
            {DETAILS.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-black/15 text-black/70 transition group-hover:border-black group-hover:text-black">
                  <Icon className="h-[16px] w-[16px]" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    {label}
                  </span>
                  <span className="font-serif text-[1.1rem] leading-tight">{value}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Toronto map */}
          <div
            id="map"
            className="mt-10 overflow-hidden border border-black/10"
            style={{ boxShadow: "0 30px 70px -50px rgba(0,0,0,0.35)" }}
          >
            <iframe
              title="Toronto studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.4585%2C43.6354%2C-79.3267%2C43.7034&layer=mapnik&marker=43.6532%2C-79.3832"
              className="h-[260px] w-full"
              loading="lazy"
            />
            <div className="flex items-center justify-between bg-white px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-black/55">
              <span>Toronto · 43.65°N, 79.38°W</span>
              <a
                href="https://www.openstreetmap.org/?mlat=43.6532&mlon=-79.3832#map=12/43.6532/-79.3832"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-black"
              >
                Open map ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="border border-black/10 bg-white p-7 md:p-9"
          style={{ boxShadow: "0 50px 100px -55px rgba(0,0,0,0.4)" }}
        >
          <div className="grid gap-5">
            <Field name="name" label="Your name" placeholder="Jane Doe" error={errors.name} />
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="jane@email.com"
              error={errors.email}
            />
            <Field
              name="subject"
              label="What are you planning?"
              placeholder="Wedding · June 2026"
              error={errors.subject}
            />
            <div>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your story…"
                className="w-full resize-none border border-black/15 bg-[oklch(0.98_0_0)] px-4 py-3 text-[13px] outline-none transition focus:border-black"
              />
              {errors.message && (
                <p className="mt-1 text-[11px]" style={{ color: "#A71D31" }}>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-3 bg-black py-3 pl-6 pr-2 text-white transition hover:bg-black/85"
            >
              <span className="text-[12px] font-medium">Send message</span>
              <span
                className="grid h-9 w-9 place-items-center text-black transition group-hover:rotate-45"
                style={{ backgroundColor: "var(--mustard)" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>

            {status === "sent" && (
              <p className="text-[12px] text-black/60">
                Thanks — your note is on its way. I'll reply within a day.
              </p>
            )}
          </div>
        </motion.form>
      </section>

      <SiteFooter />
    </main>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-black/15 bg-[oklch(0.98_0_0)] px-4 py-3 text-[13px] outline-none transition focus:border-black"
      />
      {error && (
        <p className="mt-1 text-[11px]" style={{ color: "#A71D31" }}>
          {error}
        </p>
      )}
    </div>
  );
}
