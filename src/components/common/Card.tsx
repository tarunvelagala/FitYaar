/**
 * Card Component
 * Pastel background cards with rounded corners
 */

import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { colors, borderRadius, padding } from '../../theme';

type CardColor = keyof typeof colors.card;

interface CardProps extends ViewProps {
    color?: CardColor;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    color = 'blue',
    style,
    children,
    ...props
}) => {
    return (
        <View
            style={[
                styles.card,
                { backgroundColor: colors.card[color] },
                style,
            ]}
            {...props}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: borderRadius.xl,
        padding: padding.card,
    },
});
