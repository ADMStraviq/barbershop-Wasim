import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <main>
              <Hero />
              <Services />
              <Gallery />
              <Booking />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  )
}
