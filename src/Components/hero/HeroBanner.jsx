//* Info:
//  Add css moduel struktur
//  + Make the css container to ackt like the jubotron fungjon in botstarap (Canves)
//*

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeroBanner = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="">Welcome To Our Online Shop</h1>
          <p>
            Explore our wide range of products. Find the best deals on the latest items and make your purchase today.
          </p>
          <p>
            <Button variant="primary">Shop Now</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBanner;
