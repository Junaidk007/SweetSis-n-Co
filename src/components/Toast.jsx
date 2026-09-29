import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Toast() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
          <div className="bg-[#3D4930] text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(61,73,48,0.35)] border border-[#F6C6C6]/40 flex items-center gap-3 backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-[#F6C6C6] flex items-center justify-center text-[#3D4930] shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium tracking-wide">
              {toast.message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
