import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function InitialLoader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading SweetSis and Co. luxury artisan bakery"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 1.02,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F3F8E8] text-[#3D4930] min-h-[100dvh] w-screen overflow-hidden select-none px-6"
    >
      {/* Background Soft Blossom and Fresh Leaf glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-tr from-[#F6C6C6]/35 via-[#F4DFD7]/50 to-[#B9D8A0]/25 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
        {/* Subtle Botanical Bakery Emblem with Gentle Organic Breathing */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Pulsing blossom aura */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.75, 0.4],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 rounded-full bg-[#F6C6C6]/40 blur-md pointer-events-none"
            />
          )}

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFF9F5] border border-[#E7D8D0] shadow-[0_8px_25px_rgba(246,198,198,0.45)] flex items-center justify-center">
            {/* Elegant botanical blossom flower mark */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-9 h-9 sm:w-11 sm:h-11 text-[#3D4930]"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 180, 360],
                    }
              }
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Blossom petals */}
              <circle cx="50" cy="50" r="42" fill="#F6C6C6" fillOpacity="0.45" />
              <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#3D4930] transition-transform duration-300 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11" />
                  <path d="M12 2v20" />
                  <path d="M12 12c-3.5 0-6-2.5-6-6" />
                  <path d="M12 12c3.5 0 6 2.5 6 6" />
                </svg>
              {/* <circle cx="50" cy="50" r="8" fill="#7FB069" />
              <circle cx="50" cy="50" r="4" fill="#FFF9F5" /> */}
            </motion.svg>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.26em] uppercase text-[#7FB069] mb-3"
        >
          SWEETSIS & CO.
        </motion.p>

        {/* Catchy Editorial Loading Line (Prompt requirement) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-serif italic text-3xl sm:text-4xl text-[#3D4930] font-normal leading-tight mb-3"
        >
          Baking your sweetness...
        </motion.h1>

        {/* Subtle Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xs sm:text-sm text-[#6F7564] font-light tracking-wide font-sans mb-8"
        >
          Freshly made. Almost ready.
        </motion.p>

        {/* Delicate Botanical Progress Bar */}
        <div className="w-48 sm:w-56 h-[2px] bg-[#E7D8D0] rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: shouldReduceMotion ? 0.8 : 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-[#F6C6C6] via-[#7FB069] to-[#F6C6C6] rounded-full"
          />
        </div>

        {/* Bakery Origin Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-[10px] text-[#6F7564] tracking-[0.18em] uppercase"
        >
          ✦ Artisan Patisserie · Lucknow ✦
        </motion.p>
      </div>
    </motion.div>
  );
}

export default InitialLoader;
