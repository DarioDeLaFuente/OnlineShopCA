import React from 'react';
import Header from '../heade/Header';
import HeroBanner from '../hero/HeroBanner';
import Footer from '../footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <>
      <Header />
      {isHomePage && <HeroBanner />}
      <Container style={{ minHeight: '90vh' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
