import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Components/cardImageProdct/Product.module.css';
import button from '../Components/button/Button.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop/');
        const data = await response.json();
        //console.log('data', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const calculateDiscount = (product) => {
    if (product.discountedPrice && product.price) {
      const discount = ((product.price - product.discountedPrice) / product.price) * 100;
      return discount;
    }
    return null;
  };

  return (
    <>
      <Row>
        {products.slice(0, 8).map((product) => (
          <Col className="mb-2" key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card key={product.id} className={styles.cardBody}>
              <Card.Img className={styles.cardImage} variant="top" src={product.imageUrl} alt={product.title} />
              <Card.Body>
                <Card.Title className={styles.cardTexBoxs}>{product.title}</Card.Title>
                <Card.Text className={styles.cardTexBoxs}>{product.description}</Card.Text>
              </Card.Body>
              {product.discountedPrice ? (
                <>
                  {product.price !== product.discountedPrice ? (
                    <Card.Body>
                      <Card.Text className={styles.cardTexBoxs}>{`Price: $${product.price}`}</Card.Text>
                      <Card.Text
                        className={styles.cardTexBoxs}
                      >{`Discounted Price: $${product.discountedPrice}`}</Card.Text>
                      <Card.Text
                        className={styles.cardTexBoxs}
                      >{`Discount: ${calculateDiscount(product).toFixed(2)}%`}</Card.Text>
                    </Card.Body>
                  ) : (
                    <Card.Body>
                      <Card.Text className={styles.cardTexBoxs}>{`Price: $${product.discountedPrice}`}</Card.Text>
                    </Card.Body>
                  )}
                </>
              ) : (
                <Card.Body>
                  <Card.Text className={styles.cardTexBoxs}>{`Price: $${product.price}`}</Card.Text>
                </Card.Body>
              )}
              <Card.Body>
                <Card.Text className={styles.cardTexBoxs}>{`${product.rating} Rating`}</Card.Text>
              </Card.Body>
              <div className={styles.viewDetailsButton}>
                <Link to={`/product/${product.id}`}>
                  <Button data-testid="view-details-button" variant="primary">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
        <div className={button.seeMoreButton} style={{ marginBottom: '80px' }}>
          <Link to="/products">
            <Button variant="primary">See More</Button>
          </Link>
        </div>
      </Row>
    </>
  );
};

export default Home;
