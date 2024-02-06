import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
  clearCart: () => set({ cart: [] }),
  getTotal: () => set.getState().cart.reduce((total, item) => total + item.price, 0),
}));

export default useCartStore;
