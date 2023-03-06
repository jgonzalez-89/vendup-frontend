import React from 'react';
import LogoVendup from '../public/vendup.png';
import { Nav, Container } from 'react-bootstrap';

export const Footer = ({ NavHome, NavUser, NavProducts }) => {
  return (
    <div>
      <Container fluid className="bg-dark text-white">
        <Container>
          <Nav className="me-auto">
            {NavHome && <Nav.Link href={NavHome}>Home</Nav.Link>}
            {NavUser && <Nav.Link href={NavUser}>Usuario</Nav.Link>}
            {NavProducts && <Nav.Link href={NavProducts}>Productos</Nav.Link>}
          </Nav>
        </Container>
      </Container>
      <div className="container-fluid p-3 bg-dark text-bg-dark">
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="col-md-4 mb-0 text-muted">&copy; 2023 Jose, Lola & Quique</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none sticky-bottom p-1">
            <img src={LogoVendup} width="80" role="img" aria-label="Vendup"></img>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/Terms" className="nav-link px-2 text-muted">
                Terms and Conditions
              </a>
            </li>
            <li className="nav-item">
              <a href="/FAQs" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-muted" href="/Team">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;