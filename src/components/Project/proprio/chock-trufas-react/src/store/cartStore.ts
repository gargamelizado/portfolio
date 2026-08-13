import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  cartItemId: string;
  productId: string;
};

type CartStore = {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (cartItemId: string) => void;
  clearCartItems: () => void;
};

export const useCartStore = create<CartStore>()(
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
