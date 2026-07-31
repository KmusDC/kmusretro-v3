
import favi from '../assets/favi.png'
import yt from '../assets/yt.png'
import tiktok from '../assets/tiktok.png'
import ing from '../assets/ing.png'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={favi} alt="Logo KmusRetro" className="h-8 w-8 rounded-lg object-contain" />
            <span className="font-display text-lg text-white">
              Kmus<span className="text-accent">Retro</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-400">
            La web del canal @KmusRetro. Retrogaming, nostalgia y los mejores
            juegos clásicos de todas las generaciones.
          </p>
        </div>


        <div className="text-right">
          <h4 className="font-display text-sm uppercase tracking-wider text-white">
            Síguenos
          </h4>
          <div className="mt-4 flex justify-end gap-3">
            <a
              href="https://www.youtube.com/@KmusRetro"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-neon"
              aria-label="YouTube"
            >
              <img src={yt} alt="YouTube" className="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://www.tiktok.com/@kmusretro"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-neon"
              aria-label="TikTok"
            >
              <img src={tiktok} alt="TikTok" className="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://www.instagram.com/kmusretro/"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-neon"
              aria-label="Instagram"
            >
              <img src={ing} alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} KmusRetro. Todos los derechos reservados.
      </div>
    </footer>
  )
}
