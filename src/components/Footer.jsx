import React from "react";
import { Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./Icons";
import { useCart } from "../context/CartContext";

export function Footer() {
  const { setActiveCategoryFilter, setCustomOrderModalOpen } = useCart();

  const handleCategoryClick = (catId) => {
    setActiveCategoryFilter(catId);
    const section = document.getElementById("shop-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3D4930] text-white pt-20 pb-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 4 Columns (Prompt Section 21) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/15">
          {/* Column 1: Brand & Socials */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F6C6C6] flex items-center justify-center text-[#3D4930]">
                <Heart className="w-4 h-4 fill-[#3D4930]" />
              </div>
              <span className="font-semibold text-sm tracking-[0.2em] uppercase">
                SWEETSIS & CO.
              </span>
            </div>

            <p className="font-serif italic text-xl text-white/90">
              Small batches. <br />Big feelings.
            </p>

            <p className="text-xs text-white/70 font-light leading-relaxed font-sans max-w-xs">
              Artisan patisserie & celebration bakery based in Lucknow, crafting edible moments of wonder and sweet comfort.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F6C6C6] hover:text-[#3D4930] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F6C6C6] hover:text-[#3D4930] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F6C6C6] hover:text-[#3D4930] flex items-center justify-center transition-all"
                aria-label="Pinterest"
              >
                <span className="text-xs font-serif font-bold">P</span>
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F6C6C6] mb-5">
              Shop
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75 font-light">
              <li>
                <button
                  onClick={() => handleCategoryClick("all")}
                  className="hover:text-white transition-colors"
                >
                  All Bakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("cakes")}
                  className="hover:text-white transition-colors"
                >
                  Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("pastries")}
                  className="hover:text-white transition-colors"
                >
                  Pastries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("cookies")}
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("gift-boxes")}
                  className="hover:text-white transition-colors"
                >
                  Gift Boxes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("cakes")}
                  className="hover:text-white transition-colors"
                >
                  Seasonal Menu
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F6C6C6] mb-5">
              Services
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75 font-light">
              <li>
                <button
                  onClick={() => setCustomOrderModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCustomOrderModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Wedding Cakes
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Events & Dessert Tables
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Corporate Gift Orders
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Festive Gift Hampers
                </span>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Delivery Coverage
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F6C6C6] mb-5">
              Information
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75 font-light">
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Delivery Timings
                </a>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Cake Care & Storage Guide
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  FAQs & Allergen Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Prompt Section 21) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 font-light gap-4">
          <p>© 2026 SweetSis & Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-[#F6C6C6]">Handmade in Lucknow, India 🌸</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
