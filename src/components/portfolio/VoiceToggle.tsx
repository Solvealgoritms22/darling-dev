"use client";

import React from 'react';
import { Flex, Button, Icon } from "@once-ui-system/core";
import { useHomeContext } from '@/components/HomeContext';

export const VoiceToggle = () => {
    const { isVoicePlaying, toggleVoice } = useHomeContext();

    return (
        <Flex gap="24" vertical="center" horizontal="start" m={{ horizontal: 'center' }} paddingY="8">
            <Button
                variant="secondary"
                onClick={toggleVoice}
                style={{ height: '36px', borderRadius: '9999px', padding: '0 16px' }}
            >
                <Flex gap="8" vertical="center">
                    <Icon name={isVoicePlaying ? "pause" : "play"} size="xs" />
                    {isVoicePlaying ? "Pause" : "Play"}
                </Flex>
            </Button>
            <Flex gap="4" vertical="center" height="16">
                {[10, 14, 18, 22, 18, 14, 18, 24, 18, 14, 10, 12, 18, 14, 18, 12].map((height, j) => (
                    <Flex
                        key={j}
                        style={{
                            width: '2px',
                            height: isVoicePlaying ? '100%' : `${height}px`,
                            maxHeight: '100%',
                            background: 'var(--neutral-on-background-strong)',
                            opacity: isVoicePlaying ? 0.8 : 0.15,
                            borderRadius: '1px',
                            animation: isVoicePlaying ? `equalize 1s infinite ${j * 0.1}s` : 'none',
                            transition: 'height 0.3s ease, opacity 0.3s ease'
                        }}
                    />
                ))}
            </Flex>
        </Flex>
    );
};
