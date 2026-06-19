import { useState, useRef } from "react";
import { Instagram, Youtube, Dribbble, Mail, ChevronUp, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SOCIAL = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Vimeo", href: "#", Icon: Youtube },
  { label: "Behance", href: "#", Icon: Dribbble },
  { label: "Email", href: "mailto:hello@jslens.studio", Icon: Mail },
];

export function SiteFooter() {
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Progress for Reveal Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  const y = useSpring(yTransform, { stiffness: 100, damping: 22 });
  const scale = useSpring(scaleTransform, { stiffness: 100, damping: 22 });
  const opacity = useSpring(opacityTransform, { stiffness: 100, damping: 22 });

  return (
    <div ref={containerRef} className="bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hide/Show Toggle Action Button */}

      {/* Kinetic Height Frame: 
        Starts initially at 75% viewport height ('75vh') when loading, 
        then collapses down smoothly to 'auto' for crisp text containment.
      */}
      <motion.footer
        id="book"
        initial={{ height: "75vh" }}
        animate={{
          height: isOpen ? "auto" : 0,
        }}
        viewport={{ once: true }}
        whileInView={isOpen ? { height: "auto" } : {}}
        transition={{
          height: {
            duration: 1.4,
            ease: [0.25, 1, 0.5, 1], // Custom sophisticated deceleration curve
            delay: 0.1,
          },
        }}
        className="relative z-10 w-full flex flex-col justify-end"
      >
        {/* Parallax Content Wrapper */}
        <motion.div
          style={{ y, scale, opacity }}
          className="mx-auto max-w-[1600px] w-full px-6 pb-12 pt-8 md:px-16 md:pb-16 md:pt-12"
        >
          {/* Main Content Row */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            {/* Left Box: Text Quote (62% width) & Hyperlink */}
            <div className="flex flex-col gap-6">
              <p className="w-full font-sans text-[2.5rem] font-medium leading-[0.95] tracking-[-0.03em] uppercase sm:text-[3.8rem] md:text-[4.5rem] lg:text-[4.8rem]">
                From quiet portraits
                <br />
                to bold editorial covers,
                <br />
                there's a frame here for every story.
              </p>

              <a
                href="mailto:hello@jslens.studio"
                className="font-sans text-xs tracking-widest text-white/80 transition hover:text-[var(--mustard,#eab308)] uppercase md:text-sm w-fit"
              >
                hello@jslens.studio
              </a>
            </div>

            {/* Right Box: Branded Wordmark Accent */}
            <div className="flex lg:justify-end">
              <h2 className="font-serif text-[4rem] font-bold leading-none tracking-tight lowercase sm:text-[5rem] md:text-[6.5rem]">
                jaspreet
                <span className="font-serif italic" style={{ color: "var(--mustard)" }}>
                  singh.
                </span>
              </h2>
            </div>
          </div>

          {/* Bottom Layout Row */}
          <div className="mt-20 flex flex-col-reverse gap-8 md:mt-32 md:flex-row md:items-center md:justify-between">
            {/* Social Icons Mapping */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center justify-center text-white/70 transition hover:text-[var(--mustard,#eab308)]"
                >
                  <item.Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Metadata Statements */}
            <div className="flex flex-col gap-2 font-sans text-xs tracking-wider text-white/45 sm:flex-row sm:gap-6 md:text-sm">
              <p>© jaspreet singh photography {new Date().getFullYear()}</p>
              <p className="hidden sm:inline">·</p>
              <p className="uppercase">Toronto · worldwide</p>
            </div>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
