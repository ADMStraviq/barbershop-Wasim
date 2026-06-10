import config from '../config'

export default function Services() {
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

        {/* Categories grid */}
        <style>{`
          .price-categories { grid-template-columns: 1fr; }
          @media (min-width: 768px) {
            .price-categories { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
        <div className="price-categories" style={{ display: 'grid', gap: '2.5rem' }}>
          {config.serviceCategories.map((cat) => (
            <div key={cat.category}>
              {/* Category title */}
              <p style={{
                fontSize: '11px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '600',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                borderBottom: '1px solid rgba(201,168,76,0.2)',
                paddingBottom: '0.6rem',
                marginBottom: '1rem',
              }}>
                {cat.category}
              </p>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
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
          ))}
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
