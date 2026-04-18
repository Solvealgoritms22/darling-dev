"use client";

import React, { useState } from 'react';
import { Flex, Row, Column, Heading, Text, Badge, Icon } from "@once-ui-system/core";
import { AnimatePresence, motion } from 'framer-motion';
import { experience } from "@/resources/content";
import { FiCode } from 'react-icons/fi';

export const ExperienceSection = () => {
    const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

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
                    Work History
                </Badge>
                <Heading variant="display-default-xs">Professional Experience</Heading>
            </Column>

            <Column fillWidth gap="32">
                {experience.map((exp, i) => (
                    <Column
                        key={i}
                        fillWidth
                        gap="16"
                        padding="24"
                        border="neutral-alpha-weak"
                        radius="l"
                        background="neutral-alpha-weak"
                        className="education-center-item"
                        style={{
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                        onClick={() => setExpandedCompany(expandedCompany === exp.company ? null : exp.company)}
                    >
                        <Row horizontal="between" vertical="center" fillWidth>
                            <Row gap="16" vertical="center">
                                {/* Use an Icon placeholder if no logo is available, else render logo */}
                                <Flex
                                    className="logo-container"
                                    horizontal="center"
                                    vertical="center"
                                    background="neutral-alpha-medium"
                                    style={{
                                        width: 64,
                                        height: 64,
                                        flexShrink: 0,
                                        borderRadius: 'var(--radius-m)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {exp.logo === 'FiCode' ? (
                                        <FiCode size={28} color="var(--neutral-on-background-strong)" />
                                    ) : exp.logo && exp.logo.includes('placeholder') ? (
                                        <Icon name="briefcase" size="l" onBackground="neutral-strong" />
                                    ) : (
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    )}
                                </Flex>
                                <Column gap="4">
                                    <Heading variant="heading-default-s">{exp.company}</Heading>
                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                        {exp.items[0].role}
                                    </Text>
                                </Column>
                            </Row>
                            <Icon
                                name="chevron-right"
                                size="s"
                                style={{
                                    transform: expandedCompany === exp.company ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s'
                                }}
                            />
                        </Row>

                        <AnimatePresence>
                            {expandedCompany === exp.company && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Column
                                        gap="24"
                                        paddingTop="24"
                                        borderTop="neutral-alpha-weak"
                                        paddingRight="12"
                                    >
                                        {exp.items.map((item, j) => (
                                            <Column key={j} gap="8" fillWidth>
                                                <Row fillWidth horizontal="between" vertical="start" m={{ direction: 'column' }} gap="4">
                                                    <Text variant="body-default-m" onBackground="neutral-strong">
                                                        {item.role}
                                                    </Text>
                                                    <Text variant="code-default-xs" onBackground="brand-weak">
                                                        {item.period}
                                                    </Text>
                                                </Row>
                                                <Text variant="body-default-s" onBackground="neutral-medium">
                                                    {item.description}
                                                </Text>
                                                {item.achievements && (
                                                    <Column gap="4" paddingLeft="m">
                                                        {item.achievements.map((ach, k) => (
                                                            <Row key={k} gap="8" vertical="start">
                                                                <Text variant="body-default-s" onBackground="brand-weak">•</Text>
                                                                <Text variant="body-default-s" onBackground="neutral-weak">
                                                                    {ach}
                                                                </Text>
                                                            </Row>
                                                        ))}
                                                    </Column>
                                                )}
                                            </Column>
                                        ))}
                                    </Column>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Column>
                ))}
            </Column>
        </Flex>
    );
};
