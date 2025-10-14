import { Container, Row, Col } from "react-bootstrap";
import { memo } from "react";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = memo(() => {
  return (
    <footer className="footer" style={{padding: '40px 0' }}>
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="footer-text">
            <span
              style={{
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "2px",
                fontFamily: "inherit",
                textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                transition: "color 0.3s"
              }}
            >
              DARLING.DEV
            </span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/darling-fajardo-b44319154/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" loading="lazy" /></a>
                <a href="https://github.com/Solvealgoritms22" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" loading="lazy" /></a>
              <a href="https://www.instagram.com/darlingf.dev?igsh=MTUwdjVvZTE4cndnNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" loading="lazy" /></a>
            </div>
            <p>© 2025 darling.dev. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});
