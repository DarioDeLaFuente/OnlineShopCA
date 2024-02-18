import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
  clearCart: () => set({ cart: [] }),
  getTotal: () => {
    const total = set.getState().cart.reduce((total, item) => {
      if (item.discountedPrice) {
        return total + item.discountedPrice;
      } else {
        return total + item.price;
      }
    }, 0);
    return total;
  },
}));

export default useCartStore;
