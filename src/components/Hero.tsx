import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
          <span className="h-2 w-2 animate-ping rounded-full bg-magenta" />
          Retrogaming y nostalgia
        </span>

        <h1 className="mt-8 font-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
          VUELVE LA EDAD
          <br />
          <span className="bg-gradient-to-r from-neon via-red-500 to-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            DE ORO DE LOS VIDEOJUEGOS
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Clásicos de todas las generaciones, análisis, curiosidades y el mejor
          contenido retro. Bienvenido a KmusRetro, tu rincón de nostalgia gamer.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/videos"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-accent px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105"
          >
            Ver últimos vídeos
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:border-neon hover:text-neon"
          >
            Catálogo retro
          </Link>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: '8-bit', label: 'Cultura retro' },
            { value: '50+', label: 'Vídeos en el canal' },
            { value: '4.9★', label: 'Valoración de la comunidad' },
            { value: '∞', label: 'Nostalgia garantizada' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <p className="font-display text-2xl text-neon">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
