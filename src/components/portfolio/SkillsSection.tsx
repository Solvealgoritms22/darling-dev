"use client";

import React from 'react';
import { Flex, Column, Text, Icon } from "@once-ui-system/core";
import { skills } from "@/resources/content";

export const SkillsSection = () => {
    return (
        <Flex direction="column" gap="24">
            {skills.map((category) => (
                <Column key={category.category} gap="12">
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        {category.category}
                    </Text>
                    <Flex wrap gap="12">
                        {category.skills.map((skill) => (
                            <Flex
                                key={skill.name}
                                gap="8"
                                vertical="center"
                                paddingX="12"
                                paddingY="8"
                                border="neutral-alpha-weak"
                                radius="m"
                                background="neutral-alpha-weak"
                            >
                                <Icon name={skill.icon} size="s" onBackground="neutral-medium" />
                                <Flex direction="column">
                                    <Text variant="body-default-s">{skill.name}</Text>
                                    <Text variant="code-default-xs" onBackground="neutral-weak">{skill.level}</Text>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Column>
            ))}
        </Flex>
    );
};
