import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Calendar, CheckCircle2, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "../context/CartContext";

export function CustomOrderModal() {
  const { customOrderModalOpen, setCustomOrderModalOpen, showToast } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "Birthday Celebration",
    tierSize: "classic-two",
    flavor: "Strawberry Blossom & Tahitian Vanilla",
    dietary: "100% Eggless",
    eventDate: "",
    locality: "Gomti Nagar",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!customOrderModalOpen) return null;

  const estimatedPrices = {
    "petite-one": 1800,
    "classic-two": 3600,
    "grand-three": 6500,
    "bespoke-wedding": 9500,
  };

  const currentEstimate = estimatedPrices[formData.tierSize] || 3600;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F6C6C6", "#7FB069", "#B9D8A0", "#F4DFD7"],
      });
    } catch {
      // fallback
    }
  };

  const handleClose = () => {
    setCustomOrderModalOpen(false);
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#3D4930]/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative bg-[#FFF9F5] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E7D8D0] z-10 my-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#F3F8E8] border-b border-[#E7D8D0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F6C6C6] flex items-center justify-center text-[#3D4930]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7FB069]">
                  BESPOKE CAKE ATELIER
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#3D4930]">
                  Custom Cake Inquiry
                </h2>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full text-[#3D4930] hover:bg-[#F6C6C6]/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#B9D8A0]/40 text-[#7FB069] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#7FB069]" />
                </div>
                <h3 className="font-serif text-3xl text-[#3D4930]">
                  Inquiry Received with Love!
                </h3>
                <p className="text-xs sm:text-sm text-[#6F7564] max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong>{formData.name || "sweet friend"}</strong>. Our master cake designer will review your vision for {formData.occasion} and contact you via WhatsApp / Phone within 24 hours with design sketches.
                </p>

                <div className="p-4 rounded-2xl bg-[#F3F8E8] border border-[#E7D8D0] text-xs text-left text-[#3D4930] space-y-1 max-w-md mx-auto">
                  <p><strong>Selected Flavor:</strong> {formData.flavor}</p>
                  <p><strong>Dietary:</strong> {formData.dietary}</p>
                  <p><strong>Estimated Range:</strong> Approx ₹{currentEstimate}</p>
                </div>

                <button
                  onClick={handleClose}
                  className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] hover:bg-[#fed4d4] transition-colors"
                >
                  Back to SweetSis & Co.
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Occasion Selector */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-2">
                    1. Celebration Occasion
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Birthday Celebration",
                      "Dream Wedding",
                      "Anniversary",
                      "Baby Shower",
                      "Bridal Shower",
                      "Milestone Event",
                    ].map((occ) => (
                      <button
                        type="button"
                        key={occ}
                        onClick={() => setFormData({ ...formData, occasion: occ })}
                        className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                          formData.occasion === occ
                            ? "bg-[#3D4930] text-white border-[#3D4930]"
                            : "bg-white text-[#3D4930] border-[#E7D8D0] hover:bg-[#F6C6C6]/20"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Tier & Size */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-2">
                    2. Cake Size / Tiers
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: "petite-one", label: "Single Tier (1 kg)", serves: "Serves 6–8 guests", price: "₹1,800+" },
                      { id: "classic-two", label: "Two Tier (2.5 kg)", serves: "Serves 18–22 guests", price: "₹3,600+" },
                      { id: "grand-three", label: "Three Tier (4.5 kg)", serves: "Serves 40+ guests", price: "₹6,500+" },
                      { id: "bespoke-wedding", label: "Luxury Wedding Tier", serves: "Tailored to your party", price: "₹9,500+" },
                    ].map((tier) => (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setFormData({ ...formData, tierSize: tier.id })}
                        className={`p-3 rounded-2xl text-left border transition-all ${
                          formData.tierSize === tier.id
                            ? "bg-[#F3F8E8] border-[#7FB069] shadow-sm ring-1 ring-[#7FB069]"
                            : "bg-white border-[#E7D8D0] hover:bg-[#F4DFD7]/30"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif font-medium text-sm text-[#3D4930]">
                            {tier.label}
                          </span>
                          <span className="text-xs font-semibold text-[#7FB069]">
                            {tier.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#6F7564] font-light">{tier.serves}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Flavor & Dietary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      3. Signature Flavor
                    </label>
                    <select
                      value={formData.flavor}
                      onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none focus:ring-1 focus:ring-[#3D4930]"
                    >
                      <option>Strawberry Blossom & Tahitian Vanilla</option>
                      <option>Pink Velvet & Blush Cream</option>
                      <option>Dark Valrhona Chocolate & Sea Salt</option>
                      <option>Rose Pistachio Persian Chiffon</option>
                      <option>Lavender Honey & Lemon Curd</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      Dietary Preference
                    </label>
                    <div className="flex gap-2">
                      {["100% Eggless", "Contains Eggs"].map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setFormData({ ...formData, dietary: d })}
                          className={`flex-1 p-2.5 rounded-xl text-center text-xs border ${
                            formData.dietary === d
                              ? "bg-[#7FB069] text-white border-[#7FB069]"
                              : "bg-white text-[#3D4930] border-[#E7D8D0]"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Event Date & Locality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      Event / Delivery Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      Lucknow Locality
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gomti Nagar, Phase 2"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 5. Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ananya Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98390 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 6. Vision Notes */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#3D4930] block mb-1.5">
                    Describe Your Vision (Colors, Inscription, Floral theme)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Pastel blush pink flowers with gold leaf accents, message: 'Happy 30th Maya'..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-[#E7D8D0] bg-white text-[#3D4930] focus:outline-none"
                  />
                </div>

                {/* Price Bar & Submit */}
                <div className="pt-4 border-t border-[#E7D8D0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#6F7564]">
                      Starting Estimate
                    </p>
                    <p className="font-serif text-2xl font-semibold text-[#3D4930]">
                      From ₹{currentEstimate}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] hover:bg-[#fad3d3] transition-colors shadow-sm active:scale-95"
                  >
                    Send Custom Inquiry 🌸
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CustomOrderModal;
