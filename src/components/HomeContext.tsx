"use client";

import React, { createContext, useContext, useState, useRef } from 'react';

interface HomeContextType {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    isVoicePlaying: boolean;
    toggleVoice: () => void;
    isResumeOpen: boolean;
    setIsResumeOpen: (open: boolean) => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isVoicePlaying, setIsVoicePlaying] = useState(false);
    const voiceAudioRef = useRef<HTMLAudioElement | null>(null);

    const toggleVoice = () => {
        if (!voiceAudioRef.current) {
            voiceAudioRef.current = new Audio('/sound/voz_ingles.mp3');
            voiceAudioRef.current.onended = () => setIsVoicePlaying(false);
        }

        if (isVoicePlaying) {
            voiceAudioRef.current.pause();
            setIsVoicePlaying(false);
        } else {
            voiceAudioRef.current.play();
            setIsVoicePlaying(true);
        }
    };

    return (
        <HomeContext.Provider value={{ 
            isPlaying, 
            setIsPlaying, 
            isVoicePlaying, 
            toggleVoice, 
            isResumeOpen, 
            setIsResumeOpen 
        }}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (context === undefined) {
        throw new Error('useHomeContext must be used within a HomeProvider');
    }
    return context;
};
