// Titel und Beschreibung je Seite. Die Werte für "/" stehen zusätzlich
// statisch in index.html, damit Link-Vorschauen ohne JavaScript sie finden.
export const SITE_URL = 'https://www.wasim-zino-barbershop.de'

const pages = {
  '/': {
    title: 'Wasim Zino Barbershop – Friseur & Barbier in Chemnitz',
    description:
      'Premium Barbershop in Chemnitz am Rosenhof 1a: Herrenhaarschnitt, Bart, Damen- und Kinderhaarschnitte vom Friseurmeister. Jetzt online Termin buchen.',
  },
  '/termin': {
    title: 'Termin buchen – Wasim Zino Barbershop Chemnitz',
    description:
      'Online-Termin beim Wasim Zino Barbershop in Chemnitz buchen: Haarschnitt, Bart oder Farbe bequem über Planity reservieren.',
  },
  '/impressum': {
    title: 'Impressum – Wasim Zino Barbershop Chemnitz',
    description:
      'Impressum des Wasim Zino Barbershop, Friseursalon und Barbershop am Rosenhof 1a in 09111 Chemnitz.',
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung – Wasim Zino Barbershop Chemnitz',
    description:
      'Datenschutzerklärung des Wasim Zino Barbershop in Chemnitz: Hosting, Google Maps, Online-Terminbuchung über Planity und Ihre Rechte.',
  },
}

export function getPageMeta(pathname) {
  return pages[pathname] || pages['/']
}
