import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Components/cardImageProdct/Product.module.css';
import global from '../Components/global/Container.module.css';
import button from '../Components/button/Button.module.css';

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

  const calculateDiscount = (product) => {
    if (product.discountedPrice && product.price) {
      const discount = ((product.price - product.discountedPrice) / product.price) * 100;
      return discount;
    }
    return null;
  };

  return (
    <>
      <div className={global.container}>
        <div className={styles.productList}>
          {products.slice(0, 8).map((product) => (
            <Card key={product.id} className={styles.cardBody}>
              <Card.Img className={styles.cardImage} variant="top" src={product.imageUrl} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                {product.discountedPrice ? (
                  <>
                    {product.price !== product.discountedPrice ? (
                      <>
                        <Card.Text>{`Price: $${product.price}`}</Card.Text>
                        <Card.Text>{`Discounted Price: $${product.discountedPrice}`}</Card.Text>
                        <Card.Text>{`Discount: ${calculateDiscount(product).toFixed(2)}%`}</Card.Text>
                      </>
                    ) : (
                      <Card.Text>{`Price: $${product.discountedPrice}`}</Card.Text>
                    )}
                  </>
                ) : (
                  <Card.Text>{`Price: $${product.price}`}</Card.Text>
                )}
                <Card.Text>{`${product.rating} Rating`}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className={button.seeMoreButton}>
          <Link to="/products">
            <Button variant="primary">See More</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
