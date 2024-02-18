import React from 'react';
import styles from './CartIcon.module.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../cart/CartContext';

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to="/checkout" className={styles.carticon}>
      <FaShoppingCart />
      {cart.length > 0 && <span className={styles.badge}>{cart.length}</span>}
    </Link>
  );
};

export default CartIcon;
