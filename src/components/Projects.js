import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/skylink.png";
import projImg2 from "../assets/img/logistic.png";
import projImg3 from "../assets/img/trade-smart.png";
import projImg4 from "../assets/img/university-api.png";
import projImg5 from "../assets/img/emergencia.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Skylink Airlines",
      description: "SkyLink es una plataforma web moderna para la reservación de vuelos que conecta a los viajeros con múltiples aerolíneas en un solo lugar.",
      imgUrl: projImg1,
      technologies: [
        { name: "Angular", version: "19.0.0", icon: "angular" },
        { name: "TailwindCSS", version: "3.4.17", icon: "tailwindcss" },
        { name: "PrimeNG", version: "19.0.8", icon: "primeng" }
      ],
      demoUrl: "https://skylink-demo.com",
      githubUrl: "https://github.com/Solvealgoritms22/SkyLink-Frontend"
    },
    {
      title: "Logistic - Plataforma de Gestión Logística",
      description: "Logistic es una plataforma moderna para la gestión de operaciones logísticas, diseñada para optimizar la cadena de suministro y mejorar la eficiencia en el transporte de mercancías.",
      imgUrl: projImg2,
      technologies: [
        { name: "Angular", version: "19.0.0", icon: "angular" },
        { name: "TailwindCSS", version: "3.4.17", icon: "tailwindcss" },
        { name: "PrimeNG", version: "19.0.8", icon: "primeng" }
      ],
      demoUrl: "https://logistic-demo.com",
      githubUrl: "https://github.com/Solvealgoritms22/Logistic"
    },
    {
      title: "TradeSmart",
      description: "Plataforma moderna de trading automatizado, con UI animada, gestión de riesgo y soporte multilenguaje.",
      imgUrl: projImg3,
      technologies: [
        { name: "Nextjs", version: "15.2.4", icon: "nextjs" },
        { name: "React", version: "19", icon: "react" },
        { name: "TailwindCSS", version: "3.4.17", icon: "tailwindcss" }
      ],
      demoUrl: "https://backoffice-demo.com",
      githubUrl: "https://github.com/dfajardoCNE/Trade-Smart-UI-v2.1"
    },
  ];

    const projects2 = [
    {
      title: "Universidad API",
      description: "Este proyecto implementa una API RESTful para la gestión de una universidad, siguiendo los principios de Clean Architecture. Proporciona un sistema completo para administrar estudiantes, profesores, cursos, calificaciones y más.",
      imgUrl: projImg4,
      technologies: [
        { name: "Node.js", version: "v16.x", icon: "nodejs" },
        { name: "NestJS", version: "v9.x", icon: "nestjs" },
        { name: "PostgreSQL", version: "v14.x", icon: "postgresql" },
        { name: "Prisma", version: "v4.x", icon: "prisma" },
        { name: "JWT", version: "v9.x", icon: "jwt" },
        { name: "Swagger", version: "v6.x", icon: "swagger" }
      ],
      demoUrl: "https://universidad-api-demo.com",
      githubUrl: "https://github.com/dfajardoCNE/university-api"
    },
  ];

    const projects3 = [
    {
      title: "EMERGENCIA.DO - Plataforma de Emergencias",
      description: "EMERGENCIA.DO es una plataforma web moderna para informar sobre el paradero de civiles en situaciones críticas.",
      imgUrl: projImg5,
      technologies: [
        { name: "Angular", version: "19.0.0", icon: "angular" },
        { name: "TailwindCSS", version: "3.4.17", icon: "tailwindcss" },
        { name: "PrimeNG", version: "19.0.8", icon: "primeng" },
        { name: "Node.js", version: "19.0.8", icon: "nodejs" }
      ],
      demoUrl: "https://emergencia-demo.com",
      githubUrl: "https://github.com/Solvealgoritms22/CatastrofeAlert"
    },
  ];
  return (
    <section className="project" id="projects" style={{background: 'linear-gradient(135deg, transparent 30%, #23283b 75%)', padding: '60px 0'}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiencia Profesional</h2>
                <p>Estos son algunos de los proyectos y logros más relevantes en mi carrera profesional reciente.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item style={{cursor: 'pointer'}}>
                      <Nav.Link eventKey="first">FrontEnd Lead</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{cursor: 'pointer'}}>
                      <Nav.Link eventKey="second">BackEnd Developer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{cursor: 'pointer'}}>
                      <Nav.Link eventKey="third">FullStack Developer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
