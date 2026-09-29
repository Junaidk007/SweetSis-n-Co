import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";

export function SeasonalFeature() {
  const { setActiveCategoryFilter } = useCart();

  const handleExploreSeason = () => {
    setActiveCategoryFilter("cakes");
    const section = document.getElementById("shop-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F3F8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Large Editorial Bakery Imagery (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(61,73,48,0.12)] bg-[#F4DFD7] aspect-[4/3] sm:aspect-[16/11]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=85&w=1200&auto=format&fit=crop"
                alt="Artisanal pink velvet seasonal cake with garden botanicals"
                priority={false}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D4930]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping small accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-[#E7D8D0] hidden sm:flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-[#F6C6C6] flex items-center justify-center text-[#3D4930]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#7FB069]">
                  SPRING HARVEST
                </p>
                <p className="text-xs font-serif font-medium text-[#3D4930]">
                  Rose, Wild Strawberries & Tahitian Cream
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Soft Blossom Pink Card (5 cols) (Prompt Section 13) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#F6C6C6] p-8 sm:p-12 lg:p-14 rounded-3xl shadow-[0_15px_40px_rgba(246,198,198,0.45)] text-left relative overflow-hidden"
          >
            {/* Subtle decorative background watermarks */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#3D4930] mb-4 flex items-center gap-2">
                <span>✦</span>
                <span>SEASONAL FAVOURITE</span>
              </p>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#3D4930] mb-6">
                A little pink, <br />
                <span className="italic">a little sweet,</span> <br />
                a lot of joy.
              </h2>

              {/* Body */}
              <p className="font-sans text-sm sm:text-base text-[#3D4930]/85 font-light leading-relaxed mb-8">
                Our seasonal menu changes with the mood of the season, bringing fresh flavours, beautiful ingredients and a little something unexpected to your table.
              </p>

              {/* CTA */}
              <button
                onClick={handleExploreSeason}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#3D4930] border-b-2 border-[#3D4930] pb-1 hover:text-[#7FB069] hover:border-[#7FB069] transition-colors group"
              >
                <span>Explore This Season</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SeasonalFeature;
