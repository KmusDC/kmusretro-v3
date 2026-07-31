import rayman2 from '../assets/rayman2.webp'
import nc2 from '../assets/nc2.webp'
import granTurismo1 from '../assets/gran-turismo-1.webp'
import finalFantasy9 from '../assets/final-fantasy-9.webp'
import shenmue from '../assets/shenmue.webp'
import sonic from '../assets/sonic.webp'
import soulReaver from '../assets/soul-reaver.webp'
import tekken3 from '../assets/tekken3.webp'

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
    title: 'Rayman 2',
    genre: 'Plataformas 3D',
    year: 1999,
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.8,
    platforms: ['N64', 'PS1', 'DREAMCAST', 'PC'],
    tag: 'HOT',
    gradient: 'from-lime-500 via-emerald-600 to-teal-800',
    cover: rayman2,
    description:
      'Rayman 2: The Great Escape lleva al héroe de UbiSoft a las tres dimensiones. Perseguido por los piratas del almirante Razorbeard, Rayman recorre mundos exuberantes llenos de niveles y secretos para reunir los lums y liberar a sus amigos. Un plataformas 3D que se convirtió en referencia absoluta de su generación.',
  },
  {
    id: 2,
    title: 'Nightmare Creatures II',
    genre: 'Acción / Survival Horror',
    year: 2000,
    price: 34.99,
    rating: 4.3,
    platforms: ['PS1', 'DREAMCAST'],
    tag: 'CLÁSICO',
    gradient: 'from-stone-700 via-zinc-900 to-black',
    cover: nc2,
    description:
      'Nightmare Creatures II nos lleva al Londres victoriano de 1930 para combatir criaturas surgidas de pesadillas ancestrales. Con magia y combate cuerpo a cuerpo en escenarios góticos y claustrofóbicos, la secuela del clásico de Kalisto mezcla acción frenética y un tono de terror que marcó a toda una generación.',
  },
  {
    id: 3,
    title: 'Gran Turismo',
    genre: 'Simulación / Carreras',
    year: 1997,
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.8,
    platforms: ['PS1'],
    tag: 'CLÁSICO',
    gradient: 'from-slate-600 via-zinc-800 to-black',
    cover: granTurismo1,
    description:
      'Gran Turismo cambió para siempre las carreras en el videojuego. Con más de 140 coches reales, físicas sofisticadas y el legendario modo de licencias, ajusta tu vehículo y conviértete en el mejor piloto. Un hito de 1997 que demostró el potencial de PlayStation.',
  },
  {
    id: 4,
    title: 'Final Fantasy IX',
    genre: 'RPG',
    year: 2000,
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.9,
    platforms: ['PS1'],
    tag: 'CLÁSICO',
    gradient: 'from-blue-700 via-indigo-800 to-slate-900',
    cover: finalFantasy9,
    description:
      'El último gran RPG de la era PlayStation, una carta de amor al estilo clásico de la saga. Fantasía medieval, cristales y una historia sobre identidad y vida con Zidane, Garnet y el inolvidable Vivi. Un broche de oro que cautivó al mundo en el año 2000.',
  },
  {
    id: 5,
    title: 'Shenmue',
    genre: 'Aventura / Mundo abierto',
    year: 1999,
    price: 49.99,
    rating: 4.7,
    platforms: ['DREAMCAST', 'PC'],
    tag: 'CLÁSICO',
    gradient: 'from-sky-600 via-blue-800 to-slate-900',
    cover: shenmue,
    description:
      'Shenmue es la obra que sentó las bases del mundo abierto. Yu Suzuki recreó en Dreamcast el Japón de los años 80, donde cada personaje tiene su rutina y Ryo Hazuki investiga el asesinato de su padre en una aventura cinemática que marcó a una generación.',
  },
  {
    id: 6,
    title: 'Sonic Adventure',
    genre: 'Plataformas 3D',
    year: 1999,
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.5,
    platforms: ['DREAMCAST', 'PC'],
    tag: 'HOT',
    gradient: 'from-sky-400 via-cyan-600 to-blue-800',
    cover: sonic,
    description:
      'Sonic se estrena en tres dimensiones en Dreamcast. Seis historias jugables, niveles vertiginosos llenos de velocidad y la caza de Chaos demuestran de lo que era capaz la consola de SEGA en 1999. Un clásico ineludible del erizo más rápido.',
  },
  {
    id: 7,
    title: 'Legacy of Kain: Soul Reaver',
    genre: 'Acción / Aventura',
    year: 1999,
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.6,
    platforms: ['PS1', 'DREAMCAST', 'PC'],
    tag: 'OFERTA',
    gradient: 'from-red-900 via-stone-800 to-black',
    cover: soulReaver,
    description:
      'Encarna al espectro Raziel en su venganza contra Kain en el gótico reino de Nosgoth. Alterna entre el mundo material y el espectral para resolver puzles, con una ambientación sombría y unos diálogos magistrales que lo convirtieron en un título influyente de 1999.',
  },
  {
    id: 8,
    title: 'Tekken 3',
    genre: 'Lucha',
    year: 1997,
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.8,
    platforms: ['ARCADE', 'PS1'],
    tag: 'HOT',
    gradient: 'from-red-700 via-rose-900 to-black',
    cover: tekken3,
    description:
      'Considerado por muchos el mejor juego de lucha de su generación. Jugabilidad refinadísima, gráficos de otra era y una selección de luchadores carismática con nuevos personajes como Jin Kazama o Eddy Gordo. Dominó los salones recreativos y PlayStation en 1997.',
  },
]
