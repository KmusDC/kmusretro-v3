import everdriveSnes from '../assets/everdeive-snes.webp'
import summerCart64 from '../assets/summer-cart-64.webp'
import everdriveGbc from '../assets/everdrive-gameboy.webp'
import everdriveNes from '../assets/everdrive-nes.webp'
import gdemu from '../assets/gdemu.webp'
import mx4sio from '../assets/mx4sio.webp'
import picostation from '../assets/picostation-ps1.webp'
import gc2sd from '../assets/gc2sd.webp'

export interface Game {
  id: number
  title: string
  genre: string
  year: number
  price: number
  oldPrice?: number
  rating: number
  platforms: string[]
  tag?: 'CLÁSICO' | 'OFERTA' | 'HOT' | 'PREVENTA'
  gradient: string
  cover?: string
  description: string
}

export const games: Game[] = [
  {
    id: 1,
    title: 'Everdrive SNES',
    genre: 'Flashcart',
    year: 2019,
    price: 69.99,
    rating: 4.6,
    platforms: ['SNES'],
    tag: 'HOT',
    gradient: 'from-slate-600 via-zinc-800 to-black',
    cover: everdriveSnes,
    description:
      'El Everdrive SNES es una flashcart que transforma tu Super Nintendo en una consola capaz de cargar cientos de ROMs desde una tarjeta SD. Ofrece guardado de partidas en memoria flash y soporte para traducciones, hacks y homebrew sin modificar la consola. Una compra única que evita el desgaste de los cartuchos originales y amplía al máximo la biblioteca de tu SNES.',
  },
  {
    id: 2,
    title: 'Summer Cart 64',
    genre: 'Flashcart',
    year: 2023,
    price: 69.99,
    rating: 4.9,
    platforms: ['N64'],
    tag: 'HOT',
    gradient: 'from-blue-800 via-indigo-900 to-black',
    cover: summerCart64,
    description:
      'El Summer Cart 64 es una flashcart de código abierto para Nintendo 64 que carga tus ROMs directamente desde una tarjeta SD. Compatible con la práctica totalidad de la biblioteca del sistema, permite guardar partidas y ejecutar homebrew sin necesidad de modificar la consola. Una forma sencilla y fiable de redescubrir todo el catálogo del N64 en su hardware original.',
  },
  {
    id: 3,
    title: 'Everdrive de Game Boy Color',
    genre: 'Flashcart',
    year: 2020,
    price: 59.99,
    oldPrice: 69.99,
    rating: 4.7,
    platforms: ['GBC'],
    tag: 'OFERTA',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-800',
    cover: everdriveGbc,
    description:
      'El Everdrive para Game Boy Color convierte tu portátil en una biblioteca completa. Carga ROMs de Game Boy y Game Boy Color desde una microSD, con guardado de partidas y soporte de homebrew, sin modificar la consola. El accesorio definitivo para disfrutar de todo el catálogo de la familia Game Boy en su hardware original.',
  },
  {
    id: 4,
    title: 'Everdrive de NES',
    genre: 'Flashcart',
    year: 2013,
    price: 59.99,
    oldPrice: 69.99,
    rating: 4.9,
    platforms: ['NES'],
    tag: 'OFERTA',
    gradient: 'from-slate-500 via-zinc-800 to-black',
    cover: everdriveNes,
    description:
      'El Everdrive para NES convierte tu consola de 8 bits en una máquina capaz de cargar toda la biblioteca desde una tarjeta SD. Compatible con la mayoría de los juegos, incluidas las cartucheras con mappers especiales, permite guardar partidas y ejecutar homebrew sin modificar el hardware. La forma más cómoda de revivir los clásicos de Nintendo sin depender de cartuchos desgastados.',
  },
  {
    id: 5,
    title: 'GDemu para Dreamcast',
    genre: 'Adaptador',
    year: 2018,
    price: 69.99,
    oldPrice: 79.99,
    rating: 4.7,
    platforms: ['DREAMCAST'],
    tag: 'HOT',
    gradient: 'from-orange-500 via-red-600 to-slate-900',
    cover: gdemu,
    description:
      'El GDemu es un adaptador que reemplaza la lectora de GD-ROM de tu Dreamcast para cargar todos los juegos desde una tarjeta SD. Con instalación sencilla y compatibilidad con la práctica totalidad del catálogo, ofrece tiempos de carga más rápidos y elimina las piezas móviles que se desgastan. La mejora definitiva para que tu Dreamcast siga viva.',
  },
  {
    id: 6,
    title: 'MX4SIO para PS2',
    genre: 'Adaptador',
    year: 2021,
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.5,
    platforms: ['PS2'],
    tag: 'OFERTA',
    gradient: 'from-blue-600 via-indigo-800 to-black',
    cover: mx4sio,
    description:
      'El MX4SIO convierte el puerto de memory card de tu PS2 en un lector de tarjetas SD, permitiéndote cargar juegos con Open PS2 Loader sin modificar la consola ni usar discos. Barato, fiable y compatible con la mayoría de la biblioteca de PlayStation 2. La solución más económica para jugar a tus clásicos desde una simple tarjeta SD.',
  },
  {
    id: 7,
    title: 'Mod PicoStation para PS1',
    genre: 'Servicio de modding',
    year: 2023,
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.8,
    platforms: ['PS1'],
    tag: 'HOT',
    gradient: 'from-stone-500 via-zinc-700 to-slate-900',
    cover: picostation,
    description:
      '¿Quieres jugar a toda tu biblioteca de PS1 sin discos? Te ofrecemos el mod PicoStation: un servicio completo en el que modeamos tu consola PlayStation para que cargue juegos desde una tarjeta microSD, con instalación, cableado y pruebas incluidas. Solo tienes que enviarnos tu consola y te la devolvemos lista para jugar.',
  },
  {
    id: 8,
    title: 'GC2SD para GameCube',
    genre: 'Adaptador',
    year: 2020,
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.6,
    platforms: ['GAMECUBE'],
    tag: 'OFERTA',
    gradient: 'from-purple-600 via-violet-800 to-black',
    cover: gc2sd,
    description:
      'El GC2SD es un adaptador que se inserta en la ranura de memory card de tu GameCube para cargar juegos desde una tarjeta SD a través de Swiss. Una mejora mínima del hardware que abre las puertas a toda la biblioteca de la consola, incluidos homebrew y utilidades, sin necesidad de modificar la consola. El accesorio perfecto para exprimir tu GameCube.',
  },
]
