import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { HttpHandler } from '../http/handler';
import empy from '../public/empy2.jpg';
import CardPremium from './CardPremium.jsx';
import Logo from '../public/vendup.png';

const ComprasComponent = ({ userId }) => {
  const [userValue, setUserValue] = useState({});
  const handler = new HttpHandler();

  useEffect(() => {
    // debugger;
    async function getUser() {
      const { user } = await handler.getUserById(userId);
      setUserValue(user);
      // console.log(user);
    }

    getUser();
  }, []);

  // console.log(userValue);

  return (
    <>
      {!userValue || !userValue.purchases ? (
        <div>Cargando...</div>
      ) : (
        <div className="container">
          <div className="row">
            <h3 className="text-center my-5">
              {userValue.purchases && userValue.purchases.length > 0
                ? 'Estos son tus articulos Comprados'
                : `Bienvenido ${userValue.email}`}
            </h3>
            {userValue.purchases.length === 0 ? (
              <div className="d-flex flex-column align-items-center justify-content-center">
                <a href="/products">
                  <img className="align-self-center mb-3" src={Logo} alt="Mi imagen" />
                </a>
                <h1 className="text-center mb-3">Bienvenido a Vendup</h1>
                <p className="text-center mb-5">
                  En nuestra plataforma puedes comprar y vender una gran variedad de productos entre particulares. Desde
                  ropa y accesorios hasta productos electrónicos y artículos de decoración. Comienza a disfrutar de
                  todas las ventajas de ser parte de nuestra comunidad.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4 shadow">
                      <div className="card-body">
                        <h5 className="card-title text-center mb-4">Tus Compras</h5>
                        <p className="card-text">Aquí aparecerán todos los productos que hayas adquirido.</p>
                      </div>
                    </div>
                    <div className="card mb-4 shadow">
                      <div className="card-body">
                        <h5 className="card-title text-center mb-4">Subir Producto</h5>
                        <p className="card-text">
                          Para empezar a vender, tan solo tienes que ir al apartado "Subir producto" y rellenar el
                          formulario.
                        </p>
                      </div>
                    </div>
                    <div className="card mb-4 shadow">
                      <div className="card-body">
                        <h5 className="card-title text-center mb-4">Editar Perfil</h5>
                        <p className="card-text">En el apartado "Editar Perfil" puedes configurar tus datos.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-4 shadow">
                      <div className="card-body">
                        <h5 className="card-title text-center mb-4">Tus Ventas</h5>
                        <p className="card-text">Aquí podrás ver y controlar los productos que tienes a la venta.</p>
                      </div>
                    </div>
                    <div className="card mb-4 shadow">
                      <div className="card-body">
                        <h5 className="card-title text-center mb-4">Hazte Premium</h5>
                        <p className="card-text">
                          En el apartado "Premium" puedes destacar tu producto y aumentar su tiempo de venta en la
                          plataforma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              userValue.purchases.map((item, index) => (
                <div className="col-sm-4 my-1 mb-5" key={index}>
                  {/* <CardPremium button={'Comprar'} item={item} image={item.images} title={item.name} description={item.description} price={item.price} /> */}

                  <Card>
                    <Card.Header className="text-bg-primary">
                      <h4 className="my-0 fw-normal text-center">Articulo Comprado</h4>
                    </Card.Header>
                    <Card.Img
                      variant="top"
                      src={item.images}
                      style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text
                        style={{
                          height: '150px',
                          maxHeight: '150px',
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </Card.Text>
                      <ListGroup className="list-group-flush">
                        <hr />
                        <ListGroup.Item>Precio: {item.price} €</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Aqui va algo, quizas cuando se compró!</small>
                    </Card.Footer>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ComprasComponent;
