import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Cake, Truck, Heart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: ShoppingBag,
      title: "Choose Your Sweet",
      description: "Browse our cakes, pastries and treats, then choose what makes your moment a little sweeter.",
    },
    {
      num: "02",
      icon: Cake,
      title: "Freshly Made",
      description: "Our bakers prepare every order with care, using quality ingredients and plenty of patience.",
    },
    {
      num: "03",
      icon: Truck,
      title: "Delivered With Care",
      description: "Your order arrives beautifully packed and ready to make someone's day.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F3F8E8] relative border-t border-[#E7D8D0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7FB069] mb-3"
          >
            THE SWEETSIS WAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#3D4930]"
          >
            From Our Oven to Your Door
          </motion.h2>
        </div>

        {/* 3 Staggered Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#FFF9F5] rounded-3xl p-8 sm:p-10 border border-[#E7D8D0]/80 shadow-[0_4px_24px_rgba(61,73,48,0.04)] text-left relative flex flex-col justify-between group hover:border-[#F6C6C6] transition-colors"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl font-medium text-[#F6C6C6] group-hover:text-[#7FB069] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F6C6C6]/30 flex items-center justify-center text-[#3D4930] group-hover:bg-[#F6C6C6] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl text-[#3D4930] mb-3 font-normal">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F7564] font-light leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E7D8D0]/40 flex items-center gap-1.5 text-[11px] font-medium text-[#7FB069]">
                  <Heart className="w-3 h-3 fill-[#7FB069]" />
                  <span className="tracking-wider uppercase text-[10px]">Artisanal Care</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
