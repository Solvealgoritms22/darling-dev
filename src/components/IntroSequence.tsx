"use client";

import React, { useEffect } from 'react';
import { Column, MatrixFx, Text } from '@once-ui-system/core';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
    onStart: (audio: boolean) => void;
}

const IntroSequence: React.FC<IntroSequenceProps> = ({ onStart }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onStart(false);
        }, 4000); // Cinematic 4-second sequence

        return () => clearTimeout(timer);
    }, [onStart]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'var(--page-background)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Subtle Background System Layer */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
                    <MatrixFx speed={0.5} />
                </div>

                <Column gap="32" horizontal="center" align="center" padding="l" style={{ zIndex: 1100 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div className="splash-logo-large logo-reveal logo-glitch">
                            Df
                        </div>
                        
                        <Column gap="8" horizontal="center" marginTop="24">
                            <div className="progress-bar-container">
                                <div className="progress-bar-fill" />
                            </div>
                            <Text className="system-ready-text" onBackground="neutral-weak">
                                Initializing System...
                            </Text>
                        </Column>
                    </motion.div>
                </Column>

                {/* Decorative UI elements */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', opacity: 0.3 }}>
                    <Text variant="code-default-xs">CORE_REV_4.0.1</Text>
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', opacity: 0.3 }}>
                    <Text variant="code-default-xs">DARLING_FAJARDO_OS</Text>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default IntroSequence;
