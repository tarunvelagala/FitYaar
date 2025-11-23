/**
 * Button Component
 * Primary (black circular), Secondary (white with border), and Text variants
 */

import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    ActivityIndicator,
    View,
} from 'react-native';
import { Text } from './Text';
import { colors, borderRadius, spacing } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps extends TouchableOpacityProps {
    variant?: ButtonVariant;
    children: React.ReactNode;
    loading?: boolean;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    loading = false,
    icon,
    style,
    disabled,
    ...props
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primary;
            case 'secondary':
                return styles.secondary;
            case 'text':
                return styles.text;
            default:
                return styles.primary;
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'primary':
                return colors.background.primary;
            case 'secondary':
            case 'text':
                return colors.text.primary;
            default:
                return colors.background.primary;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.base,
                getButtonStyle(),
                disabled && styles.disabled,
                style,
            ]}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <View style={styles.content}>
                    {icon && <View style={styles.icon}>{icon}</View>}
                    {typeof children === 'string' ? (
                        <Text variant="subheading" color={getTextColor()}>
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xxl,
        borderRadius: borderRadius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
    },
    primary: {
        backgroundColor: colors.accent.black,
    },
    secondary: {
        backgroundColor: colors.background.primary,
        borderWidth: 2,
        borderColor: colors.accent.black,
    },
    text: {
        backgroundColor: 'transparent',
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        minHeight: 'auto',
    },
    disabled: {
        opacity: 0.5,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: spacing.sm,
    },
});
