import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { useCart } from '../Components/cart/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        const data = await response.json();
        console.log('data', data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const productId = parseInt(id, 25);

  return (
    <>
      <div>{product ? <Product data={product} addToCart={addToCart} id={productId} /> : <p>Loading...</p>}</div>
    </>
  );
};

export default ProductPage;
