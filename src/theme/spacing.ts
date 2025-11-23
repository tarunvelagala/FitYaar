/**
 * FitYaar Spacing System
 * Generous spacing for clean, minimalist layouts
 */

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 40,
} as const;

// Common padding values
export const padding = {
    screen: spacing.xl, // 20px - Standard screen padding
    card: spacing.xxl, // 24px - Card internal padding
    element: spacing.lg, // 16px - Between elements
    cardSpacing: spacing.xl, // 20px - Between cards
} as const;

// Border radius values
export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    round: 999, // For circular elements
} as const;

export type SpacingKey = keyof typeof spacing;
