import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";
import { HERO_IMAGE_URL } from "../utils/imageLoader";

export function Hero() {
  const { setCustomOrderModalOpen, setActiveCategoryFilter, setActiveView } = useCart();

  const handleExplore = () => {
    setActiveCategoryFilter("all");
    const section = document.getElementById("shop-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-[#3D4930]">
      {/* Editorial Food Photography Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={HERO_IMAGE_URL}
          priority={true}
          alt="Artisanal layered strawberry celebration cake decorated with delicate pink flowers and botanical details"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center filter brightness-[0.92]"
        />
        {/* Editorial Multi-Stop Gradient Overlay (Prompt Section 7) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,73,48,0.85) 0%, rgba(61,73,48,0.52) 48%, rgba(61,73,48,0.18) 100%)",
          }}
        />
        {/* Soft bottom vignette into Spring Mist */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F3F8E8] via-[#F3F8E8]/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-2xl text-left">
          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal italic tracking-tight text-white leading-[1.08] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Made Sweet. <br />
            Made Beautiful. <br />
            <span className="not-italic font-medium text-[#F6C6C6] pr-2">Made With Love.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl mb-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Handcrafted cakes, pastries, and little indulgences made fresh with beautiful ingredients and a whole lot of heart.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExplore}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#F6C6C6] text-[#3D4930] shadow-[0_8px_25px_rgba(246,198,198,0.35)] transition-all duration-300 hover:bg-[#fad6d6] hover:shadow-[0_12px_30px_rgba(246,198,198,0.45)] group"
            >
              <span>Explore Our Bakes</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCustomOrderModalOpen(true)}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.14em] uppercase bg-transparent text-white border border-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white"
            >
              Custom Cake Inquiry
            </motion.button>
          </motion.div>

          {/* Small Botanical Editorial Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-3 text-white/75 text-xs font-light tracking-wide"
          >
            <span className="w-8 h-[1px] bg-[#F6C6C6]/60" />
            <span>Baked fresh every morning in Lucknow · 100% Eggless options available</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
