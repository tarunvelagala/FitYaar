import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type CardColor = keyof typeof colors.cards;

interface CardProps {
    children: React.ReactNode;
    color?: CardColor;
    style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
    children,
    color = 'blue',
    style
}) => {
    return (
        <View style={[
            styles.card,
            { backgroundColor: colors.cards[color] },
            style
        ]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 24,
        padding: 20,
    },
});
