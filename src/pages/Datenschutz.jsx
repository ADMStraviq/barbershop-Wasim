export default function Datenschutz() {
  return (
    <section className="min-h-screen bg-dark py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white mb-3">
          Datenschutzerklärung
        </h1>
        <p className="text-xs tracking-[0.35em] uppercase font-montserrat text-gold mb-16">
          Stand: August 2026
        </p>

        <div className="font-montserrat text-off-white/70 text-sm lg:text-base leading-relaxed space-y-14">
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Wasim Zino, Rosenhof 1a, 09111 Chemnitz, Deutschland
              <br />
              Telefon: 0371 69577966
              <br />
              E-Mail: kontakt@wasim-zino-barbershop.de
            </p>
          </Section>

          <Section title="2. Allgemeine Hinweise zur Datenverarbeitung">
            <p>
              Diese Website erhebt und verarbeitet personenbezogene Daten nur im technisch
              notwendigen Umfang sowie auf Grundlage Ihrer ausdrücklichen Einwilligung.
              Personenbezogene Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben,
              sofern keine gesetzliche Verpflichtung dazu besteht.
            </p>
            <SubTitle>Rechtsgrundlagen der Verarbeitung</SubTitle>
            <p>
              Soweit wir für die Verarbeitung personenbezogener Daten eine Einwilligung einholen,
              dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur
              Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen ist Art. 6 Abs. 1 lit. b
              DSGVO die Rechtsgrundlage. Soweit eine Verarbeitung zur Wahrung berechtigter
              Interessen erforderlich ist, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </Section>

          <Section title="3. Hosting (Vercel)">
            <p>
              Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA.
            </p>
            <p>
              Beim Aufruf der Website erfasst Vercel automatisch technische Daten in sogenannten
              Server-Logfiles:
            </p>
            <List
              items={[
                'IP-Adresse des aufrufenden Geräts',
                'Datum und Uhrzeit des Zugriffs',
                'Browsertyp und Browserversion',
                'Verwendetes Betriebssystem',
                'Referrer URL',
              ]}
            />
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem technisch fehlerfreien Betrieb der Website). Die Datenübertragung
              in die USA erfolgt auf Grundlage des EU-US Data Privacy Frameworks, dem Vercel
              beigetreten ist.
            </p>
            <p>
              Weitere Informationen:{' '}
              <Link href="https://vercel.com/legal/privacy-policy">
                https://vercel.com/legal/privacy-policy
              </Link>
            </p>
            <p>
              Speicherdauer: Die Server-Logfiles werden durch den Hosting-Anbieter verwaltet und
              gelöscht, sobald sie für die Gewährleistung eines sicheren und stabilen Betriebs nicht
              mehr erforderlich sind.
            </p>
            <p>
              Mit dem Hosting-Anbieter Vercel besteht eine Vereinbarung zur Auftragsverarbeitung
              (Data Processing Agreement) gemäß den Anforderungen des Art. 28 DSGVO.
            </p>
          </Section>

          <Section title="4. Cookies und Einwilligungsverwaltung">
            <p>
              Diese Website verwendet einen Cookie-Banner zur Verwaltung Ihrer Einwilligungen.
              Beim ersten Aufruf der Website werden Sie um Ihre Einwilligung zur Nutzung
              einwilligungspflichtiger Dienste gebeten (insbesondere Google Maps). Solange Sie
              keine Einwilligung erteilt haben, werden diese Dienste nicht geladen. Ihre
              Einwilligungsentscheidung wird lokal in Ihrem Browser gespeichert (LocalStorage).
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), § 25 Abs. 1 TDDDG.</p>
            <p>
              Widerruf: Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen. Nutzen Sie hierzu den Link &bdquo;Cookie-Einstellungen&ldquo; am Ende
              dieser Seite (im Footer). Dort können Sie Ihre Einwilligung zurücknehmen; der
              Cookie-Banner wird anschließend erneut angezeigt.
            </p>
          </Section>

          <Section title="5. Google Maps">
            <p>
              Diese Website nutzt nach Einholung Ihrer Einwilligung den Kartendienst Google Maps.
              Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Bei der Nutzung von Google Maps werden personenbezogene Daten (insbesondere Ihre
              IP-Adresse, ggf. Standortdaten) an Server von Google übertragen. Diese Server können
              sich auch in den USA befinden. Auf diese Datenübermittlung haben wir keinen Einfluss.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
            <p>
              Datenübermittlung in Drittländer: Die Übermittlung in die USA erfolgt auf Grundlage
              des EU-US Data Privacy Frameworks, dem Google beigetreten ist.
            </p>
            <p>
              Weitere Informationen:{' '}
              <Link href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </Link>
            </p>
          </Section>

          <Section title="6. Online-Terminbuchung (Planity)">
            <p>
              Diese Website bietet eine Online-Terminbuchung über den Dienst Planity. Anbieter ist
              Planity, 12 rue de la Chaussée d'Antin, 75009 Paris, Frankreich.
            </p>
            <p>
              Bei Nutzung der Online-Terminbuchung werden folgende Daten an Planity übermittelt:
            </p>
            <List
              items={[
                'Name und Nachname',
                'E-Mail-Adresse',
                'Telefonnummer',
                'Gewünschte Dienstleistung',
                'Wunschtermin',
              ]}
            />
            <p>
              Diese Daten werden von Planity zur Verwaltung Ihres Termins verarbeitet und
              gespeichert. Mit Planity besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche
              Maßnahmen).
            </p>
            <p>
              Speicherdauer: Die Daten werden so lange gespeichert, wie es für die Terminverwaltung
              erforderlich ist und gesetzliche Aufbewahrungsfristen bestehen.
            </p>
            <p>
              Datenschutzerklärung von Planity:{' '}
              <Link href="https://www.planity.com/de/datenschutzerklarung">
                https://www.planity.com/de/datenschutzerklarung
              </Link>
            </p>
          </Section>

          <Section title="7. Kontaktaufnahme">
            <SubTitle>E-Mail-Kontakt</SubTitle>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse,
              Inhalt der Nachricht) zur Bearbeitung der Anfrage gespeichert.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>
              Speicherdauer: Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung
              nicht mehr erforderlich sind, spätestens jedoch nach Ablauf gesetzlicher
              Aufbewahrungsfristen.
            </p>

            <SubTitle>WhatsApp</SubTitle>
            <p>
              Auf dieser Website befindet sich ein Link zum Messaging-Dienst WhatsApp. Anbieter ist
              WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p>
              Wenn Sie auf den WhatsApp-Link klicken, verlassen Sie unsere Website und werden zu
              WhatsApp weitergeleitet. Erst durch diesen Klick erlangt WhatsApp Kenntnis Ihrer
              IP-Adresse und ggf. weiterer Daten. Auf diese Datenverarbeitung haben wir keinen
              Einfluss.
            </p>
            <p>
              Rechtsgrundlage für die Bereitstellung des Links ist unser berechtigtes Interesse an
              einer einfachen und unkomplizierten Kontaktaufnahme (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Weitere Informationen:{' '}
              <Link href="https://www.whatsapp.com/legal/privacy-policy-eea">
                https://www.whatsapp.com/legal/privacy-policy-eea
              </Link>
            </p>

            <SubTitle>Telefonkontakt</SubTitle>
            <p>
              Wenn Sie uns telefonisch kontaktieren, werden Ihre Angaben zur Bearbeitung der
              Anfrage verarbeitet und ggf. notiert.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO bzw. lit. f DSGVO.</p>
          </Section>

          <Section title="8. Ihre Rechte als betroffene Person">
            <p>
              Sie haben jederzeit folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <List
              items={[
                'Recht auf Auskunft (Art. 15 DSGVO)',
                'Recht auf Berichtigung (Art. 16 DSGVO)',
                'Recht auf Löschung (Art. 17 DSGVO)',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                'Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)',
                'Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
              ]}
            />
            <p>
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an den oben genannten
              Verantwortlichen.
            </p>

            <SubTitle>Beschwerderecht bei der Aufsichtsbehörde</SubTitle>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständige
              Aufsichtsbehörde:
            </p>
            <p>
              Sächsischer Datenschutzbeauftragter, Devrientstraße 5, 01067 Dresden
              <br />
              Telefon: 0351 85471-101
              <br />
              E-Mail: saechsdsb@slt.sachsen.de
            </p>
          </Section>

          <Section title="9. SSL-/TLS-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Sie erkennen
              eine verschlüsselte Verbindung an der &bdquo;https://&ldquo;-Adresszeile Ihres
              Browsers und am Schloss-Symbol.
            </p>
          </Section>

          <Section title="10. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
              umzusetzen.
            </p>
          </Section>
        </div>
      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-off-white mb-5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function SubTitle({ children }) {
  return (
    <h3 className="text-xs tracking-[0.35em] uppercase text-gold pt-3">{children}</h3>
  )
}

function List({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1 marker:text-gold">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors break-words"
    >
      {children}
    </a>
  )
}
