import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            <li key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>discountedPrice: {item.discountedPrice}</Card.Text>
                  <Card.Text>price: {item.price}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">product tag: {item.tags}</Card.Subtitle>
                </Card.Body>
              </Card>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
