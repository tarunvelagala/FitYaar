/**
 * FitYaar Color Palette
 * iOS-Inspired Minimalist Design with Pastel Cards
 */

export const colors = {
    // Backgrounds
    background: {
        primary: '#FFFFFF',
        secondary: '#F5F5F7',
        tertiary: '#E8E8ED',
    },

    // Pastel Card Colors
    card: {
        blue: '#D4E7F7',
        beige: '#F5EFE7',
        green: '#E3F5E8',
        yellow: '#FFF9E3',
        pink: '#FFE8F0',
        purple: '#EDE7F6',
    },

    // Functional Colors
    functional: {
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#007AFF',
    },

    // Text Colors
    text: {
        primary: '#000000',
        secondary: '#6B6B6B',
        tertiary: '#999999',
    },

    // Accents
    accent: {
        black: '#000000',
        gray: '#8E8E93',
    },
} as const;

// Type for color keys
export type ColorKey = keyof typeof colors;
