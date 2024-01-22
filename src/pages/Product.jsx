//* Info:
//  Add css moduel struktur
//  + Fetch compnesnt for the list of products from the API
//*

import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Img className="card-image-prodct" variant="top" src={data.imageUrl} alt={data.title} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>{`Price: $${data.discountedPrice}`}</Card.Text>
          <Card.Text>{data.rating}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
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
    </>
  );
};

export default Product;
