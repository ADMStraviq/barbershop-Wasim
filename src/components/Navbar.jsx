import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

const baseLinks = [
  { label: 'Leistungen', target: 'services' },
  { label: 'Galerie', target: 'gallery' },
  { label: 'Kontakt', target: 'contact' },
]

const navLinks = config.bookingEnabled
  ? [baseLinks[0], baseLinks[1], { label: 'Termin', target: 'booking' }, baseLinks[2]]
  : baseLinks

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAndScroll = (id) => {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), 50)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/images/wasim-zino-logo.png" alt="Wasim Zino Barbershop" style={{ maxHeight: '48px' }} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollTo(link.target)}
                className="text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/60 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {config.bookingEnabled ? (
          <button
            onClick={() => scrollTo('booking')}
            className="hidden lg:block border border-gold text-gold text-xs tracking-[0.2em] uppercase font-montserrat px-7 py-3 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Jetzt buchen
          </button>
        ) : (
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block border border-gold text-gold text-xs tracking-[0.2em] uppercase font-montserrat px-7 py-3 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            WhatsApp
          </a>
        )}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center gap-[6px] w-8 h-8"
          aria-label="Menü öffnen"
        >
          <span
            className={`block w-6 h-px bg-off-white origin-center transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-off-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-off-white origin-center transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-dark/98 border-b border-white/5 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-8 gap-7">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => closeAndScroll(link.target)}
                className="text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/60 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            {config.bookingEnabled ? (
              <button
                onClick={() => closeAndScroll('booking')}
                className="border border-gold text-gold text-xs tracking-[0.2em] uppercase font-montserrat px-7 py-3 hover:bg-gold hover:text-dark transition-all duration-300"
              >
                Jetzt buchen
              </button>
            ) : (
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold text-gold text-xs tracking-[0.2em] uppercase font-montserrat px-7 py-3 hover:bg-gold hover:text-dark transition-all duration-300"
              >
                WhatsApp
              </a>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}
