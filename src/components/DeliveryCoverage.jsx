import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, CheckCircle2, AlertCircle, Search } from "lucide-react";
import { deliveryZones } from "../data/products";

export function DeliveryCoverage() {
  const [searchArea, setSearchArea] = useState("");
  const [checkResult, setCheckResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!searchArea.trim()) return;

    const matched = deliveryZones.some((zone) =>
      zone.toLowerCase().includes(searchArea.trim().toLowerCase())
    );

    if (matched || searchArea.toLowerCase().includes("lucknow")) {
      setCheckResult({
        success: true,
        message: `Good news! We deliver fresh artisan bakes directly to ${searchArea}.`,
      });
    } else {
      setCheckResult({
        success: false,
        message: `We prioritize central Lucknow & Gomti Nagar. Contact our team for special distance orders.`,
      });
    }
  };

  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-[#F3F8E8] relative overflow-hidden border-t border-[#E7D8D0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Deep Stem Green Card (7 cols) (Prompt Section 20) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#3D4930] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(61,73,48,0.2)] relative overflow-hidden text-left"
          >
            {/* Background botanical watermark */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#7FB069] flex items-center justify-center text-white mb-8 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>

              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#F6C6C6] mb-3">
                LOCAL DOORSTEP DELIVERY
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal mb-4 text-white">
                Sweetness, Delivered.
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 max-w-lg">
                We carefully pack every order so it reaches you looking as beautiful as when it left our kitchen. Hand-delivered in temperature-stabilized carriers across Lucknow.
              </p>

              {/* Coverage Tags */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-[#F6C6C6] font-semibold mb-3">
                  Key Delivery Neighborhoods:
                </p>
                <div className="flex flex-wrap gap-2">
                  {deliveryZones.map((zone) => (
                    <span
                      key={zone}
                      className="px-3 py-1.5 rounded-full text-xs bg-white/10 text-white/90 border border-white/15"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Locality Checker */}
              <form onSubmit={handleCheck} className="relative max-w-md">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
                  <input
                    type="text"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                    placeholder="Enter your Lucknow area or pin code..."
                    className="bg-transparent text-white placeholder-white/50 text-xs px-4 py-2 flex-grow focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#F6C6C6] text-[#3D4930] text-xs font-semibold uppercase tracking-wider hover:bg-[#fedcdc] transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Check</span>
                  </button>
                </div>

                {checkResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-xl text-xs flex items-center gap-2 ${
                      checkResult.success
                        ? "bg-[#7FB069]/25 text-[#B9D8A0] border border-[#7FB069]/40"
                        : "bg-white/10 text-[#F6C6C6] border border-white/20"
                    }`}
                  >
                    {checkResult.success ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#B9D8A0]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#F6C6C6]" />
                    )}
                    <span>{checkResult.message}</span>
                  </motion.div>
                )}
              </form>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
              <span>Fresh morning dispatch 8:30 AM – 7:30 PM</span>
              <span className="text-[#F6C6C6]">Same-Day Slot Available</span>
            </div>
          </motion.div>

          {/* Right: Order Information (5 cols) (Prompt Section 20) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#FFF9F5] rounded-3xl p-8 sm:p-12 border border-[#E7D8D0]/80 shadow-[0_4px_24px_rgba(61,73,48,0.04)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#7FB069]" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069]">
                  SCHEDULE & CUTOFFS
                </span>
              </div>
              <h2 className="font-serif text-3xl font-normal text-[#3D4930] mb-8">
                Order Information
              </h2>

              {/* Rows */}
              <div className="space-y-6">
                {[
                  {
                    title: "Same-Day Orders",
                    timing: "Order before 11:00 AM",
                    detail: "Available for bestselling celebration cakes, croissants and cookies.",
                    icon: Clock,
                  },
                  {
                    title: "Next-Day Orders",
                    timing: "Order by 6:00 PM",
                    detail: "Full artisan menu open for guaranteed next-morning fresh baking.",
                    icon: Calendar,
                  },
                  {
                    title: "Custom Cakes",
                    timing: "Please order 3–5 days in advance",
                    detail: "Gives our cake artists time to handcraft delicate details and sugar flowers.",
                    icon: Sparkles,
                  },
                  {
                    title: "Wedding Cakes",
                    timing: "Please inquire 2–4 weeks ahead",
                    detail: "Includes tasting box consultation and bespoke architectural cake sketch.",
                    icon: CheckCircle2,
                  },
                ].map((row, i) => (
                  <div
                    key={row.title}
                    className="pb-5 border-b border-[#E7D8D0]/60 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-xl font-normal text-[#3D4930]">
                        {row.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#7FB069] bg-[#F3F8E8] px-2.5 py-1 rounded-full border border-[#E7D8D0]/70">
                        {row.timing}
                      </span>
                    </div>
                    <p className="text-xs text-[#6F7564] font-light leading-relaxed">
                      {row.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7D8D0]">
              <p className="text-xs text-[#6F7564] font-light">
                Questions about an upcoming celebration? Call us directly at{" "}
                <span className="font-semibold text-[#3D4930]">+91 98390 12345</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkles(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

export default DeliveryCoverage;
