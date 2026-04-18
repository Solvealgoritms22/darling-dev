"use client";

import React from 'react';
import { Flex, Row, Column, Heading, Text, Badge, Button } from "@once-ui-system/core";
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

export const ContactSection = () => {
    return (
        <Flex
            fillWidth
            maxWidth="xl"
            direction="column"
            gap="40"
            className="section-padding"
            paddingX="l"
            horizontal="center"
            id="contact"
        >
            <Column gap="12" horizontal="start" fillWidth className="mobile-center">
                <Badge
                    textVariant="code-default-xs"
                    border="neutral-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    style={{ width: 'fit-content' }}
                >
                    Contact
                </Badge>
                <Heading variant="display-default-xs">Let's Connect</Heading>
            </Column>

            <Flex
                fillWidth
                direction="row"
                m={{ direction: 'column' }}
                gap="64"
            >
                <Column flex={1} gap="24" vertical="center" horizontal="start">
                    <Text variant="body-default-l" onBackground="neutral-medium" className="text-balance">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                    </Text>
                    <Column gap="16">
                        <Row gap="16" vertical="center">
                            <Flex background="neutral-alpha-weak" padding="8" radius="m">
                                <FiMail size={20} color="var(--brand-alpha-strong)" />
                            </Flex>
                            <Text variant="body-default-m">darlingf1998@gmail.com</Text>
                        </Row>
                        <Row gap="16" vertical="center">
                            <Flex background="neutral-alpha-weak" padding="8" radius="m">
                                <FiMapPin size={20} color="var(--brand-alpha-strong)" />
                            </Flex>
                            <Text variant="body-default-m">Dominican Republic</Text>
                        </Row>
                    </Column>
                </Column>
                
                <Column flex={1} gap="16" padding="32" radius="l" background="neutral-alpha-weak" border="neutral-alpha-weak" style={{ backdropFilter: 'blur(10px)' }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            window.location.href = "mailto:darlingf1998@gmail.com";
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--neutral-on-background-weak)' }}>Name</label>
                            <input 
                                type="text"
                                required
                                placeholder="John Doe"
                                style={{
                                    background: 'var(--page-background)',
                                    border: '1px solid var(--neutral-alpha-medium)',
                                    padding: '14px 16px',
                                    borderRadius: 'var(--radius-s)',
                                    color: 'var(--neutral-on-background-strong)',
                                    outline: 'none',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--neutral-on-background-weak)' }}>Email</label>
                            <input 
                                type="email"
                                required
                                placeholder="john@example.com"
                                style={{
                                    background: 'var(--page-background)',
                                    border: '1px solid var(--neutral-alpha-medium)',
                                    padding: '14px 16px',
                                    borderRadius: 'var(--radius-s)',
                                    color: 'var(--neutral-on-background-strong)',
                                    outline: 'none',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--neutral-on-background-weak)' }}>Message</label>
                            <textarea 
                                required
                                rows={4}
                                placeholder="How can I help you?"
                                style={{
                                    background: 'var(--page-background)',
                                    border: '1px solid var(--neutral-alpha-medium)',
                                    padding: '14px 16px',
                                    borderRadius: 'var(--radius-s)',
                                    color: 'var(--neutral-on-background-strong)',
                                    outline: 'none',
                                    resize: 'vertical',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>
                        <Button variant="secondary" type="submit" style={{ marginTop: '8px' }}>
                            <Flex gap="8" vertical="center" horizontal="center" fillWidth>
                                Send Message
                                <FiSend size={16} />
                            </Flex>
                        </Button>
                    </form>
                </Column>
            </Flex>
        </Flex>
    );
};
