import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <>
      <div className={styles.heroBanner}>
        <Row>
          <Col>
            <h1 className={styles.heroTitle}>Welcome To Our Online Shop</h1>
            <p className={styles.heroDescription}>
              Explore our wide range of products. Find the best deals on the latest items and make your purchase today.
            </p>
            <p>
              <Button variant="primary" className={styles.heroButton}>
                Shop Now
              </Button>
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeroBanner;
