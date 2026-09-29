import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const {
    cart,
    cartDrawerOpen,
    setCartDrawerOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    freeShippingProgress,
    clearCart,
    showToast,
  } = useCart();

  const [deliverySlot, setDeliverySlot] = useState("morning");
  const [orderNotes, setOrderNotes] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F6C6C6", "#7FB069", "#B9D8A0", "#F4DFD7"],
        });
      } catch {
        // confetti fallback
      }
    }, 1200);
  };

  const handleFinishOrder = () => {
    clearCart();
    setOrderCompleted(false);
    setCartDrawerOpen(false);
    showToast("Thank you for your order! Fresh baking begins shortly 🌸");
  };

  return (
    <AnimatePresence>
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
            className="absolute inset-0 bg-[#3D4930]/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-[#FFF9F5] shadow-2xl flex flex-col justify-between border-l border-[#E7D8D0]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-[#E7D8D0] bg-[#F3F8E8] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F6C6C6] flex items-center justify-center text-[#3D4930]">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-normal text-[#3D4930]">
                      Your Sweet Bag
                    </h2>
                    <p className="text-[11px] text-[#6F7564] tracking-wide">
                      {cart.length} {cart.length === 1 ? "item" : "items"} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-2 rounded-full text-[#3D4930] hover:bg-[#F6C6C6]/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-[#F4DFD7]/50 border-b border-[#E7D8D0]/60 text-xs text-[#3D4930]">
                {cartSubtotal >= freeShippingThreshold ? (
                  <div className="flex items-center gap-1.5 text-[#7FB069] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Unlocked Free Local Delivery across Lucknow!</span>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-medium">
                      <span>Add ₹{freeShippingThreshold - cartSubtotal} more for free delivery</span>
                      <span>{Math.round(freeShippingProgress)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E7D8D0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#7FB069] rounded-full transition-all duration-500"
                        style={{ width: `${freeShippingProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {orderCompleted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#B9D8A0]/40 text-[#7FB069] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#7FB069]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#3D4930]">
                      Order Confirmed!
                    </h3>
                    <p className="text-xs text-[#6F7564] max-w-xs mx-auto leading-relaxed font-light">
                      Our pastry team has received your order. We are carefully preparing your fresh bakes with love.
                    </p>
                    <div className="p-4 rounded-2xl bg-[#F3F8E8] border border-[#E7D8D0] text-xs text-left text-[#3D4930] space-y-1">
                      <p className="font-medium">Estimated Delivery Slot:</p>
                      <p className="text-[#7FB069] font-semibold">
                        Tomorrow · {deliverySlot === "morning" ? "9:00 AM – 12:00 PM" : deliverySlot === "afternoon" ? "2:00 PM – 5:00 PM" : "5:00 PM – 8:00 PM"}
                      </p>
                    </div>
                    <button
                      onClick={handleFinishOrder}
                      className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] hover:bg-[#fed4d4] transition-colors"
                    >
                      Done & Return to Bakes
                    </button>
                  </motion.div>
                ) : cart.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F3F8E8] border border-[#E7D8D0] text-[#7FB069] flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#3D4930]">
                      Your bag is empty
                    </h3>
                    <p className="text-xs text-[#6F7564] font-light max-w-xs mx-auto">
                      Explore our bestselling celebration cakes, flaky croissants, and delicate treats.
                    </p>
                    <button
                      onClick={() => setCartDrawerOpen(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] bg-[#3D4930] text-white hover:bg-[#2c3523] transition-colors"
                    >
                      Explore Bakes
                    </button>
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#E7D8D0] shadow-sm items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-18 h-18 object-cover rounded-xl bg-[#F4DFD7] shrink-0"
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="font-serif text-base font-normal text-[#3D4930] truncate">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-[#7FB069] font-medium mb-1">
                            {item.dietary || "Fresh Bake"}
                          </p>
                          <p className="text-xs font-serif font-medium text-[#3D4930]">
                            ₹{item.price} each
                          </p>

                          {/* Quantity selector */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center border border-[#E7D8D0] rounded-full px-2 py-0.5 bg-[#F3F8E8]">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-0.5 text-[#3D4930] hover:text-[#7FB069]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-semibold px-2">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-0.5 text-[#3D4930] hover:text-[#7FB069]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[#6F7564] hover:text-red-500 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-serif text-sm font-semibold text-[#3D4930]">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Delivery Slot Selector */}
                    <div className="pt-4 border-t border-[#E7D8D0]/60 space-y-2 text-left">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[#3D4930]">
                        Preferred Delivery Slot
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "morning", label: "Morning", time: "9-12 AM" },
                          { id: "afternoon", label: "Afternoon", time: "2-5 PM" },
                          { id: "evening", label: "Evening", time: "5-8 PM" },
                        ].map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setDeliverySlot(slot.id)}
                            className={`p-2 rounded-xl text-center border text-[11px] transition-all ${
                              deliverySlot === slot.id
                                ? "bg-[#3D4930] text-white border-[#3D4930]"
                                : "bg-white text-[#3D4930] border-[#E7D8D0] hover:bg-[#F6C6C6]/20"
                            }`}
                          >
                            <p className="font-semibold">{slot.label}</p>
                            <p className="text-[9px] opacity-80">{slot.time}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="pt-2 text-left">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[#3D4930] mb-1 block">
                        Special Instructions / Cake Inscription
                      </label>
                      <input
                        type="text"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="e.g. 'Happy Birthday Ananya' or eggless notes..."
                        className="w-full text-xs p-2.5 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] placeholder-[#6F7564]/70 focus:outline-none focus:ring-1 focus:ring-[#3D4930]"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {!orderCompleted && cart.length > 0 && (
                <div className="p-6 border-t border-[#E7D8D0] bg-[#F3F8E8] space-y-4">
                  <div className="space-y-1.5 text-xs text-[#6F7564]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-serif text-sm font-medium text-[#3D4930]">
                        ₹{cartSubtotal}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Eco-friendly Botanical Packaging</span>
                      <span className="text-[#7FB069] font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery in Lucknow</span>
                      <span>
                        {cartSubtotal >= freeShippingThreshold ? (
                          <span className="text-[#7FB069] font-medium">FREE</span>
                        ) : (
                          "₹80"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#E7D8D0] text-sm font-semibold text-[#3D4930]">
                      <span>Estimated Total</span>
                      <span className="font-serif text-lg">
                        ₹{cartSubtotal + (cartSubtotal >= freeShippingThreshold ? 0 : 80)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] shadow-[0_4px_16px_rgba(246,198,198,0.5)] hover:bg-[#fad3d3] transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
                  >
                    {isCheckingOut ? (
                      <span>Placing Sweet Order...</span>
                    ) : (
                      <>
                        <span>Proceed to Sweet Checkout</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#6F7564]">
                    Direct hand-delivery from our Lucknow oven to your doorstep.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
