//* Info:
//  Add css moduel struktur
//*

import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {' '}
      <Header />
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />{' '}
    </div>
  );
};

export default Layout;
