// src/components/common/Input/TextInput.tsx

import React, { useState } from 'react';
import {
    View,
    TextInput as RNTextInput,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius, typography } from '@theme/constants';
import { TextInputProps } from './Input.types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * TextInput component with label, error states, and icons
 */
export const TextInput: React.FC<TextInputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    error,
    helperText,
    leftIcon,
    rightIcon,
    showClearButton = false,
    disabled = false,
    multiline = false,
    numberOfLines = 1,
    keyboardType,
    autoCapitalize = 'sentences',
    secureTextEntry = false,
    style,
    inputStyle,
    onFocus,
    onBlur,
}) => {
    const { colors } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        onFocus?.();
    };

    const handleBlur = () => {
        setIsFocused(false);
        onBlur?.();
    };

    const handleClear = () => {
        onChangeText('');
    };

    const getBorderColor = () => {
        if (error) return colors.error;
        if (isFocused) return colors.primary;
        return colors.border;
    };

    const getBorderWidth = () => {
        return isFocused ? 2 : 1;
    };

    return (
        <View style={[styles.container, style]}>
            {label && (
                <Text style={[styles.label, { color: colors.textPrimary }]}>
                    {label}
                </Text>
            )}

            <View
                style={[
                    styles.inputContainer,
                    {
                        backgroundColor: disabled ? colors.disabled : colors.card,
                        borderColor: getBorderColor(),
                        borderWidth: getBorderWidth(),
                    },
                    multiline && styles.multilineContainer,
                ]}
            >
                {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

                <RNTextInput
                    style={[
                        styles.input,
                        {
                            color: colors.textPrimary,
                        },
                        multiline && styles.multilineInput,
                        inputStyle,
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={colors.textSecondary}
                    editable={!disabled}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                {showClearButton && value.length > 0 && !disabled && (
                    <Pressable onPress={handleClear} style={styles.clearButton}>
                        <MaterialCommunityIcons name="close-circle" size={20} color={colors.textSecondary} />
                    </Pressable>
                )}

                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            </View>

            {error && (
                <Text style={[styles.errorText, { color: colors.error }]}>
                    {error}
                </Text>
            )}

            {helperText && !error && (
                <Text style={[styles.helperText, { color: colors.textSecondary }]}>
                    {helperText}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        fontSize: typography.body.fontSize,
        fontWeight: '600',
        marginBottom: spacing.sm,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: borderRadius.medium,
        paddingHorizontal: spacing.lg,
        minHeight: 48,
    },
    multilineContainer: {
        alignItems: 'flex-start',
        paddingVertical: spacing.md,
    },
    input: {
        flex: 1,
        fontSize: typography.body.fontSize,
        paddingVertical: spacing.md,
    },
    multilineInput: {
        minHeight: 80,
        textAlignVertical: 'top',
    },
    leftIcon: {
        marginRight: spacing.sm,
    },
    rightIcon: {
        marginLeft: spacing.sm,
    },
    clearButton: {
        padding: spacing.xs,
        marginLeft: spacing.sm,
    },
    clearText: {
        fontSize: 18,
        fontWeight: '600',
    },
    errorText: {
        fontSize: typography.caption.fontSize,
        marginTop: spacing.xs,
        marginLeft: spacing.xs,
    },
    helperText: {
        fontSize: typography.caption.fontSize,
        marginTop: spacing.xs,
        marginLeft: spacing.xs,
    },
});
