import { useEffect, useState } from 'react'
import config from '../config'

const POLYFILL_SRC = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js'
const APP_SRC     = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js'

export default function Termin() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const container = document.getElementById('planity-container')
    window.planity = {
      key: '-N5fShj6sQjzCv38VtpB',
      primaryColor: '#C9A84C',
      options: { countryCode: 'DE' },
      container,
    }

    const polyfill = document.createElement('script')
    polyfill.src = POLYFILL_SRC

    polyfill.onload = () => {
      if (!active) return
      const app = document.createElement('script')
      app.src = APP_SRC
      app.onload = () => { if (active) setLoading(false) }
      document.body.appendChild(app)
      polyfill._appScript = app
    }

    document.body.appendChild(polyfill)

    return () => {
      active = false
      if (document.body.contains(polyfill)) document.body.removeChild(polyfill)
      if (polyfill._appScript && document.body.contains(polyfill._appScript))
        document.body.removeChild(polyfill._appScript)
      delete window.planity
    }
  }, [])

  return (
    <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hinweis: Online-Terminbuchung pausiert */}
        <div className="mb-10 border-2 border-gold bg-gold/[0.06] px-5 py-6 sm:px-8 sm:py-7">
          <div className="flex items-start gap-3 sm:gap-4">
            <svg
              className="shrink-0 text-gold mt-0.5"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>

            <div className="min-w-0">
              <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-gold mb-3">
                {config.bookingNotice.heading}
              </h2>
              <p className="font-montserrat text-sm sm:text-[15px] leading-relaxed text-off-white/80">
                {config.bookingNotice.text}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={`https://wa.me/${config.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gold text-dark font-montserrat text-xs tracking-[0.2em] uppercase font-semibold px-7 py-3.5 hover:bg-gold/80 transition-all duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${config.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 border border-gold text-gold font-montserrat text-xs tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-gold hover:text-dark transition-all duration-300"
                >
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Online Terminbuchung
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Termin buchen
          </h1>
        </div>

        {/* Loading spinner */}
        {loading && (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Planity widget */}
        <div
          id="planity-container"
          className={loading ? 'hidden' : 'min-h-[600px] w-full'}
        />

        {/* Contrast fix for white Planity widget on dark background */}
        <style>{`
          #planity-container, #planity, #planitywl {
            background: #ffffff !important;
            border-radius: 12px;
            padding: 1rem;
          }

          #planitywl * {
            color: #1a1a1a !important;
          }

          #planitywl h3,
          [class*="service_set-module_title"],
          [class*="service_set_module_title"] {
            color: #0a0a0a !important;
            opacity: 1 !important;
          }

          [class*="service_set-module_businessServices"],
          [class*="services-module_servicesContainer"],
          [class*="step-module_service"] {
            color: #1a1a1a !important;
            opacity: 1 !important;
          }

          [class*="isLimited"],
          [class*="isCollapsed"] {
            color: #333333 !important;
            opacity: 1 !important;
          }

          .planityWidget * {
            color: #1a1a1a !important;
          }

          /* Primary action buttons: dark fill */
          #planitywl .button-module_primary-Careb {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
          }

          #planitywl .button-module_primary-Careb *,
          #planitywl .button-module_primary-Careb span {
            color: #ffffff !important;
          }

          /* Secondary and underlined buttons: transparent, outlined */
          #planitywl .button-module_secondary-EQMHU,
          #planitywl .button-module_underlined-H3lcl {
            background-color: transparent !important;
            border: 1px solid #1a1a1a !important;
            color: #1a1a1a !important;
          }

          #planitywl .button-module_secondary-EQMHU *,
          #planitywl .button-module_secondary-EQMHU span,
          #planitywl .button-module_underlined-H3lcl *,
          #planitywl .button-module_underlined-H3lcl span {
            color: #1a1a1a !important;
          }

          /* Icon-only buttons: no background */
          #planitywl .icon_button-module_iconButton-vWDjZ {
            background-color: transparent !important;
          }
        `}</style>
      </div>
    </section>
  )
}
