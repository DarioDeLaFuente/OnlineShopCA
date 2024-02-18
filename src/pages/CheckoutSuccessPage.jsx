import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Components/cart/Cart';
import { useCart } from '../Components/cart/CartContext';

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h2>Checkout Success</h2>
      <p>Your order was successful!</p>
      <Cart cart={[]} />
      <Link to="/">Go back to the store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
