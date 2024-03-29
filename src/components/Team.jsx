import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import LogoVendup from '../public/vendup.png';

// import Navbar from './Navbar.jsx';
import '../style/team.css';
import jose from '../public/Jose.png';
import quique from '../public/quique.jpg';
import lola from '../public/Lola.png';
import Header from './Navbar.jsx';
import PlataformBlock from './pages/PlataformBlock.jsx';

const Team = () => (
  <>
    <Navbar bg="dark" variant="dark" style={{ minHeight: '50px', top: '0' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={LogoVendup} width="100" role="img" aria-label="Vendup" />
        </Navbar.Brand>
      </Container>
    </Navbar>

    <div className="cuerpopagina row gx-5">
      <div className="col-lg-4">
        <div className="container d-flex align-items-center justify-content-center flex-wrap">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={jose} alt="" />
              </div>
              <div className="content d-flex flex-column justify-content-center">
                <div className="center">
                  <h3 className="text-white fs-5">Jose L. Gonzalez Diaz</h3>
                  <p className="fs-6 text-white">FullStack Developer</p>
                  <p>
                    <a className="btn btn-dark" href="https://www.linkedin.com/in/jgonzalez89/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a className="btn btn-dark " href="https://github.com/jgonzalez-89">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="container d-flex align-items-center justify-content-center flex-wrap">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={quique} alt="" />
              </div>
              <div className="content d-flex flex-column justify-content-center">
                <div className="center">
                  <h3 className="text-white fs-5">Enrique Ares Lorenzo</h3>
                  <p className="fs-6 text-white">Frontend Developed</p>
                  <p>
                    <a className="btn btn-dark" href="https://www.linkedin.com/in/j-enrique-ar%C3%A9s-lorenzo-6a636a148/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a className="btn btn-dark " href="https://github.com/INVIiICTUS">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="container d-flex align-items-center justify-content-center flex-wrap">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={lola} alt="" />
              </div>
              <div className="content d-flex flex-column justify-content-center">
                <div className="center">
                  <h3 className="text-white fs-5">Lola Petrement Sanchez</h3>
                  <p className="fs-6 text-white">Frontend Developed</p>
                  <p>
                    <a className="btn btn-dark" href="https://www.linkedin.com/in/lola-petrement/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a className="btn btn-dark " href="https://github.com/Petrement">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="mt-5 p-3">
        <PlataformBlock
          title="Tecnologías modernas en nuestra plataforma"
          content="Nuestra plataforma es una aplicación web desarrollada utilizando una combinación de tecnologías modernas. Utilizamos Bootstrap como framework front-end para crear una interfaz de usuario responsive y adaptable. Cloudinary es nuestra solución de almacenamiento y entrega de imágenes que nos permite administrar y optimizar las imágenes de manera eficiente. JWT es nuestro método preferido de autenticación y autorización, lo que nos permite crear una experiencia de usuario personalizada y segura. Python es el lenguaje de programación que utilizamos para la parte backend de la plataforma, lo que nos permite construir una API REST robusta y escalable. React es nuestra librería de front-end preferida, que nos permite crear componentes reutilizables y una interfaz de usuario dinámica. Stripe es nuestra solución de pago preferida, que nos permite procesar pagos de manera segura y eficiente. Por último, utilizamos Vite como nuestro bundler de desarrollo para compilar y optimizar nuestro código. En resumen, nuestra plataforma utiliza tecnologías modernas y poderosas para ofrecer una experiencia de usuario rápida, segura y escalable."
        />
      </Container>
    </div>
  </>
);
export default Team;
