import React, { useState, useContext } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import '../style/home.css';
import CardsHome from '../components/CardsHome.jsx';
import Login from '../components/ModalLogin.jsx';
import Register from '../components/ModalRegister.jsx';
import LogoVendup from '../public/vendup.png'
import Footer from '../components/Footer.jsx';


const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ minHeight: '50px', top: '0' }}>
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoVendup} width="100" role="img" aria-label="Vendup" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Login className="me-2" onClose={() => setShowLoginModal(false)} />
            <Register className="me-2" onClose={() => setShowSignupModal(false)} />
          </Nav>
        </Container>
      </Navbar>

      <div className="text-center mt-5 mb-5">
        <div className="container mb-5">

          <CardsHome />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
// jdjdjdjdj