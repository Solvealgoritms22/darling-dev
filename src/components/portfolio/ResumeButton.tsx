"use client";

import React from 'react';
import { Button, Flex, Icon } from "@once-ui-system/core";
import { useHomeContext } from '@/components/HomeContext';

export const ResumeButton = () => {
    const { setIsResumeOpen } = useHomeContext();

    return (
        <Button
            variant="primary"
            onClick={() => setIsResumeOpen(true)}
            style={{ width: 'fit-content' }}
        >
            <Flex gap="8" vertical="center">
                <Icon name="download" size="s" />
                Resume
            </Flex>
        </Button>
    );
};
