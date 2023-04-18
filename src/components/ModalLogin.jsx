import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Row, Col, Container } from 'react-bootstrap';
import { HttpHandler } from '../http/handler';
import Cookies from 'js-cookie';
import '../style/modals.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotpassModal, setShowForgotpassModal] = useState(false);

  const handler = new HttpHandler();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const token = sessionStorage.getItem("token");

  const handleLogin = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    const response = await handler.login(email, password);
    // console.log(response);
  
    if (response.access_token) {
      setShow(false);
      Cookies.set('access_token', response.access_token);
      navigate('/user');
    } else {
      if (response.status === 401 && response.message === "Inactive user") {
        setErrorMessage('Tu cuenta no está activa. Por favor, verifica tu correo electrónico para activar tu cuenta.');
      } else {
        setErrorMessage('Email o contraseña incorrectos');
      }
    }
  };

  const handleCloseView = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="warning" className="m-2" onClick={handleShow}>
        Entrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido de nuevo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 p-1">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Label className="pt-2">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
          {errorMessage !== '' && <p className="alert alert-danger text-center">{errorMessage}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning w-50" onClick={handleLogin}>
            Entrar
          </Button>
          <Button variant="secondary" onClick={handleCloseView}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
