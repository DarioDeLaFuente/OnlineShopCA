import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Components/cardImageProdct/Product.module.css';
import global from '../Components/global/Container.module.css';

const Product = ({ data, addToCart }) => {
  const calculateDiscount = () => {
    if (data.discountedPrice && data.price && data.discountedPrice < data.price) {
      const discount = ((data.price - data.discountedPrice) / data.price) * 100;
      return discount.toFixed(2);
    }
    return 0;
  };

  return (
    <Container className={global.container}>
      <Row>
        <Col>
          <Card className={styles.cardBodySingel}>
            <Card.Img className={styles.cardImageProdct} src={data.imageUrl} alt={data.title} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>{`Price: $${data.discountedPrice}`}</Card.Text>

              {data.discountedPrice < data.price && <Card.Text>{`Discount: ${calculateDiscount()}%`}</Card.Text>}

              <Card.Text>{data.rating}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(data)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
          <Card.Footer>
            <h5>Reviews:</h5>
            {data.reviews && data.reviews.length > 0 ? (
              <ul>
                {data.reviews.map((review) => (
                  <li key={review.id}>
                    <strong>{`Rating: ${review.rating}`}</strong>
                    <p>{review.description}</p>
                    <p>{`By: ${review.username}`}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews available.</p>
            )}
          </Card.Footer>
        </Col>
      </Row>
    </Container>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;