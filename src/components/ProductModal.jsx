import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Check, Heart, Sparkles, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { OptimizedImage } from "./OptimizedImage";

export function ProductModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-[#3D4930]/65 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative bg-[#FFF9F5] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E7D8D0] z-10 my-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-[#F6C6C6] text-[#3D4930] flex items-center justify-center transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-[#F4DFD7] overflow-hidden">
              <OptimizedImage
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                priority={false}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#F6C6C6] text-[#3D4930]">
                  {quickViewProduct.badge || "Artisan Bake"}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7FB069] mb-2">
                  {quickViewProduct.dietary}
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#3D4930] mb-2">
                  {quickViewProduct.name}
                </h3>

                <p className="font-serif text-2xl font-medium text-[#3D4930] mb-4">
                  {quickViewProduct.formattedPrice}
                </p>

                <p className="text-xs sm:text-sm text-[#6F7564] font-light leading-relaxed mb-6 font-sans">
                  {quickViewProduct.longDescription || quickViewProduct.description}
                </p>

                {/* Portion / Size Spec */}
                {quickViewProduct.weight && (
                  <div className="p-3 rounded-xl bg-[#F3F8E8] border border-[#E7D8D0] mb-5 text-xs text-[#3D4930] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#7FB069] shrink-0" />
                    <span><strong>Portion:</strong> {quickViewProduct.weight}</span>
                  </div>
                )}

                {/* Ingredients */}
                {quickViewProduct.ingredients && (
                  <div className="mb-6">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#3D4930] mb-1">
                      Artisan Ingredients:
                    </p>
                    <p className="text-xs text-[#6F7564] font-light italic leading-relaxed">
                      {quickViewProduct.ingredients}
                    </p>
                  </div>
                )}
              </div>

              {/* Quantity & CTA */}
              <div className="pt-5 border-t border-[#E7D8D0] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3D4930]">
                    Quantity
                  </span>
                  <div className="flex items-center border border-[#E7D8D0] rounded-full px-3 py-1 bg-[#F3F8E8]">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="text-[#3D4930] hover:text-[#7FB069] p-1"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold px-3">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="text-[#3D4930] hover:text-[#7FB069] p-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={added}
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] hover:bg-[#fad3d3] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-[#7FB069]" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Sweet Bag · ₹{quickViewProduct.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProductModal;
