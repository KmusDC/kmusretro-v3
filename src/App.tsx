import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Videos from './pages/Videos'
import Contact from './pages/Contact'
import GameDetail from './pages/GameDetail'
import Cart from './pages/Cart'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col text-zinc-200">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/juego/:id" element={<GameDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
