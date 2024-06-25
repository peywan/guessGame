import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function QuizScreen({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        if (selectedOption) {
            const timer = setTimeout(() => {
                goToNextQuestion();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [selectedOption]);

    const goToNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
        setSelectedOption(null);
        setFeedback(null);
    };

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (option === correctAnswer) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    const currentQuestion = questions[currentQuestionIndex];
    const { question, options, answer } = currentQuestion;

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.progress}>
                Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
            {options.map((option, index) => (
                <Button
                    key={index}
                    title={option}
                    color={option === selectedOption ? (option === answer ? 'green' : 'red') : 'blue'}
                    onPress={() => handleOptionPress(option)}
                />
            ))}
            {feedback === 'correct' && (
                <Animatable.Text animation="bounce" style={[styles.feedback, styles.correct]}>
                    Correct!
                </Animatable.Text>
            )}
            {feedback === 'incorrect' && (
                <Animatable.Text animation="shake" style={[styles.feedback, styles.incorrect]}>
                    Incorrect! The correct answer is {answer}
                </Animatable.Text>
            )}
            <Button title="Skip Question" onPress={goToNextQuestion} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 50, // Padding to avoid dynamic island
    },
    question: {
        fontSize: 24,
        marginBottom: 20,
    },
    progress: {
        fontSize: 18,
        marginBottom: 20,
    },
    feedback: {
        fontSize: 18,
        marginTop: 10,
    },
    correct: {
        color: 'green',
    },
    incorrect: {
        color: 'red',
    },
});
