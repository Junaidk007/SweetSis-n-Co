import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext";
import { InitialLoader } from "./components/InitialLoader";
import { HERO_IMAGE_URL, preloadImage } from "./utils/imageLoader";
import { GrainOverlay } from "./components/GrainOverlay";
import { FloatingPetals } from "./components/FloatingPetals";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStatement } from "./components/BrandStatement";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { SeasonalFeature } from "./components/SeasonalFeature";
import { HowItWorks } from "./components/HowItWorks";
import { AboutSection } from "./components/AboutSection";
import { CustomCakesSection } from "./components/CustomCakesSection";
import { Testimonials } from "./components/Testimonials";
import { VisualGallery } from "./components/VisualGallery";
import { DeliveryCoverage } from "./components/DeliveryCoverage";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { ProductModal } from "./components/ProductModal";
import { CustomOrderModal } from "./components/CustomOrderModal";
import { Toast } from "./components/Toast";

function AppContent() {
  const [isReady, setIsReady] = useState(false);

useEffect(() => {
  let mounted = true;

  const MIN_LOADER_TIME = 6000; // 6 seconds

  const preload = preloadImage(HERO_IMAGE_URL, 4000);

  const minimumTime = new Promise((resolve) => {
    setTimeout(resolve, MIN_LOADER_TIME);
  });

  Promise.all([preload, minimumTime]).then(() => {
    if (mounted) {
      setIsReady(true);
    }
  });

  return () => {
    mounted = false;
  };
}, []);

  return (
    <>
      {/* Branded Initial Loader (Connected to critical hero image readiness) */}
      <AnimatePresence mode="wait">
        {!isReady && <InitialLoader key="initial-loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#F3F8E8] text-[#3D4930] selection:bg-[#F6C6C6] selection:text-[#3D4930]">
      {/* Visual Effects (Prompt Section 6 & 23) */}
      <GrainOverlay />
      <FloatingPetals />

      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        {/* Full-bleed Luxury Hero */}
        <Hero />

        {/* Brand Statement / Editorial Intro */}
        <BrandStatement />

        {/* 4 Interactive Categories */}
        <Categories />

        {/* Bestselling Bakes / Shop Section */}
        <FeaturedProducts />

        {/* Seasonal Feature Editorial Split */}
        <SeasonalFeature />

        {/* 3-Step Illustrated How It Works */}
        <HowItWorks />

        {/* About SweetSis & Co. Story & Stats */}
        <AboutSection />

        {/* Bespoke Custom Cakes Hero Section */}
        <CustomCakesSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Instagram / Visual Journal Gallery */}
        <VisualGallery />

        {/* Local Delivery & Order Schedule */}
        <DeliveryCoverage />

        {/* Soft Blossom Pink Newsletter Block */}
        <Newsletter />
      </main>

      {/* Deep Stem 4-Column Footer */}
      <Footer />

      {/* Interactive Drawers, Modals & Toast */}
      <CartDrawer />
      <ProductModal />
      <CustomOrderModal />
      <Toast />
      </div>
    </>
  );
}

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
