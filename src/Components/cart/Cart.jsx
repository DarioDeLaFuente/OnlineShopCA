import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../cart/Cart.module.css';

const Cart = ({ cart }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={styles.cartCard}>
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
      </Col>
    </Row>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
