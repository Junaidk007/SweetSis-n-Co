import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("sweetsis_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [customOrderModalOpen, setCustomOrderModalOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
  const [activeView, setActiveView] = useState("home"); // 'home' | 'shop' | 'about' | 'custom' | 'contact'
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    try {
      localStorage.setItem("sweetsis_cart", JSON.stringify(cart));
    } catch {
      // storage quota or private mode fallback
    }
  }, [cart]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3500);
  };

  const addToCart = (product, quantity = 1, options = {}) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          formattedPrice: product.formattedPrice,
          image: product.image,
          quantity: quantity,
          dietary: options.dietary || product.dietary,
          weight: product.weight,
        },
      ];
    });

    showToast(`Added ${product.name} to your sweet box 🌸`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Item removed from your bag");
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const freeShippingThreshold = 1000;
  const freeShippingProgress = Math.min(
    100,
    (cartSubtotal / freeShippingThreshold) * 100
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        freeShippingProgress,
        cartDrawerOpen,
        setCartDrawerOpen,
        quickViewProduct,
        setQuickViewProduct,
        customOrderModalOpen,
        setCustomOrderModalOpen,
        activeCategoryFilter,
        setActiveCategoryFilter,
        activeView,
        setActiveView,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
