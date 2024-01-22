//* Info:
//  Add css moduel struktur
//  + Fetch compnesnt for the list of products from the API
//*

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Hero from '../Components/header/Header';
import HeroBanner from '../Components/hero/HeroBanner';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop/');
        const data = await response.json();
        console.log('data', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="p-3">
      <HeroBanner />
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src={product.imageUrl} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.discountedPrice} discountedPrice</Card.Text>
              <Card.Text>{product.price} price</Card.Text>
              <Card.Text>{product.rating} Rating</Card.Text>
              <Link to={`/product/${product.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Home;
