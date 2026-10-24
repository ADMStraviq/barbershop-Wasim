import config from '../config'

function GalleryImage({ img, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default function Gallery() {
  const imgs = config.galleryImages

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Unsere Arbeit
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Galerie
          </h2>
        </div>

        {/* Uniform 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {imgs.map((img) => (
            <GalleryImage key={img.url} img={img} className="h-[200px] sm:h-[300px]" />
          ))}
        </div>
      </div>
    </section>
  )
}
