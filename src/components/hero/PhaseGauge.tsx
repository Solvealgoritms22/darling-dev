"use client";

import React, { useState, useEffect } from 'react';
import { Flex } from "@once-ui-system/core";

const BAR_COUNT = 32; // Optimized for a cleaner layout

export const PhaseGauge = () => {
    const [activeBars, setActiveBars] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBars((prev) => {
                let next = prev + direction;
                if (next >= BAR_COUNT) {
                    setDirection(-1);
                    return BAR_COUNT;
                }
                if (next <= 0) {
                    setDirection(1);
                    return 0;
                }
                return next;
            });
        }, 60); // Controlled speed for a "normal" pace
        return () => clearInterval(interval);
    }, [direction]);

    return (
        <Flex fillWidth gap="4" style={{ height: '32px', alignItems: 'stretch' }}>
            {[...Array(BAR_COUNT)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: '2px',
                        flex: '0 0 2px',
                        background: i < activeBars
                            ? 'var(--neutral-on-background-strong)'
                            : 'var(--neutral-alpha-weak)',
                        opacity: i < activeBars ? 1 : 0.15,
                        borderRadius: '1px',
                        transition: 'background 0.2s ease, opacity 0.2s ease'
                    }}
                />
            ))}
        </Flex>
    );
};
