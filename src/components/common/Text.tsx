/**
 * Custom Text Component
 * Applies theme typography styles
 */

import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { typography, colors } from '../../theme';
import type { TypographyKey } from '../../theme/typography';

interface CustomTextProps extends RNTextProps {
    variant?: TypographyKey;
    color?: string;
    children: React.ReactNode;
}

export const Text: React.FC<CustomTextProps> = ({
    variant = 'body',
    color = colors.text.primary,
    style,
    children,
    ...props
}) => {
    const textStyle = typography[variant];

    return (
        <RNText
            style={[
                textStyle,
                { color },
                style,
            ]}
            {...props}
        >
            {children}
        </RNText>
    );
};
