import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(180 - Math.random() * 60);
  const toRotate = useMemo(() => [
    "Desarrollador de Software",
    "FrontEnd Lead",
    "Programador Web",
  ], []);
  const period = 1200;

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
                  <button
                    className="cv-download-btn"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = require("../assets/cv/CV-Darling-Fajardo.pdf");
                      link.download = "CV-Darling-Fajardo.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Descargar CV <ArrowDownCircle size={25} />
                  </button>
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
    </section>
  );
};
