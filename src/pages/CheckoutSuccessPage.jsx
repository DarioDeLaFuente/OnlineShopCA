import React from 'react';
import { useEffect } from 'react';
import { useCart } from '../Components/cart/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CheckoutBanner from '../Components/hero/CheckoutBanner';

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Row>
      <Col className="mt-5" xs={12}>
        <CheckoutBanner></CheckoutBanner>
        <Card className="m-5">
          <Card.Header>Order #464643434631616 Confirmed!.</Card.Header>
          <Card.Body>
            <Card.Text>Checkout Succes.</Card.Text>
            <Card.Text>
              Thank you for your payment we are pleased to say that your order was received successfully.
            </Card.Text>
            <Card.Text>
              Your transaction has been completed and weve emailed you a receipt for your purchase. If you made your
              purchase via PayPal, please log in to your PayPal account to view transaction details..
            </Card.Text>
            <Card.Text>If you’d like access to more specialised products, check out our Store!</Card.Text>
            <Button variant="primary" href="/">
              Visit the store
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CheckoutSuccessPage;
