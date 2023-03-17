import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InfoBlock = ({ title, content, src }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={src} alt="imagen..." />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoBlock;
