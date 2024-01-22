//* Info:
//  Add css moduel struktur
//  + Funsjon Search + CartIcon + NavDropdown
//*

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from '../cartIcon/CartIcon';

const Nave = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">The Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link className="p-2" to="/products">
                Products
              </Link>
              <Link className="p-2" to="/contact">
                Contact
              </Link>
            </Nav>
            <CartIcon />
            <Form className="d-flex">
              <NavDropdown className="p-2" title="Filter" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">DiscountedPrice</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Rating</NavDropdown.Item>
              </NavDropdown>
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nave;
