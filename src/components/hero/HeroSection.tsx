"use client";

import React, { useState, useEffect } from 'react';
import { Flex, Column, Heading, Text, Badge, Row, IconButton, Mask, Background, TypeFx } from "@once-ui-system/core";
import { AnimatePresence, motion } from 'framer-motion';
import { LetterReveal } from '@/components/LetterReveal';
import { ToolsCarousel } from '@/components/hero/ToolsCarousel';

const CTA_WORDS = ["something exceptional.", "something professional.", "something magnificent."];

// Defined outside component to prevent re-creation on every render
const DESCRIPTIONS = [
    {
        key: "desc-1",
        text: "Software Developer building the next generation of high-performance, scalable and user-centric digital solutions.",
        highlights: ["high-performance", "scalable", "user-centric"] as string[]
    },
    {
        key: "desc-2",
        text: "Software Engineer crafting the future evolution of robustly-typed, flexible and human-focused digital experiences.",
        highlights: ["robustly-typed", "flexible", "human-focused"] as string[]
    }
];

const HeroVideo = React.memo(() => (
    <Flex
        position="absolute"
        fillWidth
        fillHeight
        pointerEvents="none"
        style={{ left: 0, top: 0, overflow: 'hidden', isolation: 'isolate' }}
    >
        <Mask
            fill
            x={40}
            y={35}
            style={{ maskMode: 'alpha' }}
            radius={75}
        >
            <Flex fillWidth fillHeight position="absolute" style={{ zIndex: -1 }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        background: 'black',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent), linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
                        WebkitMaskComposite: 'source-in',
                        maskComposite: 'intersect'
                    }}
                >
                    <source src="/videos/darlingdev.webm" type="video/webm" />
                </video>
            </Flex>
        </Mask>

        <Background
            position="absolute"
            fill
            padding="0"
            gradient={{
                display: true,
                width: 100,
                height: 100,
                colorStart: 'page-background',
                colorEnd: 'static-transparent'
            }}
            style={{ opacity: 0.8, pointerEvents: 'none' }}
        />
    </Flex>
));

export const HeroSection = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % DESCRIPTIONS.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const current = DESCRIPTIONS[currentTextIndex];

    return (
        <Flex
            fillWidth
            minHeight="100vh"
            maxWidth="xl"
            position="relative"
            direction="column"
            className="hero-flex-layout"
            style={{ zIndex: 1 }}
        >
            {/* Background Layer Isolated */}
            <HeroVideo />

            {/* Content Layer: Text and UI */}
            <Flex
                fillWidth
                flex={1}
                direction="column"
                horizontal="end"
                vertical="center"
                padding="l"
                className="hero-content-layer"
            >
                <Column
                    maxWidth="s"
                    gap="32"
                    className="hero-text-column"
                >
                    <Badge
                        border="neutral-alpha-weak"
                        paddingX="16"
                        paddingY="8"
                        style={{ width: 'fit-content' }}
                    >
                        Darling Dev
                    </Badge>

                    <Heading
                        variant="display-default-xl"
                        align="left"
                        className="text-balance"
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                            lineHeight: '1.1',
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap'
                        }}>
                        <LetterReveal text="Darling Fajardo" delay={200} trigger={true} />
                    </Heading>

                    <Flex style={{ minHeight: '80px' }} vertical="center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.key}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, filter: 'blur(12px)', y: -16 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <Text
                                    variant="body-default-xl"
                                    align="left"
                                    onBackground="neutral-weak"
                                    className="text-balance"
                                    style={{ display: 'inline-block', width: '100%' }}>
                                    <LetterReveal
                                        text={current.text}
                                        stagger={20}
                                        highlights={current.highlights}
                                    />
                                </Text>
                            </motion.div>
                        </AnimatePresence>
                    </Flex>

                    {/* Portfolio CTA */}
                    <Column gap="16" marginTop="48" fillWidth>
                        <Flex
                            fillWidth
                            paddingX="12"
                            paddingY="8"
                            border="neutral-alpha-weak"
                            background="neutral-alpha-weak"
                            align="center"
                            gap="8"
                            radius="m"
                        >
                            <Flex paddingLeft="12" style={{ flex: 1 }} vertical="center">
                                <Row gap="8" vertical="center">
                                    <Text variant="body-default-s">
                                        Let's build
                                    </Text>
                                    {isMounted && (
                                        <TypeFx
                                            words={CTA_WORDS}
                                            loop
                                            speed={80}
                                            hold={2000}
                                            trigger="instant"
                                        />
                                    )}
                                </Row>
                            </Flex>
                            <IconButton
                                icon="chevron-right"
                                variant="primary"
                                size="m"
                                href="mailto:darlingf1998@gmail.com"
                            />
                        </Flex>

                        <Flex fillWidth horizontal="between" vertical="center" gap="16">
                            <Text
                                variant="body-default-xs"
                                onBackground="neutral-weak">
                                Open for collaborations and new opportunities.
                            </Text>
                            <Flex gap="8">
                                <IconButton icon="github" variant="secondary" size="m" href="https://github.com/Solvealgoritms22" />
                                <IconButton icon="linkedin" variant="secondary" size="m" href="https://www.linkedin.com/in/darling-fajardo-b44319154/" />
                                <IconButton icon="x" variant="secondary" size="m" href="https://x.com/darling_008" />
                            </Flex>
                        </Flex>
                    </Column>
                </Column>
            </Flex>

            {/* Tools Carousel — only visible on mobile inside the Hero */}
            <Flex
                fillWidth
                marginTop="40"
                className="mobile-only"
            >
                <ToolsCarousel />
            </Flex>
        </Flex>
    );
};
