import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event('cookieConsentChange'))
  }

  function decline() {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
    window.dispatchEvent(new Event('cookieConsentChange'))
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#111111',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        padding: '20px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '16px',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          margin: 0,
          color: 'rgba(245,241,232,0.8)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '13px',
          lineHeight: '1.6',
          flex: '1 1 300px',
        }}
      >
        Wir verwenden Google Maps zur Standortanzeige. Mit der Nutzung dieser Website stimmen Sie
        unserer{' '}
        <Link
          to="/datenschutz"
          style={{ color: '#C9A84C', textDecoration: 'underline' }}
        >
          Datenschutzerklärung
        </Link>{' '}
        zu.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Ablehnen
        </button>
        <button
          onClick={accept}
          style={{
            background: '#C9A84C',
            border: '1px solid #C9A84C',
            color: '#0A0A0A',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  )
}
