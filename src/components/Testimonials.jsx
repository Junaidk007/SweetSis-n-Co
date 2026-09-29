import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { testimonials } from "../data/products";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#F3F8E8] relative border-t border-[#E7D8D0]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Prompt Section 17) */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-[#7FB069] text-sm">✦</span>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069]">
              CUSTOMER EXPERIENCES
            </p>
            <span className="text-[#7FB069] text-sm">✦</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930] mb-4"
          >
            Sweet Words
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6F7564] font-light leading-relaxed"
          >
            A few things our customers have said.
          </motion.p>
        </div>

        {/* 3 Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="bg-[#FFF9F5] p-8 sm:p-10 rounded-3xl border border-[#E7D8D0]/80 shadow-[0_4px_24px_rgba(61,73,48,0.04)] text-left flex flex-col justify-between relative group hover:border-[#F6C6C6] transition-all"
            >
              <div>
                {/* Subtle floral star mark instead of generic stars (Prompt Section 17) */}
                <div className="flex items-center gap-1.5 text-[#7FB069] mb-6">
                  <span className="text-xs">✦</span>
                  <span className="text-xs">✦</span>
                  <span className="text-xs">✦</span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-lg sm:text-xl text-[#3D4930] leading-relaxed mb-6 font-normal">
                  {t.quote}
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-6 border-t border-[#E7D8D0]/60">
                <p className="font-sans font-semibold text-sm text-[#3D4930]">
                  {t.author}
                </p>
                <div className="flex items-center justify-between text-xs text-[#6F7564] font-light mt-1">
                  <span>{t.occasion}</span>
                  <span className="text-[11px] text-[#7FB069]">{t.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
