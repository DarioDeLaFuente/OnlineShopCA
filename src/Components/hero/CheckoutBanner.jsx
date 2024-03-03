import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../hero/CheckoutBanner.module.css';

const CheckoutBanner = () => {
  return (
    <>
      <div className={styles.checkoutBanner}>
        <Row>
          <Col>
            <h1 className={styles.checkoutTitle}>Your order was successful!</h1>
            <p className={styles.checkoutDescription}>Thanks for shopping with us and hope to see you again</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CheckoutBanner;
