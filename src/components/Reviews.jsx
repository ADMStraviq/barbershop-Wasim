import config from '../config'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#C9A84C]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid rgba(201,168,76,0.2)',
        padding: '1.5rem',
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 font-montserrat font-semibold text-sm text-dark"
          style={{ backgroundColor: '#C9A84C' }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-montserrat font-semibold text-off-white text-sm leading-tight">{review.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{review.date}</p>
        </div>
      </div>
      <Stars count={review.rating} />
      <p
        className="text-off-white text-sm leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
      >
        "{review.text}"
      </p>
    </div>
  )
}

export default function Reviews() {
  const { rating, count, platform, items } = config.reviews

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            WAS KUNDEN SAGEN
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Google Bewertungen
          </h2>
        </div>

        {/* Overall rating */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <p className="font-playfair text-6xl lg:text-7xl font-semibold text-off-white leading-none">
            {rating.toFixed(1).replace('.', ',')}
          </p>
          <Stars count={5} />
          <p className="text-xs tracking-[0.25em] uppercase font-montserrat text-gray-400 mt-1">
            {count} Bewertungen · {platform}
          </p>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
