import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight, Check, Plus, Minus, Phone } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function Cart() {
  const { cart, removeCartItem, updateCartItem, checkoutCart, parentOrders } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const total = cart.reduce((sum, c) => sum + (c.price || 0), 0);

  const handleCheckout = () => {
    if (!cart.length) return;
    if (!name.trim() || name.trim().length < 2) return toast.error("Enter your name");
    if (!/^[+\d][\d\s-]{6,15}$/.test(phone.trim()))
      return toast.error("Enter a valid phone number");
    const parent = checkoutCart({
      contact: { name: name.trim(), phone: phone.trim() },
      notes: notes.trim(),
    });
    setSubmitted(parent);
    toast.success("Order received — our team will reach out shortly");
  };

  if (submitted) {
    return (
      <main className="min-h-[70vh] bg-blush">
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-wine text-white flex items-center justify-center">
            <Check className="w-7 h-7" />
          </div>
          <div className="font-serif tracking-[0.28em] font-medium text-wine mt-4">
            — ORDER #{submitted.id.slice(-6).toUpperCase()}
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl text-ink mt-2">
            Your request is in.
          </h1>
          <p className="text-[14px] text-mute mt-3 max-w-md mx-auto leading-relaxed">
            We’ve grouped your <span className="text-ink">{submitted.itemCount}</span> design
            {submitted.itemCount > 1 ? "s" : ""} into one parent order. Each design will be
            processed individually by our team — you’ll get a call on{" "}
            <span className="text-ink">{submitted.contact?.phone}</span> within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-wine-light"
            >
              View my orders <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/tailoring"
              className="inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-ink hover:text-white"
            >
              Continue browsing
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-blush min-h-[70vh] pb-20">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-serif tracking-[0.28em] font-medium text-mute">— YOUR CART</div>
            <h1 className="font-serif-display text-3xl sm:text-4xl text-ink mt-1">
              Selected designs
            </h1>
          </div>
          <span className="text-[11px] tracking-[0.22em] uppercase text-mute">
            {cart.length} item{cart.length !== 1 ? "s" : ""}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="border border-rose bg-white p-10 text-center">
            <ShoppingBag className="w-10 h-10 mx-auto text-mute" />
            <h2 className="font-serif-display text-2xl text-ink mt-4">Your cart is empty</h2>
            <p className="text-[13px] text-mute mt-2">
              Browse designs and add them to your cart to request a custom order.
            </p>
            <Link
              to="/tailoring"
              className="inline-flex items-center gap-2 mt-5 bg-wine text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-wine-light"
            >
              Explore tailoring <ArrowRight className="w-4 h-4" />
            </Link>

            {parentOrders?.length > 0 && (
              <div className="mt-8 pt-6 border-t border-rose text-left">
                <div className="text-[10px] tracking-[0.22em] uppercase text-mute mb-3">
                  Past requests
                </div>
                <ul className="space-y-2">
                  {parentOrders.slice(0, 5).map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center justify-between text-[13px] text-ink border-b border-rose pb-2"
                    >
                      <span>
                        #{p.id.slice(-6).toUpperCase()} · {p.itemCount} item
                        {p.itemCount > 1 ? "s" : ""}
                      </span>
                      <span className="text-mute">
                        {new Date(p.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-10">
            {/* Items */}
            <div className="space-y-3">
              {cart.map((c) => (
                <div key={c.id} className="border border-rose bg-white p-4 flex gap-4">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-rose-pale shrink-0 overflow-hidden">
                    {c.image && (
                      <img
                        src={c.image}
                        alt={c.designLabel}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[10px] tracking-[0.22em] uppercase text-mute">
                          {c.categoryLabel}
                        </div>
                        <h3 className="font-serif-display text-lg sm:text-xl text-ink truncate">
                          {c.designLabel}
                        </h3>
                      </div>
                      <button
                        onClick={() => {
                          removeCartItem(c.id);
                          toast.success("Removed");
                        }}
                        aria-label="Remove"
                        className="text-mute hover:text-wine"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <textarea
                      value={c.notes || ""}
                      onChange={(e) => updateCartItem(c.id, { notes: e.target.value })}
                      placeholder="Notes for this design (fabric, occasion, fit preference…)"
                      maxLength={300}
                      className="w-full mt-2 border border-rose bg-blush/40 px-3 py-2 text-[12px] focus:outline-none focus:border-wine resize-none"
                      rows={2}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] tracking-[0.22em] uppercase text-mute">
                        Status · {c.status}
                      </span>
                      <span className="font-serif-display text-base text-ink">
                        {c.price ? `₹${c.price.toLocaleString("en-IN")}` : "On request"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/tailoring"
                className="inline-flex items-center gap-2 mt-2 text-[11px] tracking-[0.22em] uppercase text-wine hover:underline"
              >
                <Plus className="w-3.5 h-3.5" /> Add another design
              </Link>
            </div>

            {/* Summary / contact */}
            <aside className="border border-rose bg-white p-5 lg:p-6 h-fit lg:sticky lg:top-28">
              <div className="font-serif tracking-[0.28em] font-medium text-wine">
                — ORDER SUMMARY
              </div>
              <h2 className="font-serif-display text-2xl text-ink mt-2">Request callback</h2>
              <p className="text-[12px] text-mute mt-2 leading-relaxed">
                All designs above will be grouped under one parent order. Each one is processed
                individually by our team.
              </p>

              <div className="mt-4 pt-4 border-t border-rose flex items-center justify-between">
                <span className="text-[11px] tracking-[0.22em] uppercase text-mute">
                  Estimated total
                </span>
                <span className="font-serif-display text-xl text-ink">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                    Your name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={80}
                    className="w-full border border-rose bg-blush/40 px-3 py-2.5 text-[13px] focus:outline-none focus:border-wine"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={20}
                    type="tel"
                    className="w-full border border-rose bg-blush/40 px-3 py-2.5 text-[13px] focus:outline-none focus:border-wine"
                    placeholder="+91 98xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-mute mb-1">
                    Order notes (optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    maxLength={500}
                    className="w-full border border-rose bg-blush/40 px-3 py-2.5 text-[13px] focus:outline-none focus:border-wine resize-none"
                    placeholder="Event date, delivery preference…"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-wine text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase hover:bg-wine-light transition-colors"
              >
                <Phone className="w-4 h-4" /> Place order & request callback
              </button>
              <p className="text-[10px] text-mute mt-2 text-center">
                No payment now — pricing confirmed after consultation.
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
