// src/components/common/Input/NumberInput.tsx

import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius, typography, touchTarget } from '@theme/constants';
import { lightImpact } from '@utils/haptics';
import { NumberInputProps } from './Input.types';

/**
 * NumberInput component with increment/decrement buttons
 */
export const NumberInput: React.FC<NumberInputProps> = ({
    label,
    value,
    onChangeValue,
    min,
    max,
    step = 1,
    unit,
    showButtons = true,
    disabled = false,
    style,
}) => {
    const { colors } = useTheme();

    const numericValue = typeof value === 'string' ? parseFloat(value) || 0 : value;

    const handleIncrement = () => {
        const newValue = numericValue + step;
        if (max === undefined || newValue <= max) {
            onChangeValue(newValue);
            lightImpact();
        }
    };

    const handleDecrement = () => {
        const newValue = numericValue - step;
        if (min === undefined || newValue >= min) {
            onChangeValue(newValue);
            lightImpact();
        }
    };

    const handleChangeText = (text: string) => {
        const parsed = parseFloat(text);
        if (!isNaN(parsed)) {
            if ((min === undefined || parsed >= min) && (max === undefined || parsed <= max)) {
                onChangeValue(parsed);
            }
        } else if (text === '') {
            onChangeValue(0);
        }
    };

    const isDecrementDisabled = disabled || (min !== undefined && numericValue <= min);
    const isIncrementDisabled = disabled || (max !== undefined && numericValue >= max);

    return (
        <View style={[styles.container, style]}>
            {label && (
                <Text style={[styles.label, { color: colors.textPrimary }]}>
                    {label}
                </Text>
            )}

            <View style={styles.inputRow}>
                {showButtons && (
                    <Pressable
                        onPress={handleDecrement}
                        disabled={isDecrementDisabled}
                        style={[
                            styles.button,
                            {
                                backgroundColor: colors.card,
                                borderColor: colors.border,
                            },
                            isDecrementDisabled && styles.buttonDisabled,
                        ]}
                    >
                        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>
                            −
                        </Text>
                    </Pressable>
                )}

                <View
                    style={[
                        styles.inputContainer,
                        {
                            backgroundColor: disabled ? colors.disabled : colors.card,
                            borderColor: colors.border,
                        },
                        !showButtons && styles.inputContainerFull,
                    ]}
                >
                    <RNTextInput
                        style={[
                            styles.input,
                            {
                                color: colors.textPrimary,
                            },
                        ]}
                        value={numericValue.toString()}
                        onChangeText={handleChangeText}
                        keyboardType="numeric"
                        editable={!disabled}
                    />
                    {unit && (
                        <Text style={[styles.unit, { color: colors.textSecondary }]}>
                            {unit}
                        </Text>
                    )}
                </View>

                {showButtons && (
                    <Pressable
                        onPress={handleIncrement}
                        disabled={isIncrementDisabled}
                        style={[
                            styles.button,
                            {
                                backgroundColor: colors.card,
                                borderColor: colors.border,
                            },
                            isIncrementDisabled && styles.buttonDisabled,
                        ]}
                    >
                        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>
                            +
                        </Text>
                    </Pressable>
                )}
            </View>
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
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: touchTarget.minimum,
        height: touchTarget.minimum,
        borderRadius: borderRadius.medium,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.3,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: borderRadius.medium,
        borderWidth: 1,
        paddingHorizontal: spacing.lg,
        height: touchTarget.minimum,
        marginHorizontal: spacing.sm,
    },
    inputContainerFull: {
        marginHorizontal: 0,
    },
    input: {
        flex: 1,
        fontSize: typography.body.fontSize,
        textAlign: 'center',
    },
    unit: {
        fontSize: typography.body.fontSize,
        marginLeft: spacing.xs,
    },
});
