import config from '../config'

export default function Booking() {
  if (!config.bookingEnabled) return null

  return (
    <section id="booking" className="bg-dark-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Ihren Platz sichern
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Termin buchen
          </h2>
        </div>

        {/* Embedded calendar */}
        <div className="border border-white/5 overflow-hidden">
          <iframe
            src={config.bookingUrl}
            title="Booking Calendar"
            className="w-full h-[700px] lg:h-[800px]"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
