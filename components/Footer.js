import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Manage Questions')}>
                <Text style={styles.buttonText}>Manage Questions</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2c3e50',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    button: {
        backgroundColor: '#2980b9',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
