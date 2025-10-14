import { useState, useCallback, memo, useMemo } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = memo(() => {
  const formInitialDetails = useMemo(() => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }), []);
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = useCallback((category, value) => {
      setFormDetails(prev => ({
        ...prev,
        [category]: value
      }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("https://darlingcv.dev/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensaje enviado exitosamente'});
    } else {
      setStatus({ success: false, message: 'Algo salió mal, inténtalo de nuevo más tarde.'});
    }

    // Automatically dismiss the alert after 5 seconds
    setTimeout(() => {
      console.log("Attempting to clear status message.");
      setStatus({});
    }, 5000);
  }, [formDetails, formInitialDetails]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contáctame</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Correo Electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
                      <button style={{borderRadius: '18px'}} type="submit"><span>{buttonText}</span></button>
                      {
                        status.message &&
                        <Alert className="contact-notification-alert">{status.message}</Alert>
                      }
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
