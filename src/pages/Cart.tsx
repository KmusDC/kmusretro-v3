import { Link } from 'react-router-dom'
import { useCart } from '../store/cart'
import { useCartTotal } from '../store/cartSelectors'
import { orderCartItems } from '../utils/whatsapp'

export default function Cart() {
  const { items, updateQuantity, removeItem, clear } = useCart()
  const total = useCartTotal()

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-white">Tu carrito está vacío</h1>
        <p className="mt-4 text-zinc-400">
          Aún no has añadido ningún juego. ¡Échale un ojo al catálogo!
        </p>
        <Link
          to="/catalogo"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-neon to-accent px-8 py-3 font-bold text-black transition-transform hover:scale-105"
        >
          Ir al catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-4xl text-white">Tu carrito</h1>
        <button
          type="button"
          onClick={clear}
          className="text-sm font-bold text-zinc-400 transition-colors hover:text-red-400"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <ul className="space-y-4 lg:col-span-2">
          {items.map(({ game, quantity }) => (
            <li
              key={game.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center"
            >
              <Link
                to={`/juego/${game.id}`}
                className={`relative flex h-20 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${game.gradient}`}
              >
                {game.cover ? (
                  <img
                    src={game.cover}
                    alt={game.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <span className="px-2 text-center font-display text-xs text-white drop-shadow">
                    {game.title}
                  </span>
                )}
              </Link>

              <div className="flex-1">
                <Link
                  to={`/juego/${game.id}`}
                  className="font-display text-lg text-white hover:text-neon"
                >
                  {game.title}
                </Link>
                <p className="text-sm text-zinc-400">{game.genre}</p>
                <div className="mt-1 flex items-center gap-2">
                  {game.oldPrice && (
                    <span className="text-xs text-zinc-500 line-through">
                      {game.oldPrice.toFixed(2)}$
                    </span>
                  )}
                  <span className="font-display text-neon">
                    {game.price.toFixed(2)}$
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateQuantity(game.id, quantity - 1)}
                  aria-label="Reducir cantidad"
                  className="h-9 w-9 rounded-lg border border-white/10 text-white transition-colors hover:border-neon hover:text-neon"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(game.id, quantity + 1)}
                  aria-label="Aumentar cantidad"
                  className="h-9 w-9 rounded-lg border border-white/10 text-white transition-colors hover:border-neon hover:text-neon"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(game.id)}
                  aria-label="Eliminar del carrito"
                  className="ml-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-red-400 hover:text-red-400"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6 lg:sticky lg:top-24">
          <h2 className="font-display text-xl text-white">Resumen</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-zinc-400">Juegos</dt>
              <dd className="font-bold text-white">{items.length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-zinc-400">Envío</dt>
              <dd className="font-bold text-neon">Gratis</dd>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-3">
              <dt className="font-bold text-white">Total</dt>
              <dd className="font-display text-2xl text-neon">
                {total.toFixed(2)}$
              </dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => orderCartItems(items)}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-[#25D366] to-emerald-600 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            Ordenar vía WhatsApp
          </button>
          <Link
            to="/catalogo"
            className="mt-3 block w-full rounded-full border border-white/20 py-3 text-center font-bold text-white transition-colors hover:border-neon hover:text-neon"
          >
            Seguir comprando
          </Link>
        </aside>
      </div>
    </main>
  )
}
