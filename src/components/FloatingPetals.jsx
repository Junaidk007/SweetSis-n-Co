import React, { useMemo } from "react";
import { motion } from "framer-motion";

export function FloatingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${(i * 7 + 4) % 92 + 3}%`,
      delay: (i * 0.7) % 5,
      duration: 9 + (i % 5) * 1.8,
      size: 14 + (i % 4) * 4,
      rotationDir: i % 2 === 0 ? 360 : -360,
      driftX: [(i % 2 === 0 ? 0 : 15), 25, -20, (i % 2 === 0 ? 10 : -10)],
      initialRotate: (i * 45) % 360,
      opacity: 0.35 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-12 will-change-transform"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.3,
            opacity: petal.opacity,
          }}
          animate={{
            y: ["-8vh", "108vh"],
            x: petal.driftX,
            rotate: [petal.initialRotate, petal.initialRotate + petal.rotationDir / 2, petal.initialRotate + petal.rotationDir],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Stylized botanical blossom petal */}
          <svg
            viewBox="0 0 30 40"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(246,198,198,0.25)]"
            fill="none"
          >
            <path
              d="M15 0 C25 8, 30 22, 22 35 C15 42, 5 38, 2 28 C-1 18, 5 8, 15 0 Z"
              fill="#F6C6C6"
              fillOpacity="0.85"
            />
            <path
              d="M15 3 C18 12, 18 25, 15 35"
              stroke="#F4DFD7"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingPetals;
