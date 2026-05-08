import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "@/components/PageBits";
import { PROCESS, IMAGES, FAQ } from "@/data";
import { Calendar as CalIcon, Clock, Video, MapPin, Check, ArrowRight } from "lucide-react";

const measurements = [
  { label: "Bust / Chest", desc: "Around the fullest part, keeping tape parallel to the floor." },
  { label: "Waist", desc: "At the natural waistline — the slimmest part of your torso." },
  { label: "Hip", desc: 'Around the fullest part of your hips, about 8\" below the waist.' },
  { label: "Shoulder", desc: "Across the back, from one shoulder seam to the other." },
  { label: "Sleeve length", desc: "From shoulder seam to wrist with arm slightly bent." },
  { label: "Inseam", desc: "From the inside of the leg, crotch to ankle." },
  { label: "Outseam", desc: "Outside of leg, from waist down to ankle." },
  { label: "Full length", desc: "For dresses — shoulder to desired hem." },
];

export default function BookingGuide() {
  const { slug } = useParams();
  const view = slug || "our-process";
  return (
    <main className="pb-12 sm:pb-20">
      <PageHero
        tag="BOOKING & GUIDE"
        title={
          <>
            Plan your <span className="italic">visit</span>, your way.
          </>
        }
        subtitle="In-boutique, at-home, or virtual — choose the experience that suits you. Every appointment ends with a personalised quote and timeline."
        image={IMAGES.consultation}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12 flex sm:flex-wrap gap-2 overflow-x-auto no-scrollbar">
        {[
          ["our-process", "Our Process"],
          ["measurement-guide", "Measurement Guide"],
          ["book-appointment", "Book Appointment"],
          ["virtual-consultation", "Virtual Consultation"],
        ].map(([s, l]) => (
          <Link
            key={s}
            to={`/booking/${s}`}
            className={`shrink-0 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 border whitespace-nowrap transition-colors ${view === s ? "bg-ink text-white border-ink" : "border-rose hover:border-ink"}`}
          >
            {l}
          </Link>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12">
        {view === "our-process" && <ProcessView />}
        {view === "measurement-guide" && <Measurement items={measurements} />}
        {view === "book-appointment" && <BookForm />}
        {view === "virtual-consultation" && <VirtualBook />}
      </div>

      <FAQSection />
    </main>
  );
}

function ProcessView() {
  return (
    <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <div className="aspect-[16/10] sm:aspect-[4/5] overflow-hidden bg-rose-pale">
            <img src={IMAGES.craft} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="text-[13px] sm:text-sm text-mute mt-4 sm:mt-5 leading-relaxed">
            A calm, considered process — designed to keep you involved at every stage. From your
            first conversation to delivery, you'll have one dedicated stylist.
          </p>
        </div>
      </div>
      <div className="lg:col-span-8">
        <div className="relative">
          <div
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-rose"
            aria-hidden="true"
          />
          {PROCESS.map((p) => (
            <div key={p.n} className="relative pl-11 sm:pl-14 pb-6 sm:pb-10 last:pb-0">
              <div className="absolute left-0 top-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-ink text-white flex items-center justify-center font-italiana text-sm sm:text-base">
                {p.n}
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl text-ink leading-tight">
                {p.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-mute mt-1.5 sm:mt-2 leading-relaxed max-w-xl">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Measurement({ items }) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
      <div className="lg:col-span-5">
        <div className="aspect-[16/10] sm:aspect-[4/5] overflow-hidden bg-rose-pale lg:sticky lg:top-32">
          <img src={IMAGES.consultation} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="lg:col-span-7">
        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-ink">
          A short, simple guide.
        </h2>
        <p className="text-[13px] sm:text-sm text-mute mt-2 sm:mt-3 max-w-xl">
          Use a soft tape, stand naturally, and ask a friend to help. If you're unsure, our master
          tailor can come to you — free with bespoke orders.
        </p>
        <ol className="mt-5 sm:mt-8 space-y-4 sm:space-y-5">
          {items.map((m, i) => (
            <li
              key={m.label}
              className="flex gap-3 sm:gap-5 pb-4 sm:pb-5 border-b border-rose last:border-0"
            >
              <div className="font-italiana text-xl sm:text-2xl text-wine w-8 sm:w-10 shrink-0">
                0{i + 1}
              </div>
              <div>
                <div className="font-serif-display text-lg sm:text-xl text-ink">{m.label}</div>
                <div className="text-[13px] sm:text-sm text-mute mt-1">{m.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function BookForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Womens Wear",
    mode: "Boutique Visit",
    date: "",
    time: "11:00",
    notes: "",
  });
  const [done, setDone] = useState(false);
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (done) {
    return (
      <div className="max-w-2xl mx-auto bg-ink text-white p-10 lg:p-14 text-center">
        <Check className="w-8 h-8 mx-auto text-wine" />
        <h3 className="font-serif-display text-4xl mt-4">Appointment requested</h3>
        <p className="text-sm opacity-80 mt-3">
          Thanks {form.name || "friend"} — our concierge will confirm your slot on{" "}
          {form.date || "the chosen date"} at {form.time}. Check your inbox in 30 minutes.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 inline-block border border-white/40 px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-white hover:text-ink transition-colors"
        >
          Book another
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        <h2 className="font-serif-display text-3xl lg:text-4xl text-ink">Book your appointment.</h2>
        <p className="text-sm text-mute mt-3 max-w-xl">
          Tell us a few details and we'll confirm within 30 minutes during boutique hours.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          <Field label="Full name" value={form.name} onChange={onChange("name")} required />
          <Field label="Phone" value={form.phone} onChange={onChange("phone")} required />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={onChange("email")}
            required
            cls="sm:col-span-2"
          />
          <Select
            label="Service"
            value={form.service}
            onChange={onChange("service")}
            options={[
              "Women's Wear",
              "Men's Wear",
              "Bridal",
              "Alterations",
              "Customisation",
              "Bulk / Corporate",
            ]}
          />
          <Select
            label="Visit mode"
            value={form.mode}
            onChange={onChange("mode")}
            options={["Boutique Visit", "At-Home Visit", "Virtual"]}
          />
          <Field
            label="Preferred date"
            type="date"
            value={form.date}
            onChange={onChange("date")}
            required
          />
          <Select
            label="Preferred time"
            value={form.time}
            onChange={onChange("time")}
            options={["11:00", "12:30", "14:00", "15:30", "17:00", "18:30"]}
          />
          <div className="sm:col-span-2">
            <label className="text-[11px] tracking-[0.22em] uppercase text-mute">
              Notes (optional)
            </label>
            <textarea
              value={form.notes}
              onChange={onChange("notes")}
              rows="4"
              className="w-full mt-2 bg-white border border-rose p-3 text-sm focus:outline-none focus:border-ink"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-wine transition-colors"
        >
          Confirm appointment <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="lg:col-span-5 space-y-4">
        <InfoCard
          icon={MapPin}
          title="Visit our boutique"
          body="12 Heritage Lane, Bandra West, Mumbai 400050"
        />
        <InfoCard
          icon={Clock}
          title="Boutique hours"
          body={"Mon – Sat · 11:00 – 20:00\nSundays by appointment"}
        />
        <InfoCard
          icon={Video}
          title="Prefer to meet online?"
          body="Switch the visit mode to Virtual — we'll send a Google Meet link."
        />
        <InfoCard
          icon={CalIcon}
          title="What to expect"
          body="45-min consultation, fabric & swatch viewing, measurement, and a written quote."
        />
      </div>
    </form>
  );
}

function VirtualBook() {
  const days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });
  const [sel, setSel] = useState(0);
  const [time, setTime] = useState("15:30");
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="max-w-2xl mx-auto text-center bg-ink text-white p-12">
        <Check className="w-8 h-8 mx-auto text-wine" />
        <h3 className="font-serif-display text-3xl mt-3">Call confirmed</h3>
        <p className="text-sm opacity-80 mt-2">
          {days[sel].toDateString()} at {time}. Google Meet invite is on its way.
        </p>
      </div>
    );
  return (
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <div className="edit-num text-mute">— 30 MIN · GOOGLE MEET</div>
        <h2 className="font-serif-display text-4xl lg:text-5xl mt-3 text-ink">
          Book your free virtual consultation.
        </h2>
        <p className="text-sm text-mute mt-4">
          A relaxed video call with our e-designer. We'll discuss your inspirations, recommend
          fabrics, and share a written quote within the hour.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          {[
            "Free, no obligation",
            "Sketches & swatches included",
            "Pricing emailed within 1 hour",
          ].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-wine" />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7 bg-blush border border-rose p-6 lg:p-8">
        <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-3">Choose a day</div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {days.map((d, i) => (
            <button
              key={i}
              onClick={() => setSel(i)}
              className={`shrink-0 w-16 py-3 border text-center transition-colors ${sel === i ? "bg-ink text-white border-ink" : "border-rose hover:border-ink"}`}
            >
              <div className="text-[10px] tracking-[0.18em] uppercase opacity-80">
                {d.toLocaleDateString("en-US", { weekday: "short" })}
              </div>
              <div className="font-serif-display text-2xl mt-1">{d.getDate()}</div>
              <div className="text-[10px] tracking-[0.18em] uppercase opacity-80">
                {d.toLocaleDateString("en-US", { month: "short" })}
              </div>
            </button>
          ))}
        </div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-mute mt-6 mb-3">
          Choose a time (IST)
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {["11:00", "12:00", "13:00", "14:30", "15:30", "16:30", "18:00", "19:00"].map((t) => (
            <button
              key={t}
              onClick={() => setTime(t)}
              className={`py-2 border text-sm transition-colors ${time === t ? "bg-ink text-white border-ink" : "border-rose hover:border-ink"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDone(true)}
          className="mt-8 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-wine transition-colors"
        >
          Confirm slot <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Field({ label, cls = "", ...props }) {
  return (
    <div className={cls}>
      <label className="text-[11px] tracking-[0.22em] uppercase text-mute">{label}</label>
      <input
        {...props}
        className="w-full mt-2 bg-white border border-rose p-3 text-sm focus:outline-none focus:border-ink"
      />
    </div>
  );
}
function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.22em] uppercase text-mute">{label}</label>
      <select
        {...props}
        className="w-full mt-2 bg-white border border-rose p-3 text-sm focus:outline-none focus:border-ink"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
function InfoCard({ icon: Icon, title, body }) {
  return (
    <div className="p-6 bg-blush border border-rose">
      <Icon className="w-5 h-5 text-wine" />
      <div className="font-serif-display text-xl mt-3">{title}</div>
      <div className="text-sm text-mute mt-1 whitespace-pre-line">{body}</div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-20">
      <div className="edit-num text-mute text-center">— FREQUENTLY ASKED</div>
      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-ink text-center mt-2 sm:mt-3">
        Good to know.
      </h2>
      <div className="mt-6 sm:mt-10 divide-y divide-rose border-y border-rose">
        {FAQ.map((f) => (
          <details key={f.q} className="group py-4 sm:py-5">
            <summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
              <span className="font-serif-display text-lg sm:text-xl lg:text-2xl text-ink leading-tight">
                {f.q}
              </span>
              <span className="font-italiana text-2xl text-wine group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p className="text-[13px] sm:text-sm text-mute mt-3 max-w-3xl leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
