import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function QuestionItem({ question, onDelete }) {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.options.map((option, index) => (
                <Text key={index} style={styles.optionText}>
                    {index + 1}. {option}
                </Text>
            ))}
            <Text style={styles.answerText}>Correct Answer: {question.answer}</Text>
            <Button title="Delete" onPress={onDelete} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    optionText: {
        fontSize: 16,
    },
    answerText: {
        fontSize: 16,
        color: 'green',
    },
});
