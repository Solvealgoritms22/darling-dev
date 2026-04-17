"use client";

import React, { useEffect, useState } from 'react';

interface LetterRevealProps {
    text: string;
    trigger?: boolean;
    delay?: number;
    stagger?: number;
    highlights?: string[];
    onComplete?: () => void;
}

export const LetterReveal: React.FC<LetterRevealProps> = ({
    text,
    trigger = true,
    delay = 0,
    stagger = 35,
    highlights = [],
    onComplete
}) => {
    const [isEntered, setIsEntered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(() => {
                setIsEntered(true);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            setIsEntered(false);
        }
    }, [trigger, delay]);

    useEffect(() => {
        if (isEntered && onComplete) {
            const totalDuration = delay + (text.length * stagger) + 600; // 600ms is the CSS transition duration
            const timer = setTimeout(onComplete, totalDuration);
            return () => clearTimeout(timer);
        }
    }, [isEntered, text.length, stagger, delay, onComplete]);

    const words = text.split(' ');

    let letterIndex = 0;

    return (
        <span className="letter-reveal-wrapper">
            {words.map((word, wordIdx) => (
                <span key={wordIdx} className="letter-reveal-word">
                    {word.split('').map((char, charIdx) => {
                        const currentDelay = letterIndex * stagger;
                        const exitDelay = isMounted ? Math.random() * 300 : 0;
                        letterIndex++;
                        
                        const isHighlighted = highlights.some(h => 
                            word.toLowerCase().includes(h.toLowerCase())
                        );

                        return (
                            <span
                                key={charIdx}
                                className={`letter-reveal-letter ${isEntered ? 'entering' : ''} ${isHighlighted ? 'highlight' : ''}`}
                                style={{
                                    ['--entry-delay' as any]: `${currentDelay}ms`,
                                    ['--exit-delay' as any]: `${exitDelay}ms`
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                </span>
            ))}
        </span>
    );
};
