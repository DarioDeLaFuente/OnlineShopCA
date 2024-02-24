import React from 'react';
import { useEffect } from 'react';
import { useCart } from '../Components/cart/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Row>
      <Col xs={12}>
        <Card className="m-5">
          <Card.Header>Checkout Success</Card.Header>
          <Card.Body>
            <Card.Title>Your order was successful!</Card.Title>
            <Card.Text>Go back to the store.</Card.Text>
            <Button variant="primary" href="/">
              Store
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CheckoutSuccessPage;
