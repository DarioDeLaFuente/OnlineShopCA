import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/cart/CartContext';
import Cart from '../Components/cart/Cart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartBanner from '../Components/hero/CartBanner';

const CheckoutPage = () => {
  const { cart } = useCart();
  //console.log('Cart data:', cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const totaldiscountedPrice = cart.reduce((acc, item) => acc + item.discountedPrice, 0);

  return (
    <Row className="m-5">
      <Col xs={12}>
        <CartBanner></CartBanner>
      </Col>
      <Col xs={12} md={6} lg={6}>
        <Cart cart={cart} />
      </Col>
      <Col xs={12} md={6} lg={6}>
        <div>
          <h2>Checkout</h2>
          <strong>Price Total: ${total.toFixed(2)}</strong>
        </div>
        <div>
          <strong>Total Discounted Price: ${totaldiscountedPrice.toFixed(2)}</strong>
        </div>
        <Link to="/checkout-success">
          <Button variant="success">Checkout</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default CheckoutPage;
