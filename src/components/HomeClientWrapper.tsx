"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Flex, Dialog, Column, Heading, Text, Button, Icon } from "@once-ui-system/core";
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { useHomeContext, HomeProvider } from './HomeContext';

const AudioEngine = dynamic(() => import('@/components/AudioEngine'), { ssr: false });
const IntroSequence = dynamic(() => import('@/components/IntroSequence'), { ssr: false });

interface HomeClientWrapperProps {
    children: React.ReactNode;
}

const HomeClientContent: React.FC<HomeClientWrapperProps> = ({ children }) => {
    const [showIntro, setShowIntro] = useState(true);
    const { 
        isPlaying, setIsPlaying, 
        isVoicePlaying, 
        isResumeOpen, setIsResumeOpen 
    } = useHomeContext();

    const handleStart = (audio: boolean) => {
        setIsPlaying(audio);
        setShowIntro(false);
    };

    return (
        <Flex fillWidth direction="column" horizontal="center">
            {showIntro && <IntroSequence onStart={handleStart} />}
            {!showIntro && (
                <>
                    <div className="audio-visualizer-wrapper">
                        <AudioEngine
                            isDucked={isVoicePlaying}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    </div>
                    
                    {children}

                    <Dialog
                        isOpen={isResumeOpen}
                        onClose={() => setIsResumeOpen(false)}
                        title="Darling Fajardo - Curriculum Vitae"
                    >
                        <Column fillWidth gap="32" padding="l">
                            <Column gap="16">
                                <Heading variant="display-default-xs">Summary</Heading>
                                <Text variant="body-default-m" onBackground="neutral-medium">
                                    Dedicated Software Developer with over 3 years of experience in building scalable web applications and intuitive user interfaces. Expert in React, Next.js, and modern CSS architectures.
                                </Text>
                            </Column>

                            <Column gap="24">
                                <Heading variant="display-default-xs">Expertise</Heading>
                                <SkillsSection />
                            </Column>

                            <Flex fillWidth paddingY="24" borderTop="neutral-alpha-weak" horizontal="between" vertical="center">
                                <Text variant="body-default-s" onBackground="neutral-weak">
                                    Ready to download?
                                </Text>
                                <Button
                                    variant="secondary"
                                    onClick={() => window.open('/resume.pdf')}
                                >
                                    <Flex gap="8" vertical="center">
                                        <Icon name="download" size="s" />
                                        Download PDF
                                    </Flex>
                                </Button>
                            </Flex>
                        </Column>
                    </Dialog>
                </>
            )}
        </Flex>
    );
};

export const HomeClientWrapper: React.FC<HomeClientWrapperProps> = ({ children }) => (
    <HomeProvider>
        <HomeClientContent>{children}</HomeClientContent>
    </HomeProvider>
);
