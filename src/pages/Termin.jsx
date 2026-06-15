import { useEffect } from 'react'

const POLYFILL_SRC = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js'
const APP_SRC     = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js'

export default function Termin() {
  useEffect(() => {
    const container = document.getElementById('planity-container')
    window.planity = {
      key: '-N5fShj6sQjzCv38VtpB',
      primaryColor: '#C9A84C',
      options: { countryCode: 'DE' },
      container,
      accountContainer: container,
      appointmentContainer: container,
      giftVoucherContainer: container,
      onlineShopContainer: container,
    }

    const polyfill = document.createElement('script')
    polyfill.src = POLYFILL_SRC
    polyfill.async = true

    const app = document.createElement('script')
    app.src = APP_SRC
    app.async = true

    // Load app only after polyfills are ready
    polyfill.onload = () => document.body.appendChild(app)
    document.body.appendChild(polyfill)

    return () => {
      if (document.body.contains(polyfill)) document.body.removeChild(polyfill)
      if (document.body.contains(app))     document.body.removeChild(app)
      delete window.planity
    }
  }, [])

  return (
    <section className="min-h-screen bg-dark pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Online Terminbuchung
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Termin buchen
          </h1>
        </div>

        {/* Planity widget */}
        <div
          id="planity-container"
          className="min-h-[600px] w-full"
        />
      </div>
    </section>
  )
}
