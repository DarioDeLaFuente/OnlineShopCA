import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ padding: '5px', marginRight: '5px' }}
      />

      {searchResults.length > 0 && (
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
          }}
        >
          {searchResults.map((result) => (
            <li key={result.id} style={{ margin: '5px' }}>
              <Link to={`/product/${result.id}`} style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}>
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
