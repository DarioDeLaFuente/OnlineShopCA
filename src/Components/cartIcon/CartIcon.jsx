//* Info:
//  Add link to cart + funsjon to the cartItemCount
//*

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ cartItemCount }) => {
  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart />
      {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
    </Link>
  );
};

export default CartIcon;
