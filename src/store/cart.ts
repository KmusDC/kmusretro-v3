import { create } from 'zustand'
import type { Game } from '../data/games'

export interface CartItem {
  game: Game
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (game: Game) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clear: () => void
}

export const useCart = create<CartState>((set) => ({
  items: [],

  addItem: (game) =>
    set((state) => {
      const existing = state.items.find((item) => item.game.id === game.id)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.game.id === game.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }
      return { items: [...state.items, { game, quantity: 1 }] }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.game.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((item) => item.game.id !== id)
          : state.items.map((item) =>
              item.game.id === id ? { ...item, quantity } : item,
            ),
    })),

  clear: () => set({ items: [] }),
}))
