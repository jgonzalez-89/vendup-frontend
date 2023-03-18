import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ProductBlock = ({ title, content, src }) => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        {/* <Col xs={12} md={6} className="col-12 col-md-6 order-md-1">
          <img className="mt-5 p-3 img-fluid" src={src} alt="imagen..."/>
        </Col> */}
        <Col xs={12} md={6} className="order-md-2">
          <Fade right>
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
              <h1 className="display-5">{title}</h1>
              <p>{content}</p>
            </div>
          </Fade>
        </Col>
        <Col xs={12} md={6} className="col-12 col-md-6 order-md-1">
          <img className="mt-5 p-3 img-fluid" src={src} alt="imagen..."/>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductBlock;
