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
          <div className="flex items-center gap-8">
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
          </div>

          {/* Copyright */}
          <p className="text-xs font-montserrat text-off-white/25">
            &copy; {year} {config.shopName}
          </p>
        </div>
      </div>
    </footer>
  )
}
