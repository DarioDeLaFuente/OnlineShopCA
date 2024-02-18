import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import CartIcon from '../cartIcon/CartIcon';
import SearchBar from '../searchbar/SearchBar';
import styles from '../nav/Nav.module.css';

const Nave = ({ products }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand onClick={handleHomeClick} className={styles.layoutBrand}>
            The Online Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 w-100" navbarScroll>
              <Link className="p-2 text-decoration-none" to="/products">
                Products
              </Link>
              <Link className="p-2 text-decoration-none" to="/contact">
                Contact
              </Link>
            </Nav>
            <CartIcon />
            <Form className="d-flex">
              <SearchBar products={products} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Nave.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Nave;
