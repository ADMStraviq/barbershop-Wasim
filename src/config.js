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
  serviceCategories: [
    {
      category: "Herren",
      items: [
        { name: "Herrenhaarschnitt (Meister)", price: "€ 35" },
        { name: "Herrenhaarschnitt (Mitarbeiter)", price: "€ 30" },
        { name: "Bart (Meister)", price: "€ 30" },
        { name: "Bart (Mitarbeiter)", price: "€ 25" },
        { name: "Kombi-Paket (Schnitt + Bart + Waxing)", price: "€ 50" },
      ],
    },
    {
      category: "Damen",
      items: [
        { name: "Kurzhaar", price: "€ 45–50" },
        { name: "Mittellang", price: "€ 55–60" },
        { name: "Langhaar", price: "€ 65" },
        { name: "Ansatzfarbe", price: "€ 45–55" },
        { name: "Globalfarbe (komplett)", price: "€ 60–75" },
        { name: "Tönung / Graureduzierung", price: "€ 25–35" },
        { name: "Permanente Farbe", price: "€ 45–60" },
        { name: "Blondierung Ansatz", price: "€ 55–85" },
        { name: "Blondierung komplett", price: "€ 80–150" },
        { name: "Strähnen Oberkopf", price: "€ 35–60" },
        { name: "Strähnen ganzer Kopf", price: "€ 70–120" },
        { name: "Dauerwelle", price: "€ 50–70" },
      ],
    },
    {
      category: "Kinder",
      items: [
        { name: "Haarschnitt bis 12 Jahre", price: "€ 25" },
      ],
    },
    {
      category: "Kosmetik",
      items: [
        { name: "Augenbrauen zupfen", price: "€ 10" },
        { name: "Gesichtswachs", price: "€ 10" },
      ],
    },
  ],
  servicesNote: "Alle Preise können je nach Haarlänge, Haarmenge und Aufwand variieren.",
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
  bookingEnabled: false,
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
