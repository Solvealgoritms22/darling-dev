"use client";

import React, { useState } from 'react';
import { Flex, Row, Column, Heading, Text, Badge, Icon, Button, Dialog } from "@once-ui-system/core";
import { AnimatePresence, motion } from 'framer-motion';
import { education } from "@/resources/content";

/**
 * EducationSection — performance notes:
 * - Logos are rendered as native <img> tags (not SmartMedia) because:
 *   1. They are SVGs, which render inline and don't need skeleton loaders.
 *   2. The first 2 logos use `fetchpriority="high"` for immediate load.
 *   3. The rest use `loading="lazy"` to defer network requests.
 * - The uasd.svg is 154KB and may load slowly — consider optimizing it separately.
 */
export const EducationSection = () => {
    const [expandedCenter, setExpandedCenter] = useState<string | null>(null);
    const [activeCertificate, setActiveCertificate] = useState<{ title: string; pdf: string } | null>(null);

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
                    Academic
                </Badge>
                <Heading variant="display-default-xs">Education & Certificates</Heading>
            </Column>

            <Column fillWidth gap="32">
                {education.map((center, i) => (
                    <Column
                        key={i}
                        fillWidth
                        gap="16"
                        padding="24"
                        border="neutral-alpha-weak"
                        radius="l"
                        background="neutral-alpha-weak"
                        className={center.locked ? "" : "education-center-item"}
                        style={{
                            cursor: center.locked ? 'default' : 'pointer',
                            transition: 'background 0.3s',
                            opacity: center.locked ? 0.6 : 1
                        }}
                        onClick={() => !center.locked && setExpandedCenter(expandedCenter === center.institution ? null : center.institution)}
                    >
                        <Row horizontal="between" vertical="center" fillWidth>
                            <Row gap="16" vertical="center">
                                {/* Native <img> for maximum load speed — SVGs don't benefit from
                                    SmartMedia's skeleton or Next.js image optimization pipeline */}
                                <Flex
                                    className="logo-container"
                                    style={{
                                        width: 96,
                                        height: 96,
                                        flexShrink: 0,
                                        overflow: 'hidden',
                                        borderRadius: 'var(--radius-m)'
                                    }}
                                >
                                    <img
                                        src={center.logo}
                                        alt={center.institution}
                                        width={96}
                                        height={96}
                                        loading={i < 2 ? undefined : "lazy"}
                                        className="logo-filter"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                            filter: center.locked ? 'grayscale(1)' : undefined
                                        }}
                                    />
                                </Flex>
                                <Column gap="4">
                                    <Heading variant="heading-default-s">{center.institution}</Heading>
                                    <Text variant="body-default-s" onBackground="neutral-weak">{center.description}</Text>
                                </Column>
                            </Row>
                            {!center.locked && (
                                <Icon
                                    name="chevron-right"
                                    size="s"
                                    style={{
                                        transform: expandedCenter === center.institution ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s'
                                    }}
                                />
                            )}
                        </Row>

                        <AnimatePresence>
                            {expandedCenter === center.institution && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Column
                                        gap="16"
                                        paddingTop="24"
                                        borderTop="neutral-alpha-weak"
                                        paddingRight="12"
                                        style={{
                                            maxHeight: center.items.length > 2 ? '420px' : 'none',
                                            overflowY: center.items.length > 2 ? 'auto' : 'visible',
                                            overflowX: 'hidden'
                                        }}
                                    >
                                        {center.items.map((item, j) => (
                                            <Row key={j} fillWidth horizontal="between" vertical="center" gap="16">
                                                <Column gap="4" flex={1}>
                                                    <Text variant="body-default-m">{item.title}</Text>
                                                    <Text variant="code-default-xs" onBackground="brand-weak">{item.period}</Text>
                                                    <Text variant="body-default-s" onBackground="neutral-medium">{item.description}</Text>
                                                </Column>
                                                {item.pdf && (
                                                    <Button
                                                        variant="secondary"
                                                        size="s"
                                                        onClick={(e: React.MouseEvent) => {
                                                            e.stopPropagation();
                                                            setActiveCertificate({ title: item.title, pdf: item.pdf! });
                                                        }}
                                                    >
                                                        <Flex gap="8" vertical="center">
                                                            <Icon name="play" size="xs" />
                                                            View
                                                        </Flex>
                                                    </Button>
                                                )}
                                            </Row>
                                        ))}
                                    </Column>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Column>
                ))}
            </Column>

            <Dialog
                isOpen={!!activeCertificate}
                onClose={() => setActiveCertificate(null)}
                title={activeCertificate?.title || "Certificate Viewer"}
            >
                <Flex fillWidth height="70vh" padding="m">
                    {activeCertificate && (
                        <iframe
                            src={activeCertificate.pdf}
                            width="100%"
                            height="100%"
                            style={{ border: 'none', borderRadius: '8px' }}
                        />
                    )}
                </Flex>
            </Dialog>
        </Flex>
    );
};
