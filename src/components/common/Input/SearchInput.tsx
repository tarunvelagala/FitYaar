// src/components/common/Input/SearchInput.tsx

import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput as RNTextInput, StyleSheet, Text } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius, typography } from '@theme/constants';
import { SearchInputProps } from './Input.types';

import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * SearchInput component with debounced onChange and search icon
 */
export const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search...',
    value,
    onChangeText,
    debounceDelay = 300,
    style,
}) => {
    const { colors } = useTheme();
    const [localValue, setLocalValue] = useState(value);
    const debounceTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleChangeText = (text: string) => {
        setLocalValue(text);

        // Clear existing timeout
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        // Set new timeout
        debounceTimeout.current = setTimeout(() => {
            onChangeText(text);
        }, debounceDelay);
    };

    const handleClear = () => {
        setLocalValue('');
        onChangeText('');
    };

    // ... (inside component)

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                },
                style,
            ]}
        >
            <MaterialCommunityIcons name="magnify" size={20} color={colors.textSecondary} style={styles.searchIcon} />

            <RNTextInput
                style={[
                    styles.input,
                    {
                        color: colors.textPrimary,
                    },
                ]}
                value={localValue}
                onChangeText={handleChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textSecondary}
                autoCapitalize="none"
                autoCorrect={false}
            />

            {localValue.length > 0 && (
                <MaterialCommunityIcons
                    name="close-circle"
                    size={20}
                    color={colors.textSecondary}
                    onPress={handleClear}
                    style={styles.clearButton}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: borderRadius.circular,
        paddingHorizontal: spacing.lg,
        height: 44,
        borderWidth: 1,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: spacing.sm,
    },
    input: {
        flex: 1,
        fontSize: typography.body.fontSize,
    },
    clearButton: {
        fontSize: 18,
        fontWeight: '600',
        padding: spacing.xs,
        marginLeft: spacing.sm,
    },
});
