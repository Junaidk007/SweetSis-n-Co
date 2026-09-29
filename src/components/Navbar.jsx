import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Sparkles, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setCartDrawerOpen, setActiveView, setActiveCategoryFilter, activeView } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (view, category = null) => {
    setActiveView(view);
    if (category) {
      setActiveCategoryFilter(category);
    }
    setMobileMenuOpen(false);

    if (view === "home" && !category) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (category || view === "shop") {
      const section = document.getElementById("shop-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const section = document.getElementById(`${view}-section`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F3F8E8]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(61,73,48,0.06)] py-3 border-b border-[#E7D8D0]/80"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Botanical Emblem */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#F6C6C6] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
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
              </div>
              <span
                className={`text-sm sm:text-base font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#3D4930]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                }`}
              >
                SWEETSIS & CO.
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Shop", view: "shop", category: "all" },
                { name: "Cakes", view: "shop", category: "cakes" },
                { name: "Pastries", view: "shop", category: "pastries" },
                { name: "Custom Orders", view: "custom", category: null },
                { name: "About", view: "about", category: null },
                { name: "Contact", view: "contact", category: null },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.view, item.category)}
                  className={`text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 relative py-1 focus:outline-none group ${
                    scrolled
                      ? "text-[#3D4930] hover:text-[#7FB069]"
                      : "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F6C6C6] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right: Cart Button + Order Now CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setCartDrawerOpen(true)}
                className={`relative p-2.5 rounded-full transition-all duration-300 focus:outline-none group ${
                  scrolled
                    ? "text-[#3D4930] hover:bg-[#F6C6C6]/30"
                    : "text-white hover:bg-white/20 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                }`}
                aria-label="Open shopping bag"
              >
                <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#3D4930] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F3F8E8] shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                onClick={() => handleNavClick("shop", "all")}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] bg-[#F6C6C6] text-[#3D4930] transition-all duration-300 hover:bg-[#f3b5b5] hover:shadow-[0_4px_16px_rgba(246,198,198,0.5)] active:scale-95"
              >
                Order Now
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                  scrolled
                    ? "text-[#3D4930] hover:bg-[#F6C6C6]/20"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#3D4930]/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#F3F8E8] shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E7D8D0]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#F6C6C6] flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-[#3D4930]" />
                    </div>
                    <span className="font-semibold text-xs tracking-[0.2em] text-[#3D4930] uppercase">
                      SWEETSIS & CO.
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-[#3D4930] hover:bg-[#F6C6C6]/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col space-y-4">
                  {[
                    { label: "Home", view: "home" },
                    { label: "All Bakes (Shop)", view: "shop", category: "all" },
                    { label: "Celebration Cakes", view: "shop", category: "cakes" },
                    { label: "Pastries & Tarts", view: "shop", category: "pastries" },
                    { label: "Cookies & Treats", view: "shop", category: "cookies" },
                    { label: "Custom Cake Studio", view: "custom" },
                    { label: "Our Story", view: "about" },
                    { label: "Delivery & Contact", view: "contact" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.view, item.category)}
                      className="text-left font-serif text-xl text-[#3D4930] hover:text-[#7FB069] transition-colors py-1 flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#7FB069] opacity-0 group-hover:opacity-100 transition-opacity">
                        ✦
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E7D8D0] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick("shop", "all");
                  }}
                  className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#F6C6C6] text-[#3D4930] shadow-sm active:scale-98"
                >
                  Order Fresh Today
                </button>
                <p className="text-center text-[11px] text-[#6F7564] tracking-wide">
                  Lucknow's boutique artisan bakery & patisserie.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
