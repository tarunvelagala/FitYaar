// src/components/common/Input/Input.types.ts

import { ReactNode } from 'react';
import { ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';

export interface TextInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    showClearButton?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    onFocus?: () => void;
    onBlur?: () => void;
}

export interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    debounceDelay?: number;
    style?: ViewStyle;
}

export interface NumberInputProps {
    label?: string;
    value: number | string;
    onChangeValue: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    showButtons?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}

export interface TextAreaProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    helperText?: string;
    maxLength?: number;
    showCharacterCount?: boolean;
    minLines?: number;
    disabled?: boolean;
    style?: ViewStyle;
}
