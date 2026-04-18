export interface Skill {
    name: string;
    icon: string;
    level: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Project { // TODO: Update this interface
    title: string;
    year: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

export interface EducationItem {
    title: string;
    period: string;
    description: string;
    pdf?: string;
}

export interface Education {
    institution: string;
    description: string;
    logo: string;
    locked?: boolean;
    items: EducationItem[];
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface ExperienceItem {
    role: string;
    period: string;
    description: string;
    achievements?: string[];
}

export interface Experience {
    company: string;
    logo?: string;
    items: ExperienceItem[];
}
