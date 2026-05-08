import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { IMAGES } from "@/data";

const KEY = "kaariq_welcome_modal_seen";

const POOL = [
  IMAGES.women,
  IMAGES.embroidery,
  IMAGES.wedding,
  IMAGES.festive,
  IMAGES.lookbook,
  IMAGES.craft,
  IMAGES.fabric,
  IMAGES.boutique,
  IMAGES.casual,
  IMAGES.consultation,
];

// Three columns of repeating images, moving at different speeds & directions
const COLUMNS = [
  { imgs: [POOL[0], POOL[3], POOL[6], POOL[9]], dir: -1, dur: 22 },
  { imgs: [POOL[1], POOL[4], POOL[7], POOL[2]], dir: 1, dur: 28 },
  { imgs: [POOL[5], POOL[8], POOL[0], POOL[3]], dir: -1, dur: 25 },
];

function MovingColumn({ imgs, dir, dur }) {
  const loop = [...imgs, ...imgs]; // duplicate for seamless loop
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-2"
        animate={{ y: dir > 0 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: dur, ease: "linear", repeat: Infinity }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-md bg-rose-pale"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("intro");
  const [form, setForm] = useState({ name: "", phone: "", location: "" });

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(KEY)) {
        const t = setTimeout(() => setOpen(true), 900);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const close = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and number");
      return;
    }
    toast.success("Visit confirmed — our boutique will reach out shortly.");
    close();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-ink/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-2 text-ink/70 hover:text-ink bg-white/80 rounded-full"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Vertical 3-column moving carousel */}
          <div className="md:col-span-3 bg-rose-pale p-2 sm:p-3">
            <div className="grid grid-cols-3 gap-2 h-[260px] sm:h-[420px] md:h-[520px]">
              {COLUMNS.map((col, i) => (
                <MovingColumn key={i} {...col} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {step === "intro" ? (
              <div className="animate-in fade-in slide-in-from-right-4">
                <div className="edit-num text-[10px] sm:text-xs text-wine">KAARIQ</div>
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 leading-[1.05]">
                  Your tailor is <span className="italic">one knock</span> away.
                </h2>
                <p className="text-ink/70 text-sm sm:text-base mt-4 leading-relaxed">
                  Step into a private fitting at your home or our boutique. Hand-finished garments,
                  made to your measure.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <Button size="lg" onClick={() => setStep("form")}>
                    Schedule a visit
                  </Button>
                  <button
                    onClick={close}
                    className="text-xs tracking-[0.2em] uppercase text-ink/60 hover:text-ink mt-1"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="animate-in fade-in slide-in-from-right-4 space-y-3"
              >
                <div className="edit-num text-[10px] sm:text-xs text-wine">BOOK YOUR VISIT</div>
                <h2 className="font-serif-display text-2xl sm:text-3xl text-ink leading-tight">
                  Tell us where to find you
                </h2>
                <div className="space-y-2.5 pt-2">
                  <Input
                    placeholder="Full name"
                    value={form.name}
                    maxLength={80}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    placeholder="Phone number"
                    type="tel"
                    value={form.phone}
                    maxLength={20}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <Textarea
                    placeholder="City / area / address"
                    rows={2}
                    value={form.location}
                    maxLength={200}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Button type="submit" size="lg" className="flex-1">
                    Book
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep("intro")}
                  >
                    Back
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
