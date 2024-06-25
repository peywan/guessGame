import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ManageQuestionsScreen() {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");

    const handleAddQuestion = () => {
        // Logic to add question
        console.log("Question added:", question, [option1, option2, option3, option4]);
    };

    return (
        <View style={styles.container}>
            <Text>Add a new question</Text>
            <TextInput placeholder="Question" value={question} onChangeText={setQuestion} style={styles.input} />
            <TextInput placeholder="Option 1" value={option1} onChangeText={setOption1} style={styles.input} />
            <TextInput placeholder="Option 2" value={option2} onChangeText={setOption2} style={styles.input} />
            <TextInput placeholder="Option 3" value={option3} onChangeText={setOption3} style={styles.input} />
            <TextInput placeholder="Option 4" value={option4} onChangeText={setOption4} style={styles.input} />
            <Button title="Add Question" onPress={handleAddQuestion} />
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
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        padding: 8,
    },
});
