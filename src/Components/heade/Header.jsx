import React from 'react';
import { useState, useEffect } from 'react';
import Nav from '../nav/Nav';

const Header = () => {
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

  return (
    <header>
      <Nav products={products} />
    </header>
  );
};

export default Header;
