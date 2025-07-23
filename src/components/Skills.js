import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" style={{background: 'linear-gradient(135deg, transparent 40%, #23283b 90%)', padding: '60px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-12" style={{paddingTop: '60px'}}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Desarrollo soluciones informáticas robustas y escalables, con experiencia en integración de equipos, optimización de rendimiento web y mejora de UI/UX.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider custom-carousel-arrows">
                            <div className="item">
                                <img src={meter1} alt="FrontEnd skills meter" />
                                <h5>FrontEnd (React, Angular)</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="BackEnd skills meter" />
                                <h5>BackEnd (Node.js, Python)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CI/CD & Microservicios skills meter" />
                                <h5>CI/CD & Microservicios</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="UI/UX & Optimización Web skills meter" />
                                <h5>UI/UX & Optimización Web</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
