import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const KEY = "kaariq_welcome_modal_seen";
const COLUMN_DURATION = 24;

const popupImages = Array.from({ length: 11 }, (_, i) => `/popup/${i + 1}.png`);

const shuffle = (array) => {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

function buildColumns() {
  const shuffled = shuffle(popupImages);

  return [
    {
      imgs: shuffled.slice(0, 5),
      dir: -1,
      dur: COLUMN_DURATION,
    },
    {
      imgs: shuffled.slice(5, 9),
      dir: 1,
      dur: COLUMN_DURATION,
    },
    {
      imgs: shuffled.slice(9, 13),
      dir: -1,
      dur: COLUMN_DURATION,
    },
  ];
}

function MovingColumn({ imgs, dir, dur }) {
  const loop = [...imgs, ...imgs];

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-2"
        animate={{ y: dir > 0 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: dur, ease: "linear", repeat: Infinity }}
      >
        {loop.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-full aspect-[3/4] overflow-hidden  bg-rose-pale shadow-sm"
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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const columns = useMemo(() => buildColumns(), []);

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
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-6xl bg-white  shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-black/10 overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 text-ink/70 hover:text-ink bg-white/90 rounded-full shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-3 bg-rose-pale p-2 sm:p-3">
            <div className="grid grid-cols-3 gap-2 h-[340px] sm:h-[520px] md:h-[640px]">
              {columns.map((col, i) => (
                <MovingColumn key={i} {...col} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            {step === "intro" ? (
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 leading-[1.05]">
                  Your tailor is <span className="italic">one knock</span> away.
                </h2>

                <p className="text-ink/70 text-sm sm:text-base mt-4 leading-relaxed">
                  Step into something perfectly fitted without ever stepping out of your home.
                </p>

                <div className="mt-7 flex flex-col gap-2">
                  <Button size="lg" onClick={() => setStep("form")}>
                    Schedule My Fitting
                  </Button>

                  <button
                    onClick={close}
                    className="text-xs tracking-[0.2em] text-ink/60 hover:text-ink mt-1"
                  >
                    Not Today
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="animate-in fade-in slide-in-from-right-4 space-y-3"
              >
                <div className="font-serif tracking-[0.28em] font-medium text-[10px] sm:text-xs text-wine">BOOK YOUR VISIT</div>

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
