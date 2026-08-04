import type { Game } from '../data/games'
import type { CartItem } from '../store/cart'

const WHATSAPP_PHONE = '584246073526'

function openWhatsApp(text: string) {
  window.open(
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`,
    '_blank',
  )
}

function productLine(game: Game) {
  return `${game.title} - ${game.price.toFixed(2)}$`
}

export function orderSingleProduct(game: Game) {
  openWhatsApp(`Hola, quiero información sobre este producto: ${productLine(game)}`)
}

export function orderCartItems(items: CartItem[]) {
  const lines = items.map(
    (item) =>
      `- ${productLine(item.game)}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`,
  )
  openWhatsApp(`Hola, quiero información sobre estos productos:\n${lines.join('\n')}`)
}
