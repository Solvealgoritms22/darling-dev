"use client";

import React, { useState } from 'react';
import { Media, Skeleton } from '@once-ui-system/core';

const isSvg = (src?: string) =>
    typeof src === 'string' && src.toLowerCase().endsWith('.svg');

/**
 * SmartMedia — skeleton loader wrapper for Once UI's Media component.
 *
 * Architecture notes:
 * - onLoad is passed DIRECTLY to <Media> (not on a parent div) because the
 *   `load` event does NOT bubble in the DOM / React. A parent div's onLoad
 *   will never fire for child images.
 * - SVGs and priority images skip the skeleton entirely — they appear instantly.
 * - We do NOT control the `loading` prop; Next.js Image handles lazy loading
 *   natively (lazy by default, preloaded when priority=true is set).
 */
export const SmartMedia: React.FC<React.ComponentProps<typeof Media>> = (props) => {
    const skipSkeleton = !!props.priority || isSvg(props.src as string);
    const [isLoaded, setIsLoaded] = useState(skipSkeleton);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {!isLoaded && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                    <Skeleton shape="block" fillWidth style={{ height: '100%' }} />
                </div>
            )}
            <Media
                {...props}
                aspectRatio={props.aspectRatio || (props.fill ? '16 / 9' : undefined)}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                {...({ fetchPriority: props.priority ? 'high' : undefined } as any)}
                style={{
                    ...props.style,
                    opacity: isLoaded ? 1 : 0,
                    transition: skipSkeleton ? 'none' : 'opacity 0.35s ease-in-out',
                }}
            />
        </div>
    );
};
