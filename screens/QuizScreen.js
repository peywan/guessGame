import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuizScreen() {
    const [question, setQuestion] = useState("What is the capital of France?");
    const [options, setOptions] = useState(["Paris", "London", "Berlin", "Madrid"]);
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={styles.container}>
            <Text>{question}</Text>
            {options.map((option, index) => (
                <Button key={index} title={option} onPress={() => setSelectedOption(option)} />
            ))}
            {selectedOption && <Text>Selected: {selectedOption}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
