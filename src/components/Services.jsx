import { useRef, useState } from 'react'
import config from '../config'

export default function Services() {
  const [openCategory, setOpenCategory] = useState(null)
  const panelRefs = useRef({})

  const toggle = (category) => {
    setOpenCategory((current) => (current === category ? null : category))
  }

  return (
    <section id="services" className="bg-dark-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Unser Angebot
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Leistungen
          </h2>
        </div>

        {/* Subheading */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '16px',
          color: 'rgba(245,240,232,0.6)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
        }}>
          Als Friseurmeister bin ich täglich persönlich im Salon vor Ort und kümmere mich selbst um meine Kunden.
        </p>

        {/* Category accordion */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {config.serviceCategories.map((cat) => {
            const isOpen = openCategory === cat.category
            const panel = panelRefs.current[cat.category]
            return (
              <div key={cat.category} style={{ marginBottom: '0.5rem' }}>
                {/* Category header */}
                <button
                  type="button"
                  onClick={() => toggle(cat.category)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                    padding: '0.9rem 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '600',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  <span>{cat.category}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.35s ease',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Items panel */}
                <div
                  ref={(el) => { panelRefs.current[cat.category] = el }}
                  style={{
                    maxHeight: isOpen ? `${panel ? panel.scrollHeight : 1000}px` : '0px',
                    overflow: 'hidden',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                    padding: '1rem 0 1.25rem',
                  }}>
                    {cat.items.map((item) => (
                      <div key={item.name} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{
                          fontSize: '14px',
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#F5F0E8',
                          whiteSpace: 'nowrap',
                        }}>
                          {item.name}
                        </span>
                        <span style={{
                          flex: 1,
                          borderBottom: '1px dotted rgba(245,240,232,0.2)',
                          marginBottom: '3px',
                        }} />
                        <span style={{
                          fontSize: '14px',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '500',
                          color: '#C9A84C',
                          whiteSpace: 'nowrap',
                        }}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Services note */}
        {config.servicesNote && (
          <p style={{
            color: '#C9A84C',
            maxWidth: '600px',
            margin: '3rem auto 0',
            fontSize: '13px',
            fontFamily: "'Montserrat', sans-serif",
            fontStyle: 'italic',
            textAlign: 'center',
            opacity: 0.8,
          }}>
            {config.servicesNote}
          </p>
        )}
      </div>
    </section>
  )
}
