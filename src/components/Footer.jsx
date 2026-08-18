import { Link } from 'react-router-dom'
import config from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-playfair text-xl font-semibold tracking-wider text-off-white">
            {config.shopName}
          </span>

          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              to="/impressum"
              className="text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/35 hover:text-gold transition-colors duration-300"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/35 hover:text-gold transition-colors duration-300"
            >
              Datenschutz
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
              className="bg-transparent border-0 p-0 cursor-pointer text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/35 hover:text-gold transition-colors duration-300"
            >
              Cookie-Einstellungen
            </button>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-xs font-montserrat text-off-white/25">
              &copy; {year} {config.shopName}
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.25)', textAlign: 'center', marginTop: '4px' }}>
              Website erstellt von{' '}
              <a
                href="https://straviq-webdesign.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(245,240,232,0.25)', textDecoration: 'none' }}
              >
                STRAVIQ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
