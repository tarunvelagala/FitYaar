import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '../components/common/Card';
import { colors } from '../theme/colors';
import { typography, spacing } from '../theme/typography';

export default function HomeScreen() {
    const [counter, setCounter] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <Text style={styles.title}>FitYaar Setup Test</Text>

                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Text style={styles.logoIcon}>💪</Text>
                </View>

                {/* Success Message */}
                <Card color="green" style={styles.successCard}>
                    <Text style={styles.successIcon}>✅</Text>
                    <Text style={styles.successTitle}>🎉 Setup Working!</Text>
                    <Text style={styles.successSubtitle}>React Native + Expo running successfully</Text>
                </Card>

                {/* Counter Test */}
                <Text style={styles.sectionTitle}>Test Hot Reload:</Text>

                <Card color="blue" style={styles.counterCard}>
                    <Text style={styles.counterText}>{counter}</Text>
                </Card>

                {/* Buttons */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.cards.pink }]}
                        onPress={() => setCounter(counter - 1)}
                    >
                        <Text style={styles.buttonText}>−</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.cards.beige }]}
                        onPress={() => setCounter(0)}
                    >
                        <Text style={styles.buttonText}>↻</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.cards.green }]}
                        onPress={() => setCounter(counter + 1)}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* Instructions */}
                <Card color="purple" style={styles.instructionsCard}>
                    <Text style={styles.instructionsTitle}>✅ Test Checklist:</Text>
                    <Text style={styles.instructionItem}>• App running on phone? ✓</Text>
                    <Text style={styles.instructionItem}>• Buttons working? Tap them!</Text>
                    <Text style={styles.instructionItem}>• Press "r" in terminal for reload</Text>
                    <Text style={styles.instructionItem}>• Change code and see instant update</Text>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.primary,
    },
    scrollContent: {
        padding: spacing.xl,
        alignItems: 'center',
    },
    title: {
        ...typography.heading,
        color: colors.text.primary,
        marginBottom: spacing.xxxl,
        textAlign: 'center',
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 24,
        backgroundColor: colors.cards.purple,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.xxxl,
    },
    logoIcon: {
        fontSize: 64,
    },
    successCard: {
        alignItems: 'center',
        marginBottom: spacing.xxxl,
        width: '100%',
    },
    successIcon: {
        fontSize: 48,
        marginBottom: spacing.md,
    },
    successTitle: {
        ...typography.subheading,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    successSubtitle: {
        ...typography.caption,
        color: colors.text.secondary,
        textAlign: 'center',
    },
    sectionTitle: {
        ...typography.body,
        color: colors.text.secondary,
        marginBottom: spacing.lg,
    },
    counterCard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.xxl,
        paddingVertical: spacing.xxl,
    },
    counterText: {
        fontSize: 72,
        fontWeight: '700',
        color: colors.text.primary,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: spacing.lg,
        marginBottom: spacing.xxxl,
    },
    button: {
        width: 64,
        height: 64,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.text.primary,
    },
    instructionsCard: {
        width: '100%',
    },
    instructionsTitle: {
        ...typography.body,
        fontWeight: '700',
        color: colors.text.primary,
        marginBottom: spacing.md,
    },
    instructionItem: {
        ...typography.caption,
        color: colors.text.secondary,
        marginBottom: spacing.xs,
    },
});
