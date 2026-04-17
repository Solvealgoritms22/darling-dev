"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' || 
                target.tagName === 'A' || 
                target.closest('button') || 
                target.closest('a') ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 6,
                    height: 6,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.3 : 0.6,
                }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 32,
                    height: 32,
                    border: '1.5px solid white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
};

export default CustomCursor;
