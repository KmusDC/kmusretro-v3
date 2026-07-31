import { useCart } from '../store/cart'

export function useCartCount() {
  return useCart((state) => state.items.reduce((sum, item) => sum + item.quantity, 0))
}

export function useCartTotal() {
  return useCart((state) =>
    state.items.reduce((sum, item) => sum + item.quantity * item.game.price, 0),
  )
}
