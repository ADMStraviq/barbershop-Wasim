import config from '../config'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${config.heroImageUrl})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.45em] uppercase font-montserrat text-gold mb-8" style={{ whiteSpace: 'nowrap' }}>
          {config.tagline}
        </p>

        {/* Headline */}
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-off-white mb-6">
          Die Kunst der{' '}
          <em className="italic text-gold">Präzision</em>
        </h1>

        {/* Sub-heading */}
        <p className="font-cormorant text-xl sm:text-2xl text-off-white/65 font-light tracking-wide mb-12 max-w-md mx-auto">
          {config.shopName} &mdash; {config.city}
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-1.5 h-1.5 border border-gold/60 rotate-45" />
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* CTA */}
        {config.bookingEnabled ? (
          <button
            onClick={() => scrollTo('booking')}
            className="bg-gold text-dark font-montserrat font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-off-white transition-colors duration-300"
          >
            Termin buchen
          </button>
        ) : (
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-montserrat font-semibold text-xs tracking-[0.25em] uppercase transition-colors duration-300"
            style={{ background: 'transparent', border: '1px solid #C9A84C', color: '#C9A84C', padding: '12px 28px' }}
          >
            Per WhatsApp buchen
          </a>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.35em] uppercase font-montserrat text-off-white/30">
          Scrollen
        </span>
        <div className="w-px h-10 bg-gold/30" />
      </div>
    </section>
  )
}
