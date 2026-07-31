import type { Game } from '../data/games'

export function priceTag(game: Game) {
  return game.tag ? (
    <span className="absolute left-3 top-3 rounded-md bg-magenta px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-magenta/40">
      {game.tag}
    </span>
  ) : null
}

export function platformIcons(platforms: string[]) {
  return (
    <div className="flex items-center gap-2">
      {platforms.map((p) => (
        <span
          key={p}
          title={p}
          className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] font-bold text-zinc-300"
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export function stars(rating: number) {
  const full = Math.round(rating)
  return (
    <span className="flex items-center gap-1 text-amber-400" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? 'fill-current' : 'fill-zinc-700'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-zinc-400">{rating.toFixed(1)}</span>
    </span>
  )
}
