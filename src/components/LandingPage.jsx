import React from 'react';
import Fade from 'react-reveal/Fade';
import InfoBlock from './pages/InfoBlock.jsx';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LogoVendup from '../public/vendup.png';
import Login from '../components/ModalLogin.jsx';
import Register from '../components/ModalRegister.jsx';
import logo from '../public/vendup.png';
import imgProduct from '../public/product.png';
import HeaderBlock from './pages/HeaderBlock.jsx';
import ProductBlock from './pages/ProductBlock.jsx';
import ItemsBlock from './pages/ItemsBlock.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
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

      <Container className="mt-5 p-3">
        <HeaderBlock
          title="Bienvenido a VENDUP"
          content="¡Bienvenido a nuestro sitio web de compraventa de productos entre particulares! En nuestro sitio, puede encontrar una amplia variedad de productos de segunda mano en excelentes condiciones a precios asequibles. Con nuestro fácil sistema de navegación, puede buscar fácilmente los productos que necesita y ponerse en contacto directamente con el vendedor para realizar la compra. Además, nuestro sitio está creado en React, lo que significa que disfrutará de una experiencia de usuario rápida y eficiente. ¡Explora nuestro sitio hoy y encuentra las mejores ofertas en productos de segunda mano!"
          src={logo}
        />
      </Container>
      <Container className="mt-5 p-3">
        <ProductBlock
          title="Compra y vende fácil y seguro"
          content="Compra y vende fácil y seguro en nuestra plataforma de compraventa entre particulares. Busca y encuentra lo que necesitas, contáctate con el vendedor y acuerda la entrega. Publica tus productos, describe su calidad y espera a que los compradores te contacten. Una opción excelente para comprar o vender productos de segunda mano. Explora nuestro sitio hoy."
          src={imgProduct}
        />
      </Container>

      <Container className="mt-5 p-3">
        <Fade bottom>
          <div id="infoBlock1" className="mt-5">
            <InfoBlock
              title="Productos Premium"
              content="La etiqueta premium es una opción que te permite destacar tus productos en nuestra plataforma, de manera que se muestren en los primeros resultados de búsqueda y aumenten su visibilidad para los clientes potenciales. Al destacar tus productos con esta etiqueta, los clientes los verán primero al realizar una búsqueda en nuestra plataforma, lo que aumentará la posibilidad de que se interesen por ellos y los compren.

              Para destacar tus productos con la etiqueta premium, simplemente debes realizar un pago a través de Stripe, un sistema seguro y confiable de pagos en línea. Una vez que realices el pago, podrás agregar la etiqueta premium a tus productos y verás cómo aumentan su visibilidad en nuestra plataforma.

              No pierdas la oportunidad de destacar tus productos y aumentar tus ventas. ¡Haz que tus productos se destaquen con la etiqueta premium!"
            />
          </div>
          <ItemsBlock />

        </Fade>

      </Container>

      <Footer />
    </>
  );
};

export default LandingPage;
