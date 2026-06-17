import { motion } from "framer-motion";

const SHOTS = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", cat: "Brand" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80", cat: "Travel" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", cat: "Wedding" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", cat: "Travel" },
  { src: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800&q=80", cat: "Brand" },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80", cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", cat: "Editorial" },
  { src: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?w=800&q=80", cat: "Travel" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", cat: "Portrait" },
  { src: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=800&q=80", cat: "Wedding" },
];

/**
 * Pinterest-style masonry — natural image ratios laid out across CSS columns
 * so each card keeps its own size.
 */
export function WorkGallery() {
  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
      {SHOTS.map((s, i) => (
        <motion.figure
          key={s.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-black/5"
        >
          <img
            src={s.src}
            alt={s.cat}
            loading="lazy"
            className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black opacity-0 backdrop-blur transition group-hover:opacity-100">
            {s.cat}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
