import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lädt die wichtigsten Schriften per <link rel="preload"> vor, damit der Text
// nicht erst nach dem CSS die Schrift anfordert: Montserrat 400 (Fließtext) und
// Playfair Display 600 (Hero-Überschrift). Die Dateinamen enthalten einen Hash
// und stehen erst nach dem Build fest, deshalb werden sie hier aus dem Bundle
// gelesen. Im Dev-Server gibt es kein Preload.
const CRITICAL_FONTS = [
  /montserrat-latin-400-normal-[\w-]+\.woff2$/,
  /playfair-display-latin-600-normal-[\w-]+\.woff2$/,
]

function preloadCriticalFont() {
  return {
    name: 'preload-critical-font',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html
      const names = Object.keys(ctx.bundle)
      return CRITICAL_FONTS.map((pattern) => names.find((name) => pattern.test(name)))
        .filter(Boolean)
        .map((file) => ({
          tag: 'link',
          attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head',
        }))
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadCriticalFont()],
})
