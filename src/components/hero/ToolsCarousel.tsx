"use client";

import React from 'react';
import { Flex, Text, Fade, AutoScroll, Icon, Media } from "@once-ui-system/core";
import { SmartMedia } from '@/components/SmartMedia';

// Each tool item — extracted to reduce repetition
const ToolItem = ({ icon, label, children }: { icon?: string; label: string; children?: React.ReactNode }) => (
    <Flex gap="12" vertical="center" direction="row" m={{ direction: 'column' }} className="tool-item">
        <Flex
            horizontal="center"
            vertical="center"
            className="tool-icon macro-icon"
        >
            {children || (icon && <Icon name={icon as any} size="l" onBackground="neutral-medium" />)}
        </Flex>
        <Text variant="label-default-xs" onBackground="neutral-strong" className="tool-label">
            {label}
        </Text>
    </Flex>
);

export const ToolsCarousel = () => {
    return (
        <Flex fillWidth className="tools-carousel-wrapper" horizontal="center">
            <Flex
                maxWidth="m"
                fillWidth
                position="relative"
                direction="column"
                horizontal="center"
            >
                <Fade zIndex="1" to="right" fillHeight width="64" position="absolute" left="0" top="0" />
                <AutoScroll gap="104" paddingY="32" speed="slow" className="tools-autoscroll">
                    <ToolItem icon="vscode" label="VS Code" />
                    <ToolItem label="Antigravity">
                        <SmartMedia src="/trademarks/antigravity.svg" />
                    </ToolItem>
                    <ToolItem icon="github" label="GitHub Desktop" />
                    <ToolItem icon="drawio" label="Draw.io" />
                    <ToolItem label="OpenClaw">
                        <SmartMedia src="/trademarks/openclaw.svg" />
                    </ToolItem>
                    <ToolItem icon="sqlserver" label="SQL Server Studio" />
                </AutoScroll>
                <Fade zIndex="1" to="left" fillHeight width="64" position="absolute" right="0" top="0" />
            </Flex>
        </Flex>
    );
};
