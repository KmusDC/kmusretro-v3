import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false) //useState usado aca

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-white">Contacto</h1>
        <p className="mt-2 text-zinc-400">
          ¿Colaboraciones, dudas o solo quieres saludar? Escríbenos.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-lg text-white">Canal de YouTube</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Todos los vídeos y contenido en{' '}
              <a
                href="https://www.youtube.com/@KmusRetro"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-accent hover:text-neon"
              >
                @KmusRetro
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-lg text-white">Colaboraciones</h2>
            <p className="mt-2 text-sm text-zinc-400">
              ¿Quieres colaborar con el canal? Cuéntanos tu idea y te
              respondemos lo antes posible.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-lg text-white">Redes</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Síguenos y únete a la comunidad retro.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 p-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-neon to-accent text-3xl font-bold text-black">
                ✓
              </span>
              <h2 className="mt-6 font-display text-2xl text-white">
                ¡Mensaje enviado!
              </h2>
              <p className="mt-2 text-zinc-400">
                Gracias por escribirnos. Te responderemos muy pronto.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm font-bold text-white transition-colors hover:border-neon hover:text-neon"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-white">Nombre</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-neon"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-white">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-neon"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-bold text-white">Asunto</span>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="¿Sobre qué nos escribes?"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-neon"
                />
              </label>

              <label className="mt-6 block">
                <span className="text-sm font-bold text-white">Mensaje</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Cuéntanos lo que necesitas..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-neon"
                />
              </label>

              <button
                type="submit"
                className="mt-6 rounded-full bg-gradient-to-r from-neon to-accent px-8 py-3 font-bold text-black transition-transform hover:scale-105"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
