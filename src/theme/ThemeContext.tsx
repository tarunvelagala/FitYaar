// src/theme/ThemeContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';
import { ThemeContextType } from './types';

// Create the Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // This hook listens to the system setting (e.g., iOS Control Center)
    const systemColorScheme = useColorScheme();

    // Manage theme state manually to allow toggling
    // Initialize with system preference or default to light
    const [manualOverride, setManualOverride] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(systemColorScheme || 'light');

    // Sync with system theme changes (unless manually overridden)
    useEffect(() => {
        if (!manualOverride && systemColorScheme) {
            setTheme(systemColorScheme);
        }
    }, [systemColorScheme, manualOverride]);

    const isDark = theme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    const toggleTheme = () => {
        setManualOverride(true); // User manually toggled, stop syncing with system
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = {
        colors,
        isDark,
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create a custom hook for easy usage
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};