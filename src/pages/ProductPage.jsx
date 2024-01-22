//* Info:
//  Add css moduel struktur
//  + Fetch compnesnt for the list of products from the API
//*

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductPage = () => {
  const { id } = useParams();
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

  return <>{product ? <Product data={product} /> : <p>Loading...</p>}</>;
};

export default ProductPage;
