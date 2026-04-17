"use client";

import React, { useRef } from 'react';
import { Flex, Row, Column, Heading, Badge, IconButton, Fade, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/resources/content";

export const ProjectsSection = () => {
    const projectsScrollRef = useRef<HTMLDivElement>(null);

    const scrollProjects = (direction: 'left' | 'right') => {
        if (projectsScrollRef.current) {
            // On mobile, scroll by the full card width (calc from container)
            const container = projectsScrollRef.current;
            const cardEl = container.querySelector('[data-card]') as HTMLElement;
            const scrollAmount = cardEl ? cardEl.offsetWidth + 24 : 344;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Flex
            fillWidth
            maxWidth="xl"
            direction="column"
            gap="40"
            className="section-padding"
            paddingX="l"
            horizontal="center"
        >
            <Column gap="12" horizontal="start" fillWidth className="mobile-center">
                <Badge
                    textVariant="code-default-xs"
                    border="neutral-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    style={{ width: 'fit-content' }}
                >
                    Portfolio
                </Badge>
                <Heading variant="display-default-xs">Featured Projects</Heading>
            </Column>

            <Flex fillWidth position="relative" horizontal="center" vertical="center">
                {/* Navigation Buttons — hidden on mobile (swipe is natural) */}
                <Flex
                    position="absolute"
                    left="8"
                    zIndex="10"
                    className="carousel-nav"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                    <IconButton
                        icon="chevron-right"
                        variant="secondary"
                        size="m"
                        onClick={() => scrollProjects('left')}
                        style={{
                            transform: 'rotate(180deg)',
                            background: 'var(--neutral-alpha-weak)',
                            backdropFilter: 'blur(8px)'
                        }}
                    />
                </Flex>

                <Flex
                    position="absolute"
                    right="8"
                    zIndex="10"
                    className="carousel-nav"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                    <IconButton
                        icon="chevron-right"
                        variant="secondary"
                        size="m"
                        onClick={() => scrollProjects('right')}
                        style={{
                            background: 'var(--neutral-alpha-weak)',
                            backdropFilter: 'blur(8px)'
                        }}
                    />
                </Flex>

                {/* Edge Fades */}
                <Fade zIndex="1" to="right" fillHeight width={8} position="absolute" left="0" top="0" style={{ pointerEvents: 'none' }} />
                <Fade zIndex="1" to="left" fillHeight width={8} position="absolute" right="0" top="0" style={{ pointerEvents: 'none' }} />

                {/* Scrollable Container */}
                <Row
                    ref={projectsScrollRef}
                    fillWidth
                    gap="16"
                    className="projects-scroll-container"
                    style={{
                        alignItems: 'stretch',
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        gap: '12px'
                    }}
                >
                    {projects.map((project, i) => (
                        <Flex
                            key={project.title}
                            data-card
                            fillHeight
                            direction="column"
                            className="project-card-slot"
                            style={{ scrollSnapAlign: 'center' }}
                        >
                            <RevealFx
                                speed="fast"
                                delay={i * 0.15}
                                style={{ height: '100%' }}
                            >
                                <ProjectCard
                                    project={project}
                                    priority={i < 2}
                                />
                            </RevealFx>
                        </Flex>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};
