import React, { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Phone } from "lucide-react";
import { SUBITEMS } from "@/data";
import { CATEGORY_TO_SCHEMA, CATEGORY_LABELS } from "@/data/orderCycle/measurements";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

/**
 * Replaces the multi-step OrderJourney for now.
 * - Shows the design the customer picked
 * - Lets them add it to the cart (multiple items can be queued)
 * - Captures their name + phone so the team can reach out
 *
 * URL: /tailoring/:slug/order/:design  (kept identical to OrderJourney
 * so existing links keep working).
 */
export default function RequestContact() {
  const { slug, design } = useParams();
  const nav = useNavigate();
  const loc = useLocation();
  const { addToCart, cart } = useAuth();

  const schemaKey = CATEGORY_TO_SCHEMA[slug];
  const designs = SUBITEMS[schemaKey] || [];
  const isCustom = design === "custom";
  const designObj = isCustom
    ? {
        id: "custom",
        label: "Custom Design",
        basePrice: 0,
        image: designs[0]?.image,
        blurb: "Tell us your vision — our designers will craft it.",
      }
    : designs.find((d) => d.id === design) || designs[0];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    if (!name.trim() || name.trim().length < 2) return "Please enter your name";
    if (!/^[+\d][\d\s-]{6,15}$/.test(phone.trim())) return "Please enter a valid phone number";
    return null;
  };

  const handleAddToCart = () => {
    addToCart({
      category: schemaKey,
      categoryLabel: CATEGORY_LABELS[schemaKey],
      design: designObj?.id,
      designLabel: designObj?.label,
      price: designObj?.basePrice || 0,
      image: designObj?.image,
      slug,
      notes: notes.trim(),
    });
    toast.success("Added to your cart");
    nav("/cart");
  };

  const handleRequest = async () => {
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setSubmitting(true);
    // also push this single design into the cart so it gets logged
    addToCart({
      category: schemaKey,
      categoryLabel: CATEGORY_LABELS[schemaKey],
      design: designObj?.id,
      designLabel: designObj?.label,
      price: designObj?.basePrice || 0,
      image: designObj?.image,
      slug,
      notes: notes.trim(),
      contact: { name: name.trim(), phone: phone.trim() },
    });
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Request received — our team will call you shortly");
    }, 600);
  };

  if (!designObj) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <p className="text-mute">
          Design not found.{" "}
          <Link to="/tailoring" className="underline">
            Browse tailoring
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className="pb-20 bg-blush min-h-screen">
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 mt-6">
        <div className="grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-10">
          {/* Design preview */}
          <div className="border border-rose bg-white">
            <div className="aspect-[4/5] bg-rose-pale overflow-hidden">
              <img
                src={designObj.image}
                alt={designObj.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="edit-num text-wine">— YOUR SELECTION</div>
              <h2 className="font-serif-display text-2xl text-ink mt-2">{designObj.label}</h2>
              <p className="text-[13px] text-mute mt-2 leading-relaxed">{designObj.blurb}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-rose">
                <span className="text-[10px] tracking-[0.22em] uppercase text-mute">
                  Starting at
                </span>
                <span className="font-serif-display text-xl text-ink">
                  {designObj.basePrice ? `₹${designObj.basePrice.toLocaleString("en-IN")}` : "—"}
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="border border-rose bg-white p-6 lg:p-10">
            {!done ? (
              <>
                <div className="edit-num text-wine">— REQUEST A CALLBACK</div>
                <h1 className="font-serif-display text-3xl lg:text-4xl text-ink mt-2">
                  Leave your details — we’ll handle the rest.
                </h1>
                <p className="text-[14px] text-mute mt-3 leading-relaxed max-w-lg">
                  Our design team will call you to discuss measurements, fabric, customisations and
                  pricing. You can also queue more designs into your cart and we’ll discuss them all
                  together.
                </p>

                <div className="mt-6 space-y-4 max-w-lg">
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={80}
                      className="w-full border border-rose bg-blush/40 px-4 py-3 text-[14px] focus:outline-none focus:border-wine"
                      placeholder="e.g. Aanya Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={20}
                      className="w-full border border-rose bg-blush/40 px-4 py-3 text-[14px] focus:outline-none focus:border-wine"
                      placeholder="+91 98xxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                      Notes (optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      maxLength={500}
                      className="w-full border border-rose bg-blush/40 px-4 py-3 text-[14px] focus:outline-none focus:border-wine resize-none"
                      placeholder="Event date, fabric preference, occasion…"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRequest}
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 bg-wine text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-wine-light transition-colors disabled:opacity-60"
                  >
                    {submitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Request callback <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-ink hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to cart & keep browsing
                  </button>
                </div>

                {cart.length > 0 && (
                  <div className="mt-6 text-[12px] text-mute">
                    You already have <span className="text-ink font-medium">{cart.length}</span>{" "}
                    design{cart.length > 1 ? "s" : ""} in your cart.{" "}
                    <Link to="/cart" className="underline text-wine">
                      View cart
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="py-8">
                <div className="w-12 h-12 rounded-full bg-wine text-white flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h2 className="font-serif-display text-3xl text-ink mt-4">Request received.</h2>
                <p className="text-[14px] text-mute mt-2 max-w-lg leading-relaxed">
                  Thanks {name.split(" ")[0]} — our team will call you on{" "}
                  <span className="text-ink">{phone}</span> within 24 hours to walk you through your{" "}
                  <span className="text-ink">{designObj.label}</span> order.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/cart"
                    className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-wine-light"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    View cart
                  </Link>
                  <Link
                    to="/tailoring"
                    className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-ink hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Browse more designs
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
