import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../hero/CartBanner.module.css';
import { Link } from 'react-router-dom';

const CartBanner = () => {
  return (
    <>
      <div className={styles.cartBanner}>
        <Row>
          <Col>
            <h1 className={styles.cartTitle}>Welcome To your Online Shopping Cart</h1>
            <p className={styles.cartDescription}>
              M3 protection: Get full refund if the item is not as described or if is not delivered.
            </p>
            <Link to="/products">
              <Button variant="primary" className={styles.cartButton}>
                continue shopping
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CartBanner;
