import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../searchbar/SearchBar.module.css';

const SearchBar = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = products ? products.filter((product) => product.title.toLowerCase().includes(query)) : [];

    setSearchResults(filteredResults);
  };

  return (
    <div className={styles.layoutBody}>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.layoutInput}
      />

      {searchResults.length > 0 && (
        <ul
        className={styles.layoutUl}
        >
          {searchResults.map((result) => (
            <li key={result.id} style={{ margin: '5px' }}>
              <Link to={`/product/${result.id}`} 
              className={styles.layoutLink}>
                {result.title} - ${result.price}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchBar;
