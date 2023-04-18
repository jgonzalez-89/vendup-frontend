import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const InfoBlock = ({ title, content, src }) => {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>
        <h1 className="display-5">{title}</h1>
        <p>{content}</p>
        </Col>
      </Row>

    </Container>
  );
};

export default InfoBlock;