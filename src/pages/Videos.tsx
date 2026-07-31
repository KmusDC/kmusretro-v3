import { useEffect, useState } from 'react'
import { getLatestVideos, type Video } from '../services/youtube'

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [selected, setSelected] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    getLatestVideos(12)
      .then((data) => {
        if (cancelled) return
        setVideos(data)
        setSelected(data[0] ?? null)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Error al cargar los vídeos')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-clip px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-white">Videos</h1>
        <p className="mt-2 text-zinc-400">
          Los últimos vídeos del canal{' '}
          <a
            href="https://www.youtube.com/@KmusRetro"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-accent hover:text-neon"
          >
            @KmusRetro
          </a>{' '}
          en YouTube.
        </p>
      </div>

      {loading && (
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 text-red-300">
          <p className="font-bold">No se pudieron cargar los vídeos.</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && selected && (
        <section className="mb-12 w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="aspect-video w-full max-w-full">
            <iframe
              className="block h-full w-full max-w-full border-0"
              src={`https://www.youtube.com/embed/${selected.id}`}
              title={selected.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              {formatDate(selected.publishedAt)}
            </p>
            <h2 className="mt-2 font-display text-2xl text-white">
              {selected.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
              {selected.description || 'Sin descripción disponible.'}
            </p>
            <a
              href={selected.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-accent px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Ver en YouTube
            </a>
          </div>
        </section>
      )}

      {!loading && !error && videos.length > 0 && (
        <section>
          <h2 className="mb-6 font-display text-2xl text-white">Últimos vídeos</h2>
          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setSelected(video)}
                className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 pl-1 text-white shadow-lg">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 font-display text-lg text-white">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    {formatDate(video.publishedAt)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {!loading && !error && videos.length === 0 && (
        <p className="py-20 text-center text-zinc-500">
          Aún no hay vídeos publicados en el canal.
        </p>
      )}
    </main>
  )
}
