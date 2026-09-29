import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, HeartHandshake } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

export function AboutSection() {
  return (
    <section id="about-section" className="py-24 sm:py-32 bg-[#FFF9F5] relative overflow-hidden border-t border-[#E7D8D0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image First on Mobile, 50/50 on Desktop (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative order-1 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(61,73,48,0.1)] aspect-[4/5] bg-[#F4DFD7]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=85&w=1200&auto=format&fit=crop"
                alt="Female artisan baker in bakery kitchen decorating cake with flowers"
                priority={false}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D4930]/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-[#F3F8E8] border border-[#E7D8D0] p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#7FB069] text-white flex items-center justify-center font-serif text-lg">
                ✦
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7FB069]">
                  HANDMADE WITH INTENTION
                </p>
                <p className="text-xs font-serif font-medium text-[#3D4930]">
                  Real Butter · Pure Botanicals · Zero Pre-mixes
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative, Pull Quote, Stats (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left order-2 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#7FB069]" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069]">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#3D4930] mb-6">
              Baked with heart. <br />
              <span className="italic text-[#7FB069]">Finished with a little magic.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#6F7564] font-light leading-relaxed font-sans mb-8">
              <p>
                SweetSis & Co. began with a simple idea: make desserts that taste as beautiful as they look.
              </p>
              <p>
                From our first little batch of cookies to celebration cakes made for life's biggest moments, everything we create is handmade with intention, creativity and a generous amount of love.
              </p>
            </div>

            {/* Pull Quote (Prompt Section 15) */}
            <div className="border-l-2 border-[#F6C6C6] pl-6 my-8 py-1">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#3D4930] leading-snug">
                “Good things take time. Beautiful things take a little more.”
              </blockquote>
            </div>

            {/* Stats (Prompt Section 15) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E7D8D0]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#3D4930]">5+</p>
                <p className="text-[11px] sm:text-xs text-[#6F7564] font-medium tracking-wide uppercase mt-1">
                  Years Baking
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#3D4930]">8,000+</p>
                <p className="text-[11px] sm:text-xs text-[#6F7564] font-medium tracking-wide uppercase mt-1">
                  Sweet Moments
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#7FB069]">100%</p>
                <p className="text-[11px] sm:text-xs text-[#6F7564] font-medium tracking-wide uppercase mt-1">
                  Made With Love
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
