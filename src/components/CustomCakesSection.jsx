import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";

export function CustomCakesSection() {
  const { setCustomOrderModalOpen, setActiveCategoryFilter } = useCart();

  const handleGalleryView = () => {
    setActiveCategoryFilter("cakes");
    const section = document.getElementById("shop-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="custom-section" className="relative py-28 sm:py-36 bg-[#3D4930] overflow-hidden text-white">
      {/* Full-Bleed Luxury Wedding Cake Imagery */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1519869325930-281384150729?q=85&w=2000&auto=format&fit=crop"
          alt="Luxury custom wedding cake with blush flowers and botanical greenery"
          priority={false}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
        />
        {/* Editorial Linear Gradient Overlay (Prompt Section 16) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,73,48,0.92) 0%, rgba(61,73,48,0.65) 50%, rgba(61,73,48,0.2) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] mb-6 text-white"
          >
            Your vision. <br />
            Our oven. <br />
            <span className="italic text-[#F6C6C6]">Something unforgettable.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-white/85 font-light leading-relaxed mb-10 max-w-xl"
          >
            Whether it's a birthday, wedding, anniversary or a celebration that needs no reason at all, tell us what you're dreaming of and we'll create something completely yours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => setCustomOrderModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#F6C6C6] text-[#3D4930] shadow-[0_8px_25px_rgba(246,198,198,0.3)] hover:bg-[#fbd3d3] transition-all duration-300 active:scale-95"
            >
              Start a Custom Order
            </button>

            <button
              onClick={handleGalleryView}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-white/90 hover:text-white border-b border-white/50 pb-1 hover:border-white transition-all group"
            >
              <span>View Cake Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CustomCakesSection;
