const config = {
  shopName: "Wasim Zino Barbershop",
  tagline: "Premium Barbershop · Chemnitz",
  phone: "+49 176 43655325",
  whatsappNumber: "4917643655325",
  address: "Rosenhof 1a",
  city: "Chemnitz",
  zipCode: "09111",
  heroImageUrl: "/images/hero.jpg",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Rosenhof+1a,+09111+Chemnitz&t=&z=15&ie=UTF8&iwloc=&output=embed",
  openingHours: [
    { day: "Montag – Samstag", hours: "10:00 – 20:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  services: [
    {
      name: "Haarschnitt (Meister)",
      price: "€ 35",
      description: "Professioneller Haarschnitt beim Friseurmeister.",
    },
    {
      name: "Bart (Meister)",
      price: "€ 30",
      description: "Präzises Bart-Styling und -pflege beim Friseurmeister.",
    },
    {
      name: "Haarschnitt (Mitarbeiter)",
      price: "€ 20 – 25",
      description: "Klassischer Haarschnitt durch unser erfahrenes Team.",
    },
    {
      name: "Bart (Mitarbeiter)",
      price: "€ 15",
      description: "Bart formen und pflegen durch unser Team.",
    },
    {
      name: "Kombi-Paket",
      price: "€ 35",
      description: "Haarschnitt, Bart und Waxing – das komplette Paket beim Mitarbeiter.",
    },
  ],
  servicesNote:
    "Wir bieten außerdem Farbe, Dauerwelle, Blondierungen, Strähnchen – alles, was mit Haaren zu tun hat. Wir können alles umsetzen, was dein Haar braucht. Zusätzlich haben wir hochwertige Produkte zum Verkauf – ideal für den Alltag oder besondere Looks. Außerdem arbeiten wir mit Fadentechniken, um Augenbrauen zu formen und Gesichtshaare zu entfernen. Wir bieten alles, was dein Haar perfekt macht!",
  reviews: {
    rating: 5.0,
    count: 419,
    platform: "Google",
    items: [
      {
        name: "Markus K.",
        rating: 5,
        date: "vor 2 Wochen",
        text: "Absolut top! Wasim ist ein echter Profi. Bin seit Jahren Stammkunde und werde nie woanders hingehen. Das Ergebnis ist jedes Mal perfekt."
      },
      {
        name: "Tobias L.",
        rating: 5,
        date: "vor 1 Monat",
        text: "Endlich ein Barbershop in Chemnitz, der wirklich Qualität liefert. Beratung war super, der Schnitt noch besser. Sehr empfehlenswert!"
      },
      {
        name: "Felix W.",
        rating: 5,
        date: "vor 3 Wochen",
        text: "Das beste Barbershop-Erlebnis in der ganzen Region. Tolle Atmosphäre, professionelles Team, faire Preise. Immer wieder gerne!"
      },
      {
        name: "Jonas S.",
        rating: 5,
        date: "vor 5 Tagen",
        text: "Zum ersten Mal da und direkt begeistert. Wasim nimmt sich wirklich Zeit für eine persönliche Beratung. So soll Barbershop sein."
      }
    ]
  },
  galleryImages: [
    { url: "/images/IMG_8483.jpg", alt: "Wasim Zino Barbershop" },
    { url: "/images/IMG_8484.jpg", alt: "Wasim Zino Barbershop" },
    { url: "/images/IMG_8485.jpg", alt: "Wasim Zino Barbershop" },
    { url: "/images/IMG_8486.jpg", alt: "Wasim Zino Barbershop" },
    { url: "/images/IMG_8487.jpg", alt: "Wasim Zino Barbershop" },
    { url: "/images/IMG_8488.jpg", alt: "Wasim Zino Barbershop" },
  ],

  // bookingEnabled: false  →  Template A (WhatsApp CTA, no booking section)
  // bookingEnabled: true   →  Template B (booking button + embedded calendar)
  bookingEnabled: true,
  bookingUrl: "https://cal.com/wasim-zino/termin",

  email: "kontakt@wasim-zino-barbershop.de",

  social: {
    instagram: "https://www.instagram.com/barbershopwasimzino/",
    facebook: "https://www.facebook.com/people/Wasim-Zino-Barbershop/100063526483738/",
    tiktok: "https://www.tiktok.com/@wz0102?_t=ZN-90lTUYbuY58&_r=1",
  },

  primaryColor: "#C9A84C",
}

export default config
