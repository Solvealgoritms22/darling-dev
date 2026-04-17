"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Icon, Flex } from '@once-ui-system/core';

interface AudioEngineProps {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    isDucked?: boolean;
}

const AudioEngine: React.FC<AudioEngineProps> = ({ isPlaying, setIsPlaying, isDucked }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = isDucked ? 0.1 : 0.4;
        }
    }, [isDucked]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                if (!hasLoaded) {
                    // One-time initialization of the source to avoid downloading 3.4MB on mount
                    audio.src = "/sound/interstellar.mp3";
                    audio.load();
                    setHasLoaded(true);
                }
                audio.play().catch(e => console.log("Audio playback failed:", e));
            } else {
                audio.pause();
            }
        }
        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, [isPlaying, hasLoaded]);

    return (
        <Flex
            position="fixed"
            top="0"
            left="50%"
            style={{ transform: 'translateX(-50%)', zIndex: 100, marginTop: '12px' }}
        >
            <Flex
                as="button"
                onClick={() => setIsPlaying(!isPlaying)}
                padding="12"
                radius="full"
                border="neutral-alpha-weak"
                vertical="center"
                horizontal="center"
                className="interactive"
                style={{
                    cursor: 'pointer',
                    background: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    width: '44px',
                    height: '44px',
                    outline: 'none',
                    transition: 'all 0.2s'
                }}
            >
                {isPlaying ? (
                    <div className="audio-visualizer">
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                    </div>
                ) : (
                    <Icon
                        name="volume-off"
                        size="s"
                        style={{ color: 'white' }}
                    />
                )}
            </Flex>
            <audio
                ref={audioRef}
                loop
                preload="none"
                style={{ display: 'none' }}
            />
        </Flex>
    );
};

export default AudioEngine;
