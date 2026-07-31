import { Link } from 'react-router-dom'
import type { Game } from '../data/games'
import { useCart } from '../store/cart'
import { priceTag, platformIcons, stars } from './gameUtils'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  const addItem = useCart((state) => state.addItem)
  const discount = game.oldPrice
    ? Math.round((1 - game.price / game.oldPrice) * 100)
    : 0

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20">
      <Link
        to={`/juego/${game.id}`}
        className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${game.gradient}`}
      >
        {game.cover ? (
          <img
            src={game.cover}
            alt={game.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="px-4 text-center font-display text-2xl text-white/90 drop-shadow-lg">
            {game.title}
          </span>
        )}
        {priceTag(game)}
        {game.oldPrice && (
          <span className="absolute right-3 top-3 rounded-md bg-red-600 px-2 py-1 text-[11px] font-extrabold text-white">
            -{discount}%
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            {game.genre}
          </span>
          {stars(game.rating)}
        </div>
        <h3>
          <Link
            to={`/juego/${game.id}`}
            className="font-display text-lg text-white transition-colors hover:text-neon"
          >
            {game.title}
          </Link>
        </h3>
        {platformIcons(game.platforms)}
        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            {game.oldPrice && (
              <p className="text-xs text-zinc-500 line-through">
                {game.oldPrice.toFixed(2)}$
              </p>
            )}
            <p className="font-display text-xl text-neon">{game.price.toFixed(2)}$</p>
          </div>
          <button
            type="button"
            onClick={() => addItem(game)}
            className="rounded-lg bg-gradient-to-r from-neon to-accent px-3 py-2 text-xs font-bold text-black transition-transform hover:scale-105"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}
