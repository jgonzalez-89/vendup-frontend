import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../../public/pages/Bootstrap.png';
import image2 from '../../public/pages/Cloudinary.png';
import image3 from '../../public/pages/jwt.png';
import image4 from '../../public/pages/Python.png';
import image5 from '../../public/pages/React.png';
import image6 from '../../public/pages/Stripe.png';
import image7 from '../../public/pages/Vite.png';

const PlataformBlock = ({ title, content }) => {
  const [showImages, setShowImages] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    { src: image1, alt: 'texto alternativo 1' },
    { src: image2, alt: 'texto alternativo 2' },
    { src: image3, alt: 'texto alternativo 3' },
    { src: image4, alt: 'texto alternativo 4' },
    { src: image5, alt: 'texto alternativo 5' },
    { src: image6, alt: 'texto alternativo 6' },
    { src: image7, alt: 'texto alternativo 7' },
  ];

  useEffect(() => {
    setShowImages(true);
    const interval = setInterval(() => {
      if (imageIndex < images.length - 1) {
        setImageIndex(imageIndex + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [imageIndex, images.length]);

  return (
    <Container className='mt-5 text-center'>
      <Row>
        <Col>
          <h1 className="display-5">{title}</h1>
          <p>{content}</p>
        </Col>
      </Row>
      {showImages && (
        <Row>
          <Col md={12} className="text-center">
            {images.slice(0, imageIndex + 1).map((image, index) => (
              <Fade bottom key={index}>
                <img className="mt-5 p-3 img-fluid" src={image.src} alt={image.alt} />
              </Fade>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PlataformBlock;