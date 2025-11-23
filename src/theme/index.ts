/**
 * FitYaar Theme
 * Central export for all theme tokens
 */

export { colors } from './colors';
export { typography, fontFamily, fontWeight } from './typography';
export { spacing, padding, borderRadius } from './spacing';

// Complete theme object
import { colors } from './colors';
import { typography } from './typography';
import { spacing, padding, borderRadius } from './spacing';

export const theme = {
    colors,
    typography,
    spacing,
    padding,
    borderRadius,
} as const;

export type Theme = typeof theme;
