import { motion } from "framer-motion";

const PARTNERS = [
  "VOGUE",
  "Aesop",
  "Kinfolk",
  "MONOCLE",
  "Cereal",
  "Apartamento",
  "FRAME",
];

/**
 * Quiet trust strip — partner / publication wordmarks that fade and rise into
 * place as the section scrolls into view.
 */
export function Partners() {
  return (
    <section className="relative z-10 border-y border-black/10 bg-white/55 px-6 py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-black/45"
        >
          Trusted by brands &amp; publications
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {PARTNERS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 0.55, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              whileHover={{ opacity: 1 }}
              className="font-display text-2xl font-semibold tracking-tight text-black/80 transition md:text-3xl"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
