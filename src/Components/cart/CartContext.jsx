import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useCartStore from '../../Components/cartStore';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const cartStore = useCartStore();
  const { cart, addToCart, removeFromCart, clearCart, getTotal } = cartStore;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
