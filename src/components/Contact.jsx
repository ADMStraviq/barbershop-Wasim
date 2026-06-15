import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

function SocialButton({ href, label, style, children, target = '_blank' }) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
        textDecoration: 'none',
        flexShrink: 0,
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

function useConsentState() {
  const [consent, setConsent] = useState(() => localStorage.getItem('cookieConsent'))

  useEffect(() => {
    function sync() {
      setConsent(localStorage.getItem('cookieConsent'))
    }
    window.addEventListener('cookieConsentChange', sync)
    return () => window.removeEventListener('cookieConsentChange', sync)
  }, [])

  return consent
}

export default function Contact() {
  const consent = useConsentState()

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            So finden Sie uns
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div className="flex flex-col gap-10">
            {/* Address */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-montserrat text-gold mb-3">
                Adresse
              </p>
              <p className="font-cormorant text-2xl text-off-white leading-relaxed">
                {config.address}
                <br />
                {config.zipCode} {config.city}
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-montserrat text-gold mb-3">
                Telefon
              </p>
              <a
                href={`tel:${config.phone}`}
                className="font-cormorant text-2xl text-off-white hover:text-gold transition-colors duration-300"
              >
                {config.phone}
              </a>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-montserrat text-gold mb-5">
                Öffnungszeiten
              </p>
              <ul className="flex flex-col gap-0">
                {config.openingHours.map((slot, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-baseline border-b border-white/5 py-4"
                  >
                    <span className="font-montserrat text-sm text-off-white/55">
                      {slot.day}
                    </span>
                    <span className="font-cormorant text-lg text-off-white">
                      {slot.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Online booking CTA */}
            <Link
              to="/termin"
              className="inline-flex items-center gap-3 bg-gold text-dark font-montserrat text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/80 transition-all duration-300 w-fit"
            >
              Online Termin buchen
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold text-gold font-montserrat text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-all duration-300 w-fit"
            >
              <WhatsAppIcon size={16} />
              Per WhatsApp schreiben
            </a>

            {/* Social icon buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <SocialButton
                href={config.social.instagram}
                label="Instagram"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
              >
                <InstagramIcon />
              </SocialButton>
              <SocialButton
                href={config.social.facebook}
                label="Facebook"
                style={{ background: '#1877F2' }}
              >
                <FacebookIcon />
              </SocialButton>
              <SocialButton
                href={config.social.tiktok}
                label="TikTok"
                style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.125)' }}
              >
                <TikTokIcon />
              </SocialButton>
              <SocialButton
                href={`https://wa.me/${config.whatsappNumber}`}
                label="WhatsApp"
                target="_self"
                style={{ background: '#25D366' }}
              >
                <WhatsAppIcon />
              </SocialButton>
              <SocialButton
                href={`mailto:${config.email}`}
                label="E-Mail"
                target="_self"
                style={{ background: '#C9A84C', color: '#0A0A0A' }}
              >
                <EmailIcon />
              </SocialButton>
              <SocialButton
                href="tel:+4917643655325"
                label="Telefon"
                target="_self"
                style={{ background: '#333333' }}
              >
                <PhoneIcon />
              </SocialButton>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="h-[420px] lg:h-auto min-h-[420px] border border-white/5 overflow-hidden">
            {consent === 'accepted' ? (
              <iframe
                src={config.googleMapsEmbedUrl}
                title="Google Maps"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: '#111111' }}
              >
                <p
                  className="text-center font-montserrat"
                  style={{
                    color: 'rgba(245,241,232,0.4)',
                    fontSize: '13px',
                    lineHeight: '1.7',
                    maxWidth: '260px',
                  }}
                >
                  Google Maps ist deaktiviert. Bitte akzeptiere die Cookies um die Karte
                  anzuzeigen.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
