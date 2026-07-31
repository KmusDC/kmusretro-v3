import { Link, NavLink } from 'react-router-dom'
import { useCartCount } from '../store/cartSelectors'
import favi from '../assets/favi.png'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/videos', label: 'Videos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const itemCount = useCartCount()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={favi} alt="Logo KmusRetro" className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-display text-xl tracking-wide text-white">
            Kmus<span className="text-accent">Retro</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-accent/15 text-accent'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/videos"
            className="hidden rounded-full bg-gradient-to-r from-neon to-accent px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105 sm:inline-flex"
          >
            Ver vídeos
          </Link>
          <Link
            to="/carrito"
            aria-label="Carrito"
            className="relative rounded-lg border border-white/10 p-2 text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-magenta px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}
