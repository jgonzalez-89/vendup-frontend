import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const HeaderBlock = ({ title, content, src }) => {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col xs={12} md={6} className="col-12 col-md-6 order-md-1">
          <Fade left>
            <h1 className="display-4">{title}</h1>
            <p>{content}</p>
          </Fade>
        </Col>
        <Col xs={12} md={6} className="order-md-2">
          <img className="mt-5 p-3 img-fluid" src={src} alt="imagen..."  />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBlock;