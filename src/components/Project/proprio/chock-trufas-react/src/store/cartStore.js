import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create()(
  persist(
    (set) => ({
      cartItems: [],
      setCartItems: (items) => set({ cartItems: items }),
      addCartItem: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
      removeCartItem: (cartItemId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.cartItemId !== cartItemId),
        })),
      clearCartItems: () => set({ cartItems: [] }),
    }),
    { name: 'chock-trufas-cart' }
  )
);
