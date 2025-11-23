/**
 * FitYaar Typography System
 * Bold, large typography for iOS-inspired minimalist design
 */

import { Platform } from 'react-native';

// Font families
export const fontFamily = {
    regular: Platform.select({
        ios: 'SF Pro Display',
        android: 'Roboto',
        default: 'System',
    }),
    semiBold: Platform.select({
        ios: 'SF Pro Display',
        android: 'Roboto',
        default: 'System',
    }),
    bold: Platform.select({
        ios: 'SF Pro Display',
        android: 'Roboto',
        default: 'System',
    }),
} as const;

// Font weights
export const fontWeight = {
    regular: '400' as const,
    semiBold: '600' as const,
    bold: '700' as const,
};

// Typography styles
export const typography = {
    // Display - Very prominent hero text (36-48px)
    display: {
        fontSize: 42,
        lineHeight: 50,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.bold,
    },

    // Headings (28-32px)
    h1: {
        fontSize: 32,
        lineHeight: 38,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.bold,
    },

    h2: {
        fontSize: 28,
        lineHeight: 34,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.bold,
    },

    // Subheadings (20-24px)
    subheading: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: fontWeight.semiBold,
        fontFamily: fontFamily.semiBold,
    },

    // Body text (16-17px)
    body: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.regular,
    },

    bodyMedium: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.regular,
    },

    // Captions (13-15px)
    caption: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.regular,
    },

    captionSmall: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: fontWeight.regular,
        fontFamily: fontFamily.regular,
    },
} as const;

export type TypographyKey = keyof typeof typography;
