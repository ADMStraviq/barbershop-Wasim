import { Link } from 'react-router-dom'
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
      {/* Background image — mobile below 768px, desktop at 768px and above */}
      <style>{`
        .hero-bg { background-image: url(${config.heroImageUrlMobile}); }
        @media (min-width: 768px) {
          .hero-bg { background-image: url(${config.heroImageUrl}); }
        }
      `}</style>
      <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/65" />

      {/* Content */}
      {/* Shifted down via transform, not margin: the section is flex-centered, so
          margin on a child grows the box and gets re-centered away (half the value). */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto translate-y-[31px] md:translate-y-[78px]">
        <div>
          {/* Headline */}
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-off-white mb-6">
            Die Kunst der{' '}
            <em className="italic text-gold">Präzision</em>
          </h1>

          {/* Sub-heading */}
          <p className="font-cormorant text-xl sm:text-2xl text-off-white/65 font-light tracking-wide mb-12 max-w-md mx-auto">
            {config.shopName} &mdash; {config.city}
          </p>
        </div>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-1.5 h-1.5 border border-gold/60 rotate-45" />
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* CTA */}
        <Link
          to="/termin"
          className="inline-block font-montserrat font-semibold text-[13.2px] tracking-[0.25em] uppercase transition-colors duration-300"
          style={{ background: '#C9A84C', color: '#0A0A0A', padding: '13.2px 30.8px' }}
        >
          Termin buchen
        </Link>
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
