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

  social: {
    instagram: "https://instagram.com/wasimzino_barbershop",
    facebook: "https://facebook.com/wasimzinobarbershop",
    tiktok: "https://tiktok.com/@wasimzinobarbershop",
  },

  primaryColor: "#C9A84C",
}

export default config
