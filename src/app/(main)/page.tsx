import React from 'react';
import { SiKofi } from 'react-icons/si';

import {
    Heading,
    Text,
    Button,
    Column,
    Badge,
    Flex,
    IconButton,
    Icon,
    Row,
    Mask,
    Background,
    GlitchFx,
    Schema,
    WeatherFx
} from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/seo";
import { HeroSection } from '@/components/hero/HeroSection';
import { ToolsCarousel } from '@/components/hero/ToolsCarousel';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { SmartMedia } from '@/components/SmartMedia';
import { HomeClientWrapper } from '@/components/HomeClientWrapper';
import { PhaseGauge } from '@/components/hero/PhaseGauge';
import { PhaseStatusText } from '@/components/hero/PhaseStatusText';
import { VoiceToggle } from '../../components/portfolio/VoiceToggle';
import { ResumeButton } from '../../components/portfolio/ResumeButton';

export default function Home() {
    return (
        <Flex fillWidth direction="column" horizontal="center">
            <Schema
                as="webPage"
                baseURL={baseURL}
                title={meta.home.title}
                description={meta.home.description}
                path={meta.home.path}
            />

            {/* Optimized Global Background Layer */}
            <WeatherFx
                position="fixed"
                fill
                type="snow"
                data-solid="contrast"
                colors={["brand-solid-strong", "neutral-solid-weak"]}
                intensity={30}
                speed={0.35}
            />
            <Background
                position="fixed"
                fill
                gradient={{
                    display: true,
                    width: 100,
                    height: 100,
                    colorStart: 'page-background'
                }}
            />

            <HomeClientWrapper>
                <div className="logo-df-wrapper">
                    <span className="logo-df">Df</span>
                </div>

                <HeroSection />

                {/* Desktop Only Carousel */}
                <Flex fillWidth className="desktop-only">
                    <ToolsCarousel />
                </Flex>

                {/* Resume Section */}
                <Flex
                    fillWidth
                    maxWidth="xl"
                    direction="row"
                    m={{ direction: 'column' }}
                    gap="80"
                    className="section-padding"
                    paddingX="l"
                    horizontal="center"
                    vertical="start"
                >
                    <Flex flex={1} direction="column" horizontal="center" m={{ horizontal: 'center' }} gap="24" className="profile-left" fillWidth>
                        <Mask
                            height={24}
                            x={0}
                            y={0}
                            radius={60}
                            style={{ maxWidth: '300px', margin: '0 auto' }}
                        >
                            <GlitchFx
                                speed="slow"
                                interval={3000}
                                trigger="instant"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SmartMedia
                                    src="/images/profile/profile.png"
                                    alt="Darling Fajardo"
                                    aspectRatio="4 / 5"
                                    radius="l"
                                    priority
                                    sizes="300px"
                                    className="profile-photo"
                                />
                            </GlitchFx>
                        </Mask>
                        <Column gap="8" horizontal="center" m={{ horizontal: 'center' }} className="mobile-center profile-name-col" fillWidth>
                            <Heading as="h2" variant="display-default-xs">
                                Darling Fajardo
                            </Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                Software Developer
                            </Text>
                        </Column>
                    </Flex>

                    <Column style={{ flex: 1.5 }} gap="32" vertical="start" horizontal="start" className="mobile-center" m={{ horizontal: 'center' }}>
                        <Column gap="12" horizontal="start" m={{ horizontal: 'center' }} className="mobile-center">
                            <Badge
                                textVariant="code-default-xs"
                                border="neutral-alpha-weak"
                                paddingX="12"
                                paddingY="4"
                                style={{ width: 'fit-content' }}
                            >
                                Biography
                            </Badge>
                            <Heading variant="display-default-xs">Experience & Expertise</Heading>

                            {/* Self-contained Voice Control */}
                            <VoiceToggle />

                            <Text variant="body-default-l" onBackground="neutral-medium" className="text-balance">
                                Over three years of experience as a Software Developer. I specialize in creating robust and scalable IT solutions, with expertise in team integration, web performance optimization, and UI/UX enhancement.
                            </Text>
                            <Text variant="body-default-m" onBackground="neutral-weak" className="text-balance">
                                My approach focuses on the intersection of technical engineering and visual elegance. I believe that great software should not only function flawlessly but also delight the end user through seamless interactions and refined aesthetics.
                            </Text>
                        </Column>
                        
                        {/* Self-contained Resume Control */}
                        <ResumeButton />
                    </Column>
                </Flex>

                <ProjectsSection />

                <EducationSection />

                {/* Footer Section - Restored with full content */}
                <Column fillWidth className="section-padding" paddingX="l" gap="64" horizontal="center">
                    <Column
                        fillWidth
                        maxWidth="m"
                        padding="40"
                        gap="24"
                        border="neutral-alpha-weak"
                        radius="l"
                        background="neutral-alpha-weak"
                        style={{ backdropFilter: 'blur(10px)' }}
                    >
                        <Column gap="8">
                            <Text variant="code-default-xs" onBackground="neutral-weak">Phase 1</Text>
                            <Heading variant="display-default-xs">Let's build the future</Heading>
                        </Column>

                        <Text variant="body-default-m" onBackground="neutral-medium">
                            Available for new challenges and ambitious projects. Let's connect and create something remarkable together.
                        </Text>

                        <Row gap="12">
                            <IconButton icon="github" variant="secondary" size="m" href="https://github.com/Solvealgoritms22" />
                            <IconButton icon="linkedin" variant="secondary" size="m" href="https://www.linkedin.com/in/darling-fajardo-b44319154/" />
                            <IconButton icon="x" variant="secondary" size="m" href="https://x.com/darling_008" />
                            <IconButton icon="symbol" variant="secondary" size="m" href="mailto:darlingf1998@gmail.com" />
                            <IconButton
                                variant="secondary"
                                size="m"
                                href="https://ko-fi.com/darlingdev"
                                tooltip="Support me on Ko-fi"
                            >
                                <SiKofi size={18} />
                            </IconButton>
                        </Row>

                        <Column gap="12" marginTop="24">
                            <PhaseGauge />
                            <PhaseStatusText />
                        </Column>
                    </Column>

                    <Row gap="8" horizontal="center" vertical="center">
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            © {new Date().getFullYear()} Darling Fajardo
                        </Text>
                    </Row>
                </Column>

                {/* Ko-fi Floating CTA */}
                <Flex
                    position="fixed"
                    className="floating-cta"
                    style={{
                        bottom: '2rem',
                        right: '2rem',
                        zIndex: 100
                    }}
                >
                    <a
                        href="https://ko-fi.com/darlingdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Buy me a coffee"
                        className="kofi-glow"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '9999px',
                            color: 'var(--neutral-on-background-strong)',
                            textDecoration: 'none',
                        }}
                    >
                        <SiKofi size={28} />
                    </a>
                </Flex>
            </HomeClientWrapper>
        </Flex>
    );
}
