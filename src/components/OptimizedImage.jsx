import React, { useState } from "react";
import { FALLBACK_CAKE_URL } from "../utils/imageLoader";

/**
 * OptimizedImage component for SweetSis & Co.
 * Centralizes image loading strategy:
 * - When priority is true: loading="eager", fetchPriority="high", decoding="async" (e.g. Hero)
 * - When priority is false: loading="lazy", fetchPriority="auto", decoding="async" (all below-fold images)
 * - Warm Cream / Spring Mist subtle placeholder to prevent layout shifts (CLS)
 * - Built-in graceful onError fallback handling
 */
export function OptimizedImage({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  priority = false,
  fallbackSrc = FALLBACK_CAKE_URL,
  onLoad,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
    if (onError) onError(e);
  };

  return (
    <div className={`relative overflow-hidden bg-[#F4DFD7]/60 ${containerClassName}`}>
      {/* Subtle editorial warm cream placeholder before load */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-[#F4DFD7] via-[#F3F8E8] to-[#F4DFD7] animate-pulse duration-1000 pointer-events-none"
        />
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;
