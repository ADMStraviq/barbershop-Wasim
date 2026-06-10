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
        name: "Tarek",
        rating: 5,
        date: "vor 8 Monaten",
        text: "Absolut empfehlenswert! Wasim ist nicht nur extrem präzise und professionell, sondern sorgt auch dafür, dass man sich sofort wohlfühlt. Jeder Schnitt sitzt perfekt, die Beratung ist top, und das Ergebnis übertrifft jedes Mal meine Erwartungen. Hier merkt man echte Leidenschaft fürs Handwerk – fünf Sterne sind einfach nur gerechtfertigt!"
      },
      {
        name: "Lea Kalke",
        rating: 5,
        date: "vor einem Jahr",
        text: "Sehr empfehlenswert! Auch für mich als Frau eine super Erfahrung. Hier wird jeder herzlich empfangen. Das Personal ist extrem freundlich, die Arbeit schnell und präzise. Wasim weiß genau, was er tut, jeder Schnitt sitzt perfekt. Ich bin sehr zufrieden und überzeugt!"
      },
      {
        name: "Jannis Quaiser",
        rating: 5,
        date: "vor 9 Monaten",
        text: "Bester Barbershop in Chemnitz. Abbas nimmt sich immer Zeit und schneidet die Haare mit Liebe zum Detail. Es gibt Getränke und es wird auf den Service gegenüber den Kunden geachtet. Top Leistung."
      },
      {
        name: "Ferenc Brendel",
        rating: 5,
        date: "vor einem Jahr",
        text: "Dieser Barbershop ist nur zu empfehlen. Ich war jetzt schon öfter hier und war jedes Mal sehr zufrieden mit dem Ergebnis. Es wird sich viel Zeit für die Wünsche genommen und man fühlt sich direkt sehr wohl."
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
