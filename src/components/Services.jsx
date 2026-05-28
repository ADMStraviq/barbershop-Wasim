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

        {/* Grid */}
        {(() => {
          const services = config.services
          const isFive = services.length === 5
          const firstRow = isFive ? services.slice(0, 3) : services
          const secondRow = isFive ? services.slice(3) : []

          const renderCard = (service, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 lg:p-10 group hover:bg-[#141414] transition-colors duration-300"
            >
              <span className="block font-playfair text-5xl font-semibold text-gold/15 group-hover:text-gold/35 transition-colors duration-500 mb-6 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-playfair text-xl font-semibold text-off-white mb-3">
                {service.name}
              </h3>
              <div className="w-8 h-px bg-gold mb-5" />
              <p className="font-montserrat text-sm text-off-white/50 leading-relaxed mb-8">
                {service.description}
              </p>
              <span className="font-cormorant text-2xl tracking-wide text-gold">
                {service.price}
              </span>
            </div>
          )

          return (
            <>
              <style>{`
                @media (max-width: 639px) {
                  .services-row-1 { grid-template-columns: repeat(1, 1fr) !important; }
                  .services-row-2 { flex-direction: column !important; }
                  .services-row-2 > * { width: 100% !important; }
                }
              `}</style>
              <div className="bg-white/5" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {/* Row 1 */}
                <div
                  className="services-row-1"
                  style={{ display: 'grid', gridTemplateColumns: isFive ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)', gap: '1px' }}
                >
                  {firstRow.map((service, index) => renderCard(service, index))}
                </div>
                {/* Row 2 — centered */}
                {secondRow.length > 0 && (
                  <div className="services-row-2" style={{ display: 'flex', justifyContent: 'center', gap: '1px' }}>
                    {secondRow.map((service, index) =>
                      <div key={index} style={{ width: 'calc(33.333% - 1px)' }}>
                        {renderCard(service, index + firstRow.length)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )
        })()}

        {/* Services note */}
        {config.servicesNote && (
          <p style={{ color: 'rgba(245,240,232,0.6)', maxWidth: '700px', margin: '2.5rem auto 0' }}
            className="font-montserrat text-sm leading-relaxed text-center italic">
            {config.servicesNote}
          </p>
        )}
      </div>
    </section>
  )
}
