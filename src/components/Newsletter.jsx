import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F6C6C6] text-[#3D4930] relative overflow-hidden">
      {/* Delicate botanical backdrop decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B9D8A0]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.24em] uppercase text-[#3D4930]/80 mb-3"
        >
          ✦ SWEET LETTERS & SEASONAL MENUS ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930] mb-4 leading-tight"
        >
          Something Sweet, <br />
          Straight to Your Inbox.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-[#3D4930]/85 font-light leading-relaxed mb-8 max-w-xl mx-auto"
        >
          New bakes, seasonal menus, special treats and occasional surprises. Never spam, just a gentle reminder that life is meant to be enjoyed.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-full text-[#3D4930] shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-[#7FB069]" />
            <span className="text-sm font-medium">
              Thank you for subscribing! Your welcome recipe card is on its way 🌸
            </span>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-5 py-3.5 rounded-full bg-white text-[#3D4930] placeholder-[#6F7564] text-xs sm:text-sm border border-[#E7D8D0] focus:outline-none focus:ring-2 focus:ring-[#3D4930] shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] bg-[#3D4930] text-white hover:bg-[#2b3422] transition-colors shadow-sm shrink-0 active:scale-95"
            >
              Join Us
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
