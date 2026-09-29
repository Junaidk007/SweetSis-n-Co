export const HERO_IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1714669889975-90386fbb03e4?w=1600&auto=format&fit=crop&q=80";

export const FALLBACK_CAKE_URL =
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=85&w=2000&auto=format&fit=crop";

/**
 * Preloads an image using the browser Image API.
 * Resolves as soon as the image loads, or falls back gracefully on error/timeout
 * so the initial loader is never permanently blocked.
 */
export function preloadImage(src, timeoutMs = 4000) {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !src) {
      resolve({ success: true, src });
      return;
    }

    const img = new Image();
    let settled = false;

    const finalize = (success, error = null) => {
      if (!settled) {
        settled = true;
        img.onload = null;
        img.onerror = null;
        resolve({ success, error, src });
      }
    };

    const timer = setTimeout(() => {
      finalize(false, "timeout");
    }, timeoutMs);

    img.onload = () => {
      clearTimeout(timer);
      finalize(true);
    };

    img.onerror = () => {
      clearTimeout(timer);
      finalize(false, "load_error");
    };

    img.decoding = "async";
    img.src = src;

    // Check if the image is already cached and completed
    if (img.complete) {
      clearTimeout(timer);
      finalize(true);
    }
  });
}
