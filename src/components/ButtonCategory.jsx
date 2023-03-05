import React from 'react';
import { Button } from 'react-bootstrap';
import '../style/index.css';

const ButtonCategory = (props) => {
  return <Button className="botoneshome bg-black">{props.text}</Button>;
};

export default ButtonCategory;
