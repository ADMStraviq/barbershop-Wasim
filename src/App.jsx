import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Termin from './pages/Termin'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
    <CookieBanner />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <Hero />
              <Services />
              <Gallery />
              <Reviews />
              <Booking />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/impressum"
        element={
          <>
            <Navbar />
            <main><Impressum /></main>
            <Footer />
          </>
        }
      />
      <Route
        path="/datenschutz"
        element={
          <>
            <Navbar />
            <main><Datenschutz /></main>
            <Footer />
          </>
        }
      />
      <Route
        path="/termin"
        element={
          <>
            <Navbar />
            <main><Termin /></main>
            <Footer />
          </>
        }
      />
    </Routes>
    </>
  )
}
