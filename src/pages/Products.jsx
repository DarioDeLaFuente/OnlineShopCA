//* Info:
//  Add css moduel struktur
// Adjust the number of products per page as needed
// Fetch a specific range of products based on the page number + fikk the productsPerPage fungjen
//*

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/online-shop/?_page=${currentPage}&_limit=${productsPerPage}`,
        );
        const data = await response.json();
        console.log('data', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container className="p-3">
      <h1 className="header">Welcome To</h1>
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
      <div className="pagination">
        <Button
          variant="outline-primary"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous Page
        </Button>
        <span className="page-number">Page {currentPage}</span>
        <Button variant="outline-primary" onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </Button>
      </div>
    </Container>
  );
};

export default Products;
