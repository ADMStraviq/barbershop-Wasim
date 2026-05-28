const config = {
  shopName: "Wasim Zino Barbershop",
  tagline: "Premium Barbershop · Chemnitz",
  phone: "+49 176 43655325",
  whatsappNumber: "4917643655325",
  address: "Rosenhof 1a",
  city: "Chemnitz",
  zipCode: "09111",
  heroImageUrl:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=85",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Rosenhof+1a,+09111+Chemnitz&t=&z=15&ie=UTF8&iwloc=&output=embed",
  openingHours: [
    { day: "Montag – Samstag", hours: "10:00 – 20:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  services: [
    {
      name: "Classic Cut",
      price: "€ 35",
      description:
        "Traditioneller Herrenhaarschnitt inkl. Waschen, Schneiden & Stylen nach Wunsch.",
    },
    {
      name: "Beard Shaping",
      price: "€ 25",
      description:
        "Präzise Bartpflege mit heißem Tuch, Rasiermesser-Kontur & Bartwachs-Finish.",
    },
    {
      name: "Cut & Shave",
      price: "€ 55",
      description:
        "Komplettpaket: Haarschnitt, klassische Nassrasur & Gesichtspflege inklusive.",
    },
    {
      name: "Kids Cut",
      price: "€ 22",
      description:
        "Haarschnitt für Kinder bis 12 Jahre in entspannter, kinderfreundlicher Atmosphäre.",
    },
  ],
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
  bookingUrl: "https://cal.com/barbershop/appointment",

  primaryColor: "#C9A84C",
}

export default config
