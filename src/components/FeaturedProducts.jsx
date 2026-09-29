import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export function FeaturedProducts() {
  const { activeCategoryFilter, setActiveCategoryFilter } = useCart();

  const filterTabs = [
    { id: "all", label: "All Bakes" },
    { id: "cakes", label: "Cakes" },
    { id: "pastries", label: "Pastries" },
    { id: "cookies", label: "Cookies & Treats" },
    { id: "gift-boxes", label: "Gift Boxes" },
  ];

  const filteredProducts =
    activeCategoryFilter === "all"
      ? products
      : products.filter((p) => p.category === activeCategoryFilter);

  return (
    <section id="shop-section" className="py-24 sm:py-32 bg-[#FFF9F5] border-t border-[#E7D8D0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Prompt Section 11) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#7FB069]" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069]">
                OUR FAVOURITES
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930]"
            >
              The Sweetest Things
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  activeCategoryFilter === tab.id
                    ? "bg-[#3D4930] text-white shadow-sm"
                    : "bg-[#F3F8E8] text-[#3D4930] hover:bg-[#F6C6C6]/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Columns Desktop × 2 Columns Mobile (Prompt Section 25 & 26) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#6F7564] font-light mb-4">
            Need a custom creation or special dietary option? Every bake can be personalized.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#3D4930]">
            <span>✦ Baked fresh daily in small batches ✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
