import { Col, Modal, Button } from "react-bootstrap";
import { useState, memo, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaAngular, FaVuejs, FaNodeJs, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMui, SiVuetify, SiFirebase, SiRedux, SiMongodb, SiTailwindcss, SiPrimeng, SiNextdotjs, SiSwagger, SiPrisma, SiPostgresql, SiNestjs, SiJsonwebtokens } from "react-icons/si";

export const ProjectCard = memo(({ title, description, imgUrl, technologies = [], demoUrl, githubUrl }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Función para obtener el icono correspondiente - memoizada
  const getIcon = useCallback((iconName) => {
    switch(iconName.toLowerCase()) {
      case 'react': return <FaReact />;
      case 'angular': return <FaAngular />;
      case 'vue': return <FaVuejs />;
      case 'nodejs': return <FaNodeJs />;
      case 'bootstrap': return <FaBootstrap />;
      case 'express': return <SiExpress />;
      case 'material-ui': return <SiMui />;
      case 'vuetify': return <SiVuetify />;
      case 'firebase': return <SiFirebase />;
      case 'redux': return <SiRedux />;
      case 'mongodb': return <SiMongodb />;
      case 'tailwindcss': return <SiTailwindcss />;
      case 'primeng': return <SiPrimeng />;
      case 'nextjs': return <SiNextdotjs />;
      case 'swagger': return <SiSwagger />;
      case 'prisma': return <SiPrisma />;
      case 'postgresql': return <SiPostgresql />;
      case 'nestjs': return <SiNestjs />;
      case 'jwt': return <SiJsonwebtokens />;
      default: return <FaDatabase />;
    }
  }, []);

  // Memoizar handlers
  const handleShowModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleShowModal} style={{ cursor: 'pointer' }}>
          <img src={imgUrl} alt={title} loading="lazy" />
          <div className="proj-txtx" style={{ padding: '60px'}}>
            <h5>{title}</h5>
            <span style={{ fontSize: '12px'}}>{description}</span>
            
            {/* Tecnologías */}
            <div className="tech-icons">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-icon" title={`${tech.name} ${tech.version}`}>
                  {getIcon(tech.icon)}
                  <small>{tech.version}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>

      {/* Modal para ver demo y GitHub */}
      <Modal show={showModal} onHide={handleCloseModal} centered className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>{description}</p>
          <div className="tech-list">
            <h5>Tecnologías:</h5>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-badge">
                  {getIcon(tech.icon)} {tech.name} <span className="version">{tech.version}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant="gradient"
            href={demoUrl}
            target="_blank"
            className="me-2 demo-btn"
            style={demoUrl ? { color: "white" } : { color: "white", filter: "grayscale(100%) opacity(50%)", border: "none" }}
            disabled={!demoUrl}
          >
            <FaExternalLinkAlt className="me-2" /> Ver Demo
          </Button>
          <Button variant="dark" href={githubUrl} target="_blank">
            <FaGithub className="me-2" /> Ver en GitHub
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});
