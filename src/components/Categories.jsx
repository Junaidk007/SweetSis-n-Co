import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/products";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";

export function Categories() {
  const { setActiveCategoryFilter, setCustomOrderModalOpen } = useCart();

  const handleCategorySelect = (categoryId) => {
    if (categoryId === "custom") {
      setCustomOrderModalOpen(true);
    } else {
      setActiveCategoryFilter(categoryId);
      const section = document.getElementById("shop-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F3F8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069] mb-3"
          >
            CURATED COLLECTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930] mb-4"
          >
            Find Your Kind of Sweet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6F7564] font-light leading-relaxed"
          >
            From celebration cakes to little afternoon treats, there's something for every kind of craving.
          </motion.p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleCategorySelect(category.id)}
              className="group cursor-pointer bg-[#FFF9F5] rounded-2xl overflow-hidden border border-[#E7D8D0]/80 shadow-[0_4px_20px_rgba(61,73,48,0.04)] flex flex-col h-full"
            >
              {/* Image Container with Hover Scale & Soft Green Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F4DFD7]">
                <OptimizedImage
                  src={category.image}
                  alt={category.name}
                  priority={false}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                {/* Soft botanical hover tint */}
                <div className="absolute inset-0 bg-[#7FB069]/0 transition-colors duration-500 group-hover:bg-[#7FB069]/15" />

                {/* Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#F3F8E8]/90 text-[#3D4930] backdrop-blur-sm border border-white/60">
                    {category.tag}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7FB069] mb-1.5">
                    {category.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl text-[#3D4930] mb-2 group-hover:text-[#7FB069] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#6F7564] font-light leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E7D8D0]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#3D4930] group-hover:text-[#7FB069] transition-colors">
                  <span>{category.cta}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
