import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HeroBanner from '../hero/HeroBanner';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../main/Layout.module.css';

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <div className={styles.layoutBody}>
      {' '}
      <Header />
      {isHomePage && <HeroBanner />}
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
