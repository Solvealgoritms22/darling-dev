"use client";

import React from 'react';
import { Flex, Column, Heading, Text, Badge } from "@once-ui-system/core";
import { services } from "@/resources/content";
import { FiLayout, FiServer, FiHexagon } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
    layout: <FiLayout size={24} color="var(--neutral-on-background-strong)" />,
    server: <FiServer size={24} color="var(--neutral-on-background-strong)" />,
    diamond: <FiHexagon size={24} color="var(--neutral-on-background-strong)" />
};

export const ServicesSection = () => {
    return (
        <Flex
            fillWidth
            maxWidth="xl"
            direction="column"
            gap="40"
            className="section-padding"
            paddingX="l"
            horizontal="center"
        >
            <Column gap="12" horizontal="start" fillWidth className="mobile-center">
                <Badge
                    textVariant="code-default-xs"
                    border="neutral-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    style={{ width: 'fit-content' }}
                >
                    Services
                </Badge>
                <Heading variant="display-default-xs">What I Do</Heading>
            </Column>

            <Flex fillWidth gap="24" m={{ direction: 'column' }}>
                {services.map((service, index) => (
                    <Column
                        key={index}
                        flex={1}
                        gap="16"
                        padding="24"
                        radius="l"
                        background="surface"
                        style={{
                            background: 'var(--neutral-alpha-weak)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--neutral-alpha-medium)'
                        }}
                    >
                        <Flex
                            padding="12"
                            radius="m"
                            background="neutral-alpha-medium"
                            style={{ width: 'fit-content' }}
                        >
                            {iconMap[service.icon] || iconMap['diamond']}
                        </Flex>
                        <Heading variant="heading-default-s">{service.title}</Heading>
                        <Text variant="body-default-m" onBackground="neutral-medium">
                            {service.description}
                        </Text>
                    </Column>
                ))}
            </Flex>
        </Flex>
    );
};
