import { SkillCategory, Project, Education, Experience, Service } from "@/types";

const skills: SkillCategory[] = [
    {
        category: "Frontend Development",
        skills: [
            { name: "React", icon: "react", level: "95%" },
            { name: "Angular", icon: "angular", level: "90%" },
            { name: "Next.js", icon: "nextjs", level: "93%" },
            { name: "TypeScript", icon: "typescript", level: "92%" }
        ]
    },
    {
        category: "Backend Development",
        skills: [
            { name: "Node.js", icon: "node", level: "93%" },
            { name: "Python", icon: "python", level: "88%" },
            { name: "Django", icon: "django", level: "85%" },
            { name: "Express", icon: "express", level: "90%" }
        ]
    },
    {
        category: "Databases",
        skills: [
            { name: "Firebase", icon: "firebase", level: "88%" },
            { name: "SQL Server", icon: "sqlserver", level: "85%" },
            { name: "MySQL", icon: "mysql", level: "90%" },
            { name: "PostgreSQL", icon: "postgresql", level: "92%" }
        ]
    },
    {
        category: "DevOps & Cloud",
        skills: [
            { name: "Vercel", icon: "vercel", level: "92%" },
            { name: "Azure DevOps", icon: "azure", level: "88%" },
            { name: "GitHub Actions", icon: "githubactions", level: "90%" },
            { name: "Docker", icon: "docker", level: "85%" }
        ]
    }
];

const projects: Project[] = [
    {
        title: "FiscalDO",
        year: "2025",
        description: "Futuristic electronic invoicing platform for tax compliance in DR, featuring AI (Gemini) OCR, obsidian glass aesthetics, and modular architecture.",
        tags: ["React 19", "Google Gemini", "Firebase", "TailwindCSS"],
        link: "https://fiscaldo-fb51f.web.app/",
        image: "/images/projects/fiscaldo.png"
    },
    {
        title: "Politica.do",
        year: "2025",
        description: "High-performance news portal for Dominican politics and economy, featuring real-time updates and a clean journalistic aesthetic.",
        tags: ["Next.js", "TailwindCSS", "Vercel", "NeonDB"],
        link: "https://politica-do.vercel.app/",
        image: "/images/projects/politica-do.png"
    },
    {
        title: "Skylink Airlines",
        year: "2024",
        description: "Modern web platform for flight reservations connecting travelers with multiple airlines in one place.",
        tags: ["Angular", "TailwindCSS", "PrimeNG", "IndexedDB"],
        link: "https://sky-link-frontend.vercel.app/",
        image: "/images/projects/skylink.webp"
    },
    {
        title: "Logistic Platform",
        year: "2024",
        description: "Modern logistics operations management platform, designed to optimize the supply chain and improve transport efficiency.",
        tags: ["Angular", "TailwindCSS", "PrimeNG", "IndexedDB"],
        link: "https://logistic-nine-tan.vercel.app/",
        image: "/images/projects/logistic.webp"
    },
    {
        title: "TradeSmart",
        year: "2024",
        description: "Modern automated trading platform, with animated UI, risk management and multilanguage support.",
        tags: ["Next.js", "React", "TailwindCSS", "IndexedDB"],
        link: "https://tradesmartuinext.vercel.app/",
        image: "/images/projects/trade-smart.webp"
    },
    {
        title: "AFI Reservas",
        year: "2024",
        description: "Interactive dashboard for managing and visualizing investment funds, returns and account statements.",
        tags: ["React", "Next.js", "Chart.js", "IndexedDB"],
        link: "https://afi-reservas.vercel.app/",
        image: "/images/projects/afi-reservas.webp"
    },
    {
        title: "University API",
        year: "2023",
        description: "RESTful API for university management following Clean Architecture principles, with NestJS and PostgreSQL.",
        tags: ["Node.js", "NestJS", "Prisma", "PostgreSQL"],
        link: "https://github.com/dfajardoCNE/university-api",
        image: "/images/projects/university-api.webp"
    }
];

const education: Education[] = [
    {
        institution: "AUTONOMOUS UNIVERSITY OF SANTO DOMINGO",
        description: "Bachelor's Degree in Computer Science",
        logo: "/images/logos/uasd.svg",
        locked: true,
        items: [
            {
                title: "Bachelor's Degree in Computer Science",
                period: "Graduado",
                description: "Comprehensive training in computer science, software development and information systems.",
                pdf: "/certificates/placeholder.pdf"
            }
        ]
    },
    {
        institution: "ORACLE ACADEMY",
        description: "Database Design and Java Programming",
        logo: "/images/logos/oracle.svg",
        items: [
            {
                title: "Java Programming",
                period: "May 2023",
                description: "Advanced Java programming and database design certification.",
                pdf: "/certificates/Java_Programming.pdf"
            }
        ]
    },
    {
        institution: "COURSERA / GOOGLE",
        description: "Specializations in IA and Productivity",
        logo: "/images/logos/coursera.svg",
        items: [
            {
                title: "IA and Productivity Pack",
                period: "June 2025",
                description: "Introduction to IA, Discover the Art of Prompting, Maximize Productivity With AI Tools.",
                pdf: "/certificates/coursera.pdf"
            }
        ]
    },
    {
        institution: "UDEMY",
        description: "Specializations in Full Stack Development",
        logo: "/images/logos/udemy.svg",
        items: [
            {
                title: "Master en JavaScript, React, Angular & NodeJs",
                period: "Oct 2023 – Apr 2024",
                description: "Intensive training in modern frameworks (React, Angular 18, MERN Stack).",
                pdf: "/certificates/udemy_curses.pdf"
            }
        ]
    },
    {
        institution: "NATIONAL CYBERSECURITY CENTER / CISCO",
        description: "Cybersecurity Trajectory",
        logo: "/images/logos/cisco.svg",
        items: [
            {
                title: "Ethical Hacker & Network Defense",
                period: "Dec 2023 – May 2025",
                description: "Certifications in Terminal Security, Network Defense and Cybersecurity.",
                pdf: "/certificates/cisco_curses.pdf"
            }
        ]
    },
    {
        institution: "AMERICAN DOMINICAN CULTURAL INSTITUTE",
        description: "Formación Técnica e Idiomas",
        logo: "/images/logos/dominico.png",
        items: [
            {
                title: "Software Architecture",
                period: "2024",
                description: "Advanced specialization in design patterns, scalability and modern system structures according to architectural standards.",
                pdf: "/certificates/Aruitectura_De_Software.pdf"
            },
        ]
    }
];

const services: Service[] = [
    {
        title: "Frontend Architecture",
        description: "Building scalable, high-performance web applications using modern frameworks like React, Next.js, and complex CSS architectures.",
        icon: "layout"
    },
    {
        title: "Backend & APIs",
        description: "Designing robust RESTful APIs, data pipelines, and serverless backends with Node.js, Express, and PostgreSQL.",
        icon: "server"
    },
    {
        title: "Digital Transformation",
        description: "Upgrading legacy systems to modern cloud infrastructure, ensuring optimized performance and technical maintainability.",
        icon: "diamond"
    }
];

const experience: Experience[] = [
    {
        company: "Comisión Nacional de Energía",
        logo: "/images/image.png",
        items: [
            {
                role: "Software Developer",
                period: "Feb 2022 - Present",
                description: "Lead developer for institutional web platforms, focusing on frontend performance, modern UI/UX implementation, and robust, scalable architectures.",
                achievements: [
                    "Developed and maintained complex institutional portals and internal management systems.",
                    "Led the modernization of legacy applications into modular, high-performance web applications."
                ]
            }
        ]
    },
    {
        company: "Freelancer",
        logo: "FiCode",
        items: [
            {
                role: "Full Stack Developer",
                period: "2021 - Present",
                description: "Design and development of custom web applications, specialized dashboards, and digital solutions for independent clients.",
                achievements: [
                    "Delivered high-fidelity interactive platforms and logistics dashboards.",
                    "Provided end-to-end technical consulting and architecture design for modern startups."
                ]
            }
        ]
    }
];

export { skills, projects, education, services, experience };
