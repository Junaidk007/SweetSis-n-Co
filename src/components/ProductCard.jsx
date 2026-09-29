import React from "react";
import { motion } from "framer-motion";
import { Plus, Eye, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";

export function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 40px rgba(212, 144, 122, 0.22)",
      }}
      className="group bg-[#FFF9F5] rounded-2xl overflow-hidden border border-[#E7D8D0]/80 transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* 3:4 Aspect Ratio Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F4DFD7]">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          priority={false}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#F6C6C6] text-[#3D4930] shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Floating Action */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#3D4930] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#F6C6C6] shadow-sm"
          aria-label={`Quick view ${product.name}`}
          title="Quick view"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Subtle bottom gradient for image clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Details (Prompt Section 12) */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between text-left">
        <div>
          {/* Dietary label */}
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#7FB069] mb-1.5">
            {product.dietary}
          </p>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-2xl text-[#3D4930] mb-2 font-normal hover:text-[#7FB069] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#6F7564] font-light leading-relaxed line-clamp-2 mb-4 font-sans">
            {product.description}
          </p>
        </div>

        <div>
          {/* Price & Action */}
          <div className="flex items-center justify-between pt-3 border-t border-[#E7D8D0]/60">
            <div>
              <span className="font-serif text-2xl font-medium text-[#3D4930]">
                {product.formattedPrice}
              </span>
            </div>

            {/* Prompt Section 12 Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => addToCart(product, 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] border border-[#3D4930] text-[#3D4930] bg-transparent hover:bg-[#3D4930] hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#7FB069]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
