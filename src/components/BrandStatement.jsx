import React from "react";
import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F3F8E8] text-[#3D4930] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle decorative floral glyph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-12 h-12 rounded-full bg-[#F6C6C6]/40 flex items-center justify-center text-[#7FB069]">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path d="M12 2C13 6 17 8 21 8C17 10 15 14 15 18C13 14 9 12 5 12C9 10 11 6 12 2Z" />
            </svg>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069] mb-4"
        >
          A LITTLE SOMETHING SWEET
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.2] text-[#3D4930] mb-8"
        >
          For birthdays, <br className="hidden sm:inline" />
          <span className="italic text-[#7FB069]">slow Sundays</span>, <br className="hidden sm:inline" />
          big celebrations <br className="hidden sm:inline" />
          & everything between.
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-[#6F7564] max-w-2xl mx-auto leading-relaxed font-light"
        >
          At SweetSis & Co., we believe dessert should be more than something you eat. It should be something you remember.
        </motion.p>

        {/* Delicate divider with flower */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[1px] bg-[#E7D8D0] mx-auto mt-12 relative flex items-center justify-center"
        >
          <span className="absolute bg-[#F3F8E8] px-2 text-[#7FB069] text-xs">✦</span>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStatement;
