export default function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          .critical-content {
            content-visibility: auto;
            contain-intrinsic-size: 0 500px;
          }
          
          /* Optimize hero section */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Font optimization */
          .font-optimized {
            font-display: swap;
            font-feature-settings: "kern" 1;
            text-rendering: optimizeLegibility;
          }
          
          /* Image optimization */
          .hero-image {
            object-fit: cover;
            width: 100%;
            height: auto;
            max-width: 100%;
          }
          
          /* Reduce layout shift */
          .layout-stable {
            contain: layout style paint;
          }
          
          /* Performance optimizations */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `,
      }}
    />
  )
}
