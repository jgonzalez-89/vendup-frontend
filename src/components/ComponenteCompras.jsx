import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { HttpHandler } from '../http/handler';
import empy from '../public/empy2.jpg';
import CardPremium from './CardPremium.jsx';

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

  // console.log(userValue)

  return (
    <>
      {!userValue || !userValue.purchases ? (
        <div>Cargando...</div>
      ) : (
        <div className="container">
          <div className="row">
            <h1 className="text-center my-5">{userValue.purchases && userValue.purchases.length > 0 ? 'Estos son tus articulos Comprados' : 'Aun no has comprado nada ...'}</h1>
            {userValue.purchases.length === 0 ? (
              <div className="d-flex justify-content-center">
                <a href="/products">
                  <img width={400} height={286} className="align-self-center mr-3" src={empy} alt="Mi imagen" style={{ borderRadius: '10%', boxShadow: '1px 2px 9px' }} />
                </a>
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
