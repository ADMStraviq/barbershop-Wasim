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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {config.services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 lg:p-10 group hover:bg-[#141414] transition-colors duration-300"
            >
              {/* Number */}
              <span className="block font-playfair text-5xl font-semibold text-gold/15 group-hover:text-gold/35 transition-colors duration-500 mb-6 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Name */}
              <h3 className="font-playfair text-xl font-semibold text-off-white mb-3">
                {service.name}
              </h3>

              {/* Rule */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Description */}
              <p className="font-montserrat text-sm text-off-white/50 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Price */}
              <span className="font-cormorant text-2xl tracking-wide text-gold">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
