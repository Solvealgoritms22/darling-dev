import React from 'react';
import colorSharp from "../assets/img/color-sharp.png"

// Frameworks y tecnologías con sus logos
const frontendFrameworks = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 95 },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 90 },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 93 },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 92 },
];

const backendFrameworks = [
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 93 },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 88 },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 85 },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 90 },
];

const databases = [
  { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', level: 88 },
  { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', level: 85 },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 90 },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 92 },
];

const devopsTools = [
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', level: 92 },
  { name: 'Azure DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', level: 88 },
  { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 90 },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 85 },
];

const SkillCard = ({ framework }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-container">
        <img src={framework.logo} alt={framework.name} className="skill-icon" />
      </div>
      <h5>{framework.name}</h5>
      <div className="skill-level">
        <div className="skill-progress" style={{ width: `${framework.level}%` }}></div>
      </div>
      <span className="skill-percentage">{framework.level}%</span>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="skill" id="skills" style={{background: 'linear-gradient(135deg, transparent 40%, #23283b 90%)', padding: '60px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-12" style={{paddingTop: '60px'}}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Tecnologías & Frameworks</h2>
                        <p>Experiencia en tecnologías modernas de desarrollo web, desde frameworks frontend hasta herramientas DevOps y bases de datos.</p>
                        
                        {/* Frontend Technologies */}
                        <div className="skill-category">
                            <h3>Frontend Development</h3>
                            <div className="skills-grid">
                                {frontendFrameworks.map((framework, index) => (
                                    <SkillCard key={index} framework={framework} />
                                ))}
                            </div>
                        </div>

                        {/* Backend Technologies */}
                        <div className="skill-category">
                            <h3>Backend Development</h3>
                            <div className="skills-grid">
                                {backendFrameworks.map((framework, index) => (
                                    <SkillCard key={index} framework={framework} />
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="skill-category">
                            <h3>Bases de Datos</h3>
                            <div className="skills-grid">
                                {databases.map((framework, index) => (
                                    <SkillCard key={index} framework={framework} />
                                ))}
                            </div>
                        </div>

                        {/* DevOps & Cloud */}
                        <div className="skill-category">
                            <h3>DevOps & Cloud</h3>
                            <div className="skills-grid">
                                {devopsTools.map((framework, index) => (
                                    <SkillCard key={index} framework={framework} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
