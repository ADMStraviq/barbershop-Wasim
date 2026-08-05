import { useState, useEffect } from 'react'
import config from '../config'

const STORAGE_KEY = 'bookingNoticeDismissed'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function NoticeModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Close on Escape and lock background scrolling while open
  useEffect(() => {
    if (!visible) return

    function onKeyDown(e) {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [visible])

  function close() {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  const telHref = `tel:${config.phone.replace(/\s/g, '')}`

  return (
    <div
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-heading"
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm notice-modal-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-dark-card border border-gold/30 shadow-2xl px-6 py-8 sm:px-10 sm:py-10 max-h-[90vh] overflow-y-auto notice-modal-panel"
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Hinweis schließen"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center w-9 h-9 text-off-white/60 hover:text-gold transition-colors duration-300"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-3">
          Information
        </p>

        <h2
          id="notice-modal-heading"
          className="font-playfair text-2xl sm:text-3xl font-semibold text-off-white mb-4 pr-8"
        >
          {config.bookingNotice.heading}
        </h2>

        <div className="w-12 h-px bg-gold/50 mb-5" />

        <p className="font-montserrat text-sm sm:text-[15px] leading-relaxed text-off-white/75 mb-8">
          {config.bookingNotice.text}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex-1 inline-flex items-center justify-center gap-2.5 bg-gold text-dark font-montserrat text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 hover:bg-gold/80 transition-all duration-300"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
          <a
            href={telHref}
            onClick={close}
            className="flex-1 inline-flex items-center justify-center gap-2.5 border border-gold text-gold font-montserrat text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <PhoneIcon size={16} />
            Anrufen
          </a>
        </div>
      </div>

      <style>{`
        @keyframes noticeFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes noticeSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .notice-modal-backdrop { animation: noticeFadeIn 250ms ease-out; }
        .notice-modal-panel { animation: noticeSlideUp 350ms cubic-bezier(0.16, 1, 0.3, 1); }

        @media (prefers-reduced-motion: reduce) {
          .notice-modal-backdrop,
          .notice-modal-panel { animation: none; }
        }
      `}</style>
    </div>
  )
}
