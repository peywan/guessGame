import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <Button title="Quiz" onPress={() => navigation.navigate('Quiz')} />
            <Button title="Manage Questions" onPress={() => navigation.navigate('Manage Questions')} />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#eee',
        padding: 10,
    },
});
