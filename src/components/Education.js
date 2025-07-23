import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { PDFModal } from "./PDFModal";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from '../assets/img/uasd.svg';
import projectImg1 from '../assets/img/oracle.svg';
import projectImg2 from '../assets/img/Google_career.webp';
import projectImg3 from '../assets/img/udemy.png';
import projectImg4 from '../assets/img/cisco.png';

export const Education = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfPath, setPdfPath] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");

  const handleShowPDF = (path, title) => {
    setPdfPath(path);
    setPdfTitle(title);
    setShowModal(true);
  };

  return (
    <section className="education" id="education" style={{background: 'linear-gradient(135deg, transparent 60%, #23283b 100%)', padding: '60px 0'}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={{paddingBottom: '50px'}}>
                  <h2 style={{fontWeight:700, marginBottom:40, color:'#fff', textAlign:'center', letterSpacing:'1px'}} className={isVisible ? "animate__animated animate__fadeInDown" : ""}>Educación y Certificaciones</h2>
                  <Row className="g-4 justify-content-center">
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                      <div className={isVisible ? "w-100 animate__animated animate__zoomIn animate__delay-1s" : "w-100"}>
                        <Card className="shadow h-100 border-0" style={{borderRadius: '18px', background:'#23283b', color:'#fff', overflow: 'hidden', padding: '20px'}}>
                          <Card.Img variant="top" src={logo} style={{height:90, objectFit:'contain', marginTop:20}} />
                          <Card.Body>
                            <Card.Title style={{color:'#fff', textAlign: 'center'}}>UNIVERSIDAD AUTÓNOMA DE SANTO DOMINGO</Card.Title>
                            <Card.Text style={{color:'#cbd5e1', textAlign: 'center'}}>
                              Licenciatura en Informática<br/>
                              <a href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer" style={{color:'#60a5fa', textAlign: 'center'}}>uasd.edu.do</a><br/>
                            </Card.Text>
                            <div style={{textAlign:'center', marginTop:10}}>
                              <Button className="btn-cert disabled" style={{cursor: 'default', opacity: '0.5'}} variant="outline-info" size="sm" disabled>Ver Certificado</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                      <div className={isVisible ? "w-100 animate__animated animate__zoomIn animate__delay-2s" : "w-100"}>
                        <Card className="shadow h-100 border-0" style={{borderRadius: '18px', background:'#23283b', color:'#fff'}}>
                          <Card style={{display:'flex', justifyContent:'center', alignItems:'center', background:'#23283b', border: 'none', borderRadius: '18px', overflow: 'hidden', padding: '20px'}}>
                            <Card.Img variant="top" src={projectImg1} style={{height:60, width:300, objectFit:'contain', marginTop:20}} /></Card>
                          <Card.Body>
                            <Card.Title style={{color:'#fff', textAlign: 'center'}}>ORACLE ACADEMY</Card.Title>
                            <Card.Text style={{color:'#cbd5e1', textAlign: 'center'}}>
                              Java Programming<br/>
                              <a href="https://academy.oracle.com" target="_blank" rel="noopener noreferrer" style={{color:'#60a5fa', textAlign: 'center'}}>academy.oracle.com</a><br/>
                              <span style={{fontWeight:500, color:'#60a5fa', textAlign: 'center'}}>May 2023</span>
                            </Card.Text>
                            <div style={{textAlign:'center', marginTop:10}}>
                              <Button className="btn-cert" size="sm" onClick={() => handleShowPDF(require('../assets/certificates/Java_Programming.pdf'), 'Certificado Oracle Academy')}>Ver Certificado</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                      <div className={isVisible ? "w-100 animate__animated animate__zoomIn animate__delay-3s" : "w-100"}>
                        <Card className="shadow h-100 border-0" style={{borderRadius: '18px', background:'#23283b', color:'#fff',  overflow: 'hidden', padding: '20px'}}>
                          <Card.Img variant="top" src={projectImg2} style={{height:70, objectFit:'contain', marginTop:20}} />
                          <Card.Body>
                            <Card.Title style={{color:'#fff', textAlign: 'center'}}>COURSERA</Card.Title>
                            <Card.Text style={{color:'#cbd5e1', textAlign: 'center'}}>
                              Introduction to IA<br/>
                              <a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style={{color:'#60a5fa', textAlign: 'center'}}>coursera.org</a><br/>
                              <span style={{fontWeight:500, color:'#60a5fa', textAlign: 'center'}}>June 2025</span>
                            </Card.Text>
                            <div style={{textAlign:'center', marginTop:10}}>
                              <Button className="btn-cert" size="sm" onClick={() => handleShowPDF(require('../assets/certificates/Introduction to IA.pdf'), 'Certificado Coursera')}>Ver Certificado</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                      <div className={isVisible ? "w-100 animate__animated animate__zoomIn animate__delay-4s" : "w-100"}>
                        <Card className="shadow h-100 border-0" style={{borderRadius: '18px', background:'#23283b', color:'#fff', overflow: 'hidden', padding: '20px'}}>
                          <Card.Img variant="top" src={projectImg3} style={{height:90, objectFit:'contain', marginTop:20, filter:'brightness(2) invert(1)'}} />
                          <Card.Body>
                            <Card.Title style={{color:'#fff', textAlign: 'center'}}>UDEMY</Card.Title>
                            <Card.Text style={{color:'#cbd5e1', textAlign: 'center'}}>
                              Master en JavaScript, React, Hooks, MERN, NodeJs, JWT+, Angular 18, Professional Python<br/>
                              <a href="https://udemy.com" target="_blank" rel="noopener noreferrer" style={{color:'#60a5fa', textAlign: 'center'}}>udemy.com</a><br/>
                              <span style={{fontWeight:500, color:'#60a5fa', textAlign: 'center'}}>Oct 2023 – Apr 2024</span>
                            </Card.Text>
                            <div style={{textAlign:'center', marginTop:10}}>
                              <Button className="btn-cert" size="sm" onClick={() => handleShowPDF(require('../assets/certificates/udemy_curses.pdf'), 'Certificado Udemy')}>Ver Certificado</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                      <div className={isVisible ? "w-100 animate__animated animate__zoomIn animate__delay-5s" : "w-100"}>
                        <Card className="shadow h-100 border-0" style={{borderRadius: '18px', background:'#23283b', color:'#fff', overflow: 'hidden', padding: '20px'}}>
                          <Card.Img variant="top" src={projectImg4} style={{height:90, objectFit:'contain', marginTop:20, filter:'brightness(1.4)'}} />
                          <Card.Body>
                            <Card.Title style={{color:'#fff', textAlign: 'center'}}>CENTRO NACIONAL DE CIBERSEGURIDAD</Card.Title>
                            <Card.Text style={{color:'#cbd5e1', textAlign: 'center'}}>
                              Seguridad de Terminales, Defensa de la red<br/>
                              <a href="https://netacad.com" target="_blank" rel="noopener noreferrer" style={{color:'#60a5fa', textAlign: 'center'}}>netacad.com</a><br/>
                              <span style={{fontWeight:500, color:'#60a5fa', textAlign: 'center'}}>Dec 2023 – May 2025</span>
                            </Card.Text>
                            <div style={{textAlign:'center', marginTop:10}}>
                              <Button className="btn-cert" size="sm" onClick={() => handleShowPDF(require('../assets/certificates/cisco_curses.pdf'), 'Certificado Ciberseguridad')}>Ver Certificado</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </div>
              }
            </TrackVisibility>
            <PDFModal show={showModal} onHide={() => setShowModal(false)} pdfPath={pdfPath} title={pdfTitle} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
