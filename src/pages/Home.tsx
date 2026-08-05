import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import GameCard from '../components/GameCard'
import { games } from '../data/games'

export default function Home() {
  const featured = games.slice(0, 4)
  const classics = games.filter((g) => g.tag === 'CLÁSICO' || g.tag === 'HOT').slice(0, 4)

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-white">Clásicos destacados</h2>
            <p className="mt-2 text-zinc-400">
              Los títulos que definieron generaciones y siguen enamorando hoy.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="text-sm font-bold text-neon hover:text-white"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} />  //id del producto para que no se repita el mismo producto en la lista de destacados
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-r from-brand-900/40 via-accent/10 to-brand-900/40 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <h2 className="font-display text-3xl text-white">
              Nuevos vídeos en el <span className="text-magenta">canal</span>
            </h2>
            <p className="mt-2 text-zinc-300">
              Análisis, gameplay y curiosidades retro en @KmusRetro.
            </p>
          </div>
          <Link
            to="/videos"
            className="rounded-full bg-gradient-to-r from-magenta to-accent px-8 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            Ver vídeos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-white">Imprescindibles</h2>
            <p className="mt-2 text-zinc-400">
              Imprescindibles de la era retro que no pueden faltar en tu colección.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classics.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  )
}
