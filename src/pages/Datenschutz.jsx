export default function Datenschutz() {
  return (
    <section className="min-h-screen bg-dark py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white mb-16">
          Datenschutzerklärung
        </h1>

        <div className="space-y-12">
          <Block label="Verantwortlicher">
            <p>Wasim Zino</p>
            <p>Rosenhof 1a, 09111 Chemnitz</p>
            <p>E-Mail: kontakt@wasim-zino-barbershop.de</p>
          </Block>

          <Block label="Datenerfassung">
            <p>
              Diese Website erhebt und verarbeitet personenbezogene Daten nur im technisch
              notwendigen Umfang. Es werden keine Daten ohne Ihre ausdrückliche Einwilligung
              an Dritte weitergegeben.
            </p>
          </Block>

          <Block label="Google Maps">
            <p>
              Diese Website verwendet Google Maps zur Darstellung von Karteninformationen.
              Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
              Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in
              der Datenschutzerklärung von Google: [https://policies.google.com/privacy]
            </p>
          </Block>

          <Block label="WhatsApp">
            <p>
              Auf dieser Website wird ein Link zum WhatsApp-Dienst der WhatsApp Ireland Limited
              angeboten. Wenn Sie den Link anklicken, werden Sie zu WhatsApp weitergeleitet.
              Dabei können Daten an WhatsApp übertragen werden.
            </p>
          </Block>

          <Block label="Hosting (Vercel)">
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
              CA 94104, USA gehostet. Vercel kann beim Aufruf dieser Website technische Daten
              (z. B. IP-Adresse, Browsertyp) erfassen.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:
              [https://vercel.com/legal/privacy-policy]
            </p>
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
      <div className="font-cormorant text-lg text-off-white/70 space-y-3 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
