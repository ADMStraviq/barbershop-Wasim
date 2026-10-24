import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

const POLYFILL_SRC = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js'
const APP_SRC     = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js'

// Das Widget wird erst nach einem Klick geladen (Zwei-Klick-Lösung), weil es
// beim Laden Daten an Planity und dessen Dienstleister überträgt. Die Wahl
// gilt nur für die aktuelle Sitzung.
const CONSENT_KEY = 'planityConsent'

function readConsent() {
  try {
    return sessionStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

function saveConsent() {
  try {
    sessionStorage.setItem(CONSENT_KEY, 'accepted')
  } catch {
    // Ohne Speicher gilt die Wahl nur bis zum Verlassen der Seite
  }
}

export default function Termin() {
  const [consent, setConsent] = useState(readConsent)

  function load() {
    saveConsent()
    setConsent(true)
  }

  return (
    <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Online-Terminbuchung
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Termin buchen
          </h1>
        </div>

        {consent ? <PlanityWidget /> : <PlanityPlaceholder onLoad={load} />}
      </div>
    </section>
  )
}

function PlanityPlaceholder({ onLoad }) {
  return (
    <div className="min-h-[600px] w-full flex items-center justify-center border border-gold/30 bg-dark-card px-6 py-12">
      <div className="max-w-md text-center">
        <p className="font-montserrat text-sm leading-relaxed text-off-white/80 mb-8">
          Die Online-Terminbuchung wird von Planity bereitgestellt. Mit dem Laden werden Daten an
          Planity und dessen Dienstleister übertragen. Mehr dazu in der{' '}
          <Link to="/datenschutz" className="text-gold underline underline-offset-4 hover:text-gold/80">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={onLoad}
          className="bg-gold text-dark font-montserrat font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/80 transition-colors duration-300"
        >
          Terminbuchung laden
        </button>
        <p className="mt-6">
          <a
            href={config.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 font-montserrat text-xs text-off-white/70 underline underline-offset-4 hover:text-gold transition-colors duration-300"
          >
            Direkt bei Planity öffnen
          </a>
        </p>
      </div>
    </div>
  )
}

function PlanityWidget() {
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
    <>
      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center items-center min-h-[600px]">
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
    </>
  )
}
