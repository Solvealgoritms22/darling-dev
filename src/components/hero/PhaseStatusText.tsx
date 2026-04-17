"use client";

import React from 'react';
import { ShineFx, LetterFx } from "@once-ui-system/core";

export const PhaseStatusText = () => {
    return (
        <ShineFx variant="code-default-xs">
            <LetterFx
                speed="slow"
                trigger="custom"
                onTrigger={(trigger) => {
                    const interval = setInterval(trigger, 10000);
                    return () => clearInterval(interval);
                }}
                charset={"X$@aHz0y#?*01+".split('')}>
                Building the infrastructure.
            </LetterFx>
        </ShineFx>
    );
};
