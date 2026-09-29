import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { instagramGallery } from "../data/products";

export function VisualGallery() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFF9F5] border-t border-[#E7D8D0]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <InstagramIcon className="w-4 h-4 text-[#7FB069]" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069]">
              VISUAL JOURNAL
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930] mb-4"
          >
            A Little Sweetness on Your Feed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6F7564] font-light leading-relaxed"
          >
            Follow along for behind-the-scenes baking, new creations and everyday inspiration.
          </motion.p>
        </div>

        {/* 6-Image Editorial Grid (Prompt Section 18) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {instagramGallery.map((item, index) => (
            <motion.a
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl bg-[#F4DFD7] shadow-sm block ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Soft pink hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-[#F6C6C6]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <div className="w-10 h-10 rounded-full bg-white/80 text-[#3D4930] flex items-center justify-center mb-2 shadow-sm transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-[#3D4930] line-clamp-2 px-1">
                  {item.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Handle */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-[#F3F8E8] text-[#3D4930] border border-[#E7D8D0] hover:bg-[#F6C6C6] transition-all shadow-sm group"
          >
            <span>@SweetSisAndCo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default VisualGallery;
