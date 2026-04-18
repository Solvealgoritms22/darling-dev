"use client";

import React from 'react';
import { Flex, Row, Column, Text, Badge, IconButton } from "@once-ui-system/core";
import { SmartMedia } from "@/components/SmartMedia";
import { Project } from "@/types";
import {
    SiNextdotjs, SiReact, SiTailwindcss, SiAngular, SiPrimeng,
    SiSpringboot, SiPostgresql, SiChartdotjs
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

interface ProjectCardProps {
    project: Project;
    priority?: boolean;
}

const getTechIcon = (tag: string) => {
    const icons: Record<string, any> = {
        'Next.js': SiNextdotjs,
        'React': SiReact,
        'TailwindCSS': SiTailwindcss,
        'Angular': SiAngular,
        'PrimeNG': SiPrimeng,
        'Spring Boot': SiSpringboot,
        'Java': FaJava,
        'PostgreSQL': SiPostgresql,
        'Chart.js': SiChartdotjs,
        'IndexedDB': FaDatabase
    };
    return icons[tag] || null;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority }) => {
    return (
        <Flex
            key={project.title}
            fillHeight
            direction="column"
            radius="l"
            overflow="hidden"
            border="neutral-alpha-weak"
            background="neutral-alpha-weak"
            className="project-card-wrapper"
            style={{ 
                cursor: 'pointer' 
            }}
            onClick={() => window.open(project.link, '_blank')}
        >
            <Flex position="relative" overflow="hidden" className="project-card-hover" style={{ height: '200px' }}>
                <SmartMedia
                    src={project.image}
                    alt={project.title}
                    priority={priority}
                    fill
                    sizes="320px"
                    style={{ objectFit: 'cover' }}
                />
                <Flex
                    position="absolute"
                    fill
                    background="neutral-alpha-medium"
                    horizontal="center"
                    vertical="center"
                    className="project-overlay"
                    style={{ opacity: 0, backdropFilter: 'blur(4px)' }}
                >
                    <IconButton
                        icon="chevron-right"
                        variant="primary"
                        size="l"
                        style={{ transform: 'translateX(-4px)' }}
                    />
                </Flex>
            </Flex>
            <Column flex={1} className="project-card-content">
                <Row horizontal="between" vertical="center">
                    <Text variant="heading-default-m">{project.title}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">{project.year}</Text>
                </Row>
                <div className="project-description-container">
                    <Text variant="body-default-s" onBackground="neutral-medium" className="project-description">
                        {project.description}
                    </Text>
                </div>
                <Flex wrap gap="8" style={{ marginTop: 'auto' }}>
                    {project.tags.map((tag) => {
                        const IconComponent = getTechIcon(tag);
                        return (
                            <Badge
                                key={tag}
                                border="neutral-alpha-weak"
                                paddingX="8"
                                paddingY="4"
                            >
                                <Flex gap="4" vertical="center">
                                    {IconComponent && <IconComponent size={12} />}
                                    {tag}
                                </Flex>
                            </Badge>
                        );
                    })}
                </Flex>
            </Column>
        </Flex>
    );
};
