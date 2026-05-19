export default function Impressum() {
  return (
    <section className="min-h-screen bg-dark py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white mb-16">
          Impressum
        </h1>

        <div className="space-y-12">
          <Block label="Angaben gemäß § 5 TMG">
            <p>[Name des Inhabers oder der Firma]</p>
          </Block>

          <Block label="Name / Firma">
            <p>[Vollständiger Name oder Firmenname]</p>
          </Block>

          <Block label="Adresse">
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ Ort]</p>
            <p>[Land]</p>
          </Block>

          <Block label="Kontakt">
            <p>Telefon: [+49 XXX XXXXXXXX]</p>
            <p>E-Mail: [kontakt@example.com]</p>
          </Block>

          <Block label="Umsatzsteuer-ID">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
            <p>[DE XXXXXXXXX]</p>
          </Block>

          <Block label="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>[Name der verantwortlichen Person]</p>
            <p>[Adresse wie oben]</p>
          </Block>
        </div>
      </div>
    </section>
  )
}

function Block({ label, children }) {
  return (
    <div>
      <p className="text-xs tracking-[0.35em] uppercase font-montserrat text-gold mb-3">
        {label}
      </p>
      <div className="font-cormorant text-lg text-off-white/70 space-y-1 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
