import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/mock/mock";

const stripPhone = (p) => (p || "").replace(/[^\d+]/g, "");

export default function FloatingActions() {
  const wa = stripPhone(SITE.whatsapp);
  const tel = stripPhone(SITE.phone);
  return (
    <div className="fixed right-3 sm:right-5 bottom-3 sm:bottom-5 z-[70] flex flex-col gap-2.5 print:hidden">
      <a
        href={`https://wa.me/${wa.replace(/^\+/, "")}?text=${encodeURIComponent("Hi Kaariq, I'd like to know more.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={`tel:${tel}`}
        aria-label="Call us"
        className="group w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-wine text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}
