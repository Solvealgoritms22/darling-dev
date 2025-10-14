import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Eye, Download } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { PDFModal } from "./PDFModal";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(180 - Math.random() * 60);
  const [showCVModal, setShowCVModal] = useState(false);
  const [currentCV, setCurrentCV] = useState({ path: "", title: "", lang: "" });
  
  const toRotate = useMemo(() => [
    "Desarrollador de Software",
    "FrontEnd Lead",
    "Programador Web",
  ], []);
  const period = 1200;

  // CVs disponibles
  const cvFiles = useMemo(() => ({
    es: {
      path: require("../assets/cv/CV–Darling-Fajardo-14-10-2025-es.pdf"),
      title: "CV - Darling Fajardo (Español)",
      filename: "CV-Darling-Fajardo-14-10-2025-es.pdf"
    },
    en: {
      path: require("../assets/cv/CV–Darling-Fajardo-14-10-2025-en.pdf"),
      title: "CV - Darling Fajardo (English)",
      filename: "CV-Darling-Fajardo-14-10-2025-en.pdf"
    }
  }), []);

  // Función para mostrar preview del CV
  const handlePreviewCV = useCallback((lang = 'es') => {
    const cv = cvFiles[lang];
    setCurrentCV({ path: cv.path, title: cv.title, lang });
    setShowCVModal(true);
  }, [cvFiles]);

  // Función para descargar CV
  const handleDownloadCV = useCallback((lang = 'es') => {
    const cv = cvFiles[lang];
    const link = document.createElement("a");
    link.href = cv.path;
    link.download = cv.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [cvFiles]);

  // Cerrar modal
  const handleCloseModal = useCallback(() => {
    setShowCVModal(false);
  }, []);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
      }
    };
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting, toRotate, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Mi Portafolio</span>
                  <h1 className="responsive-heading">
                    {`¡Hola! Soy Darling Fajardo`}{" "}
                  <span
                    className="txt-rotate"
                    dataperiod="1000"
                    data-rotate='[ "Desarrollador de Software", "FrontEnd Lead", "Programador Web" ]'
                  >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="responsive-text">
                    Más de 3 años de experiencia como Desarrollador de Software.
                    Me especializo en crear soluciones informáticas robustas y
                    escalables, con experiencia en integración de equipos,
                    optimización de rendimiento web y mejora de UI/UX. Soy
                    nativo en Español y tengo un nivel técnico de inglés.
                  </p>
                  <div className="cv-buttons-container">
                    <Button
                      variant="outline-light"
                      className="cv-preview-btn me-3"
                      onClick={() => handlePreviewCV('es')}
                    >
                      <Eye size={20} className="me-2" />
                      Ver CV
                    </Button>
                    
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" className="cv-download-btn">
                        <Download size={20} className="me-2" />
                        Descargar CV
                      </Dropdown.Toggle>
                      
                      <Dropdown.Menu style={{ width: "100%" }}>
                        <Dropdown.Item onClick={() => handleDownloadCV('es')}>
                          <span className="flag-emoji">🇪🇸</span> Español
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDownloadCV('en')}>
                          <span className="flag-emoji">🇺🇸</span> English
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="mt-4 mt-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn header-img-container" : "header-img-container"
                  }
                >
                  <img src={headerImg} alt="Header Img" className="img-fluid" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      {/* Modal para preview del CV */}
      <PDFModal
        show={showCVModal}
        onHide={handleCloseModal}
        pdfPath={currentCV.path}
        title={currentCV.title}
      />
    </section>
  );
};
