import { Link, useParams } from 'react-router-dom'
import { games } from '../data/games'
import { useCart } from '../store/cart'
import { platformIcons, stars } from '../components/gameUtils'

export default function GameDetail() {
  const { id } = useParams()
  const addItem = useCart((state) => state.addItem)
  const game = games.find((g) => g.id === Number(id))

  if (!game) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-white">Juego no encontrado</h1>
        <p className="mt-4 text-zinc-400">El juego que buscas no existe o ya no está disponible.</p>
        <Link
          to="/catalogo"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-neon to-accent px-8 py-3 font-bold text-black"
        >
          Volver al catálogo
        </Link>
      </main>
    )
  }

  const related = games.filter((g) => g.genre === game.genre && g.id !== game.id).slice(0, 3)

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${game.gradient}`}
        >
          {game.cover ? (
            <img
              src={game.cover}
              alt={game.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <span className="px-6 text-center font-display text-4xl text-white drop-shadow-xl">
              {game.title}
            </span>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            {game.genre}
          </span>
          <h1 className="mt-2 font-display text-4xl text-white sm:text-5xl">
            {game.title}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            {stars(game.rating)}
            {platformIcons(game.platforms)}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {game.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div>
              {game.oldPrice && (
                <p className="text-lg text-zinc-500 line-through">
                  {game.oldPrice.toFixed(2)}€
                </p>
              )}
              <p className="font-display text-4xl text-neon">
                {game.price.toFixed(2)}€
              </p>
            </div>
            <button
              type="button"
              onClick={() => addItem(game)}
              className="rounded-full bg-gradient-to-r from-neon to-accent px-8 py-3 text-base font-bold text-black transition-transform hover:scale-105"
            >
              Añadir al carrito
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 px-8 py-3 text-base font-bold text-white transition-colors hover:border-neon hover:text-neon"
            >
              Comprar ahora
            </button>
          </div>

          {game.tag === 'PREVENTA' && (
            <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-accent">
              Preventa disponible: recibe bonus exclusivos al lanzamiento.
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl text-white">
            Juegos similares
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((g) => (
              <Link
                key={g.id}
                to={`/juego/${g.id}`}
                className={`flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br ${g.gradient} transition-transform hover:scale-[1.02]`}
              >
                <span className="px-4 text-center font-display text-xl text-white drop-shadow-lg">
                  {g.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
