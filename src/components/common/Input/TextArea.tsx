// src/components/common/Input/TextArea.tsx

import React from 'react';
import { View, TextInput as RNTextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius, typography } from '@theme/constants';
import { TextAreaProps } from './Input.types';

/**
 * TextArea component for multi-line text input
 */
export const TextArea: React.FC<TextAreaProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    error,
    helperText,
    maxLength,
    showCharacterCount = false,
    minLines = 4,
    disabled = false,
    style,
}) => {
    const { colors } = useTheme();

    const characterCount = value.length;
    const showCount = showCharacterCount && (maxLength !== undefined || characterCount > 0);

    return (
        <View style={[styles.container, style]}>
            {label && (
                <View style={styles.labelRow}>
                    <Text style={[styles.label, { color: colors.textPrimary }]}>
                        {label}
                    </Text>
                    {showCount && (
                        <Text style={[styles.characterCount, { color: colors.textSecondary }]}>
                            {characterCount}
                            {maxLength && `/${maxLength}`}
                        </Text>
                    )}
                </View>
            )}

            <View
                style={[
                    styles.textAreaContainer,
                    {
                        backgroundColor: disabled ? colors.disabled : colors.card,
                        borderColor: error ? colors.error : colors.border,
                    },
                ]}
            >
                <RNTextInput
                    style={[
                        styles.textArea,
                        {
                            color: colors.textPrimary,
                            minHeight: minLines * 20,
                        },
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={colors.textSecondary}
                    editable={!disabled}
                    multiline
                    maxLength={maxLength}
                    textAlignVertical="top"
                />
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
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    label: {
        fontSize: typography.body.fontSize,
        fontWeight: '600',
    },
    characterCount: {
        fontSize: typography.caption.fontSize,
    },
    textAreaContainer: {
        borderRadius: borderRadius.medium,
        borderWidth: 1,
        padding: spacing.lg,
    },
    textArea: {
        fontSize: typography.body.fontSize,
        lineHeight: typography.body.lineHeight,
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
