import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import QuestionItem from '../components/QuestionItem';

export default function ManageQuestionsScreen({ questions, setQuestions }) {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctOption, setCorrectOption] = useState("");

    const handleAddQuestion = () => {
        const newQuestion = {
            question,
            options: [option1, option2, option3, option4].filter(opt => opt),
            answer: correctOption
        };

        if (newQuestion.options.length < 2) {
            Alert.alert("Invalid Input", "Please provide at least 2 options.");
            return;
        }

        if (!question || !correctOption || !newQuestion.options.includes(correctOption)) {
            Alert.alert("Invalid Input", "Please provide a question, correct answer, and ensure the correct answer is one of the options.");
            return;
        }

        setQuestions([...questions, newQuestion]);
        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setCorrectOption("");
    };

    const handleDeleteQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage Questions</Text>
            <TextInput placeholder="Question" value={question} onChangeText={setQuestion} style={styles.input} />
            <TextInput placeholder="Option 1" value={option1} onChangeText={setOption1} style={styles.input} />
            <TextInput placeholder="Option 2" value={option2} onChangeText={setOption2} style={styles.input} />
            <TextInput placeholder="Option 3" value={option3} onChangeText={setOption3} style={styles.input} />
            <TextInput placeholder="Option 4" value={option4} onChangeText={setOption4} style={styles.input} />
            <TextInput placeholder="Correct Option" value={correctOption} onChangeText={setCorrectOption} style={styles.input} />
            <Button title="Add Question" onPress={handleAddQuestion} />
            <FlatList
                data={questions}
                renderItem={({ item, index }) => (
                    <QuestionItem question={item} onDelete={() => handleDeleteQuestion(index)} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,  // Padding to avoid dynamic island
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        padding: 8,
    },
});
