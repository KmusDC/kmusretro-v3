import { useState } from 'react'
import GameCard from '../components/GameCard'
import { games } from '../data/games'

export default function Catalog() {
  const genres = ['Todos', ...Array.from(new Set(games.map((g) => g.genre)))]
  const [genre, setGenre] = useState('Todos')
  const [query, setQuery] = useState('')

  const filtered = games.filter((g) => {
    const matchesGenre = genre === 'Todos' || g.genre === genre
    const matchesQuery = g.title.toLowerCase().includes(query.toLowerCase())
    return matchesGenre && matchesQuery
  })

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-white">Catálogo</h1>
        <p className="mt-2 text-zinc-400">
          {filtered.length} productos disponibles
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar juegos..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-neon sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {genres.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGenre(g)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                genre === g
                  ? 'bg-gradient-to-r from-neon to-accent text-black'
                  : 'border border-white/10 text-zinc-300 hover:border-neon/50 hover:text-white'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-zinc-500">
          No hay juegos que coincidan con tu búsqueda.
        </p>
      )}
    </main>
  )
}
