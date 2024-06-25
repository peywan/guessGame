import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import ManageQuestionsScreen from '../screens/ManageQuestionsScreen';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const Stack = createStackNavigator();

const initialQuestionsList = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        answer: "Berlin"
    },
    // Add more initial questions here
];

export default function AppNavigator() {
    const [questions, setQuestions] = useState(initialQuestionsList);

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator initialRouteName="Quiz" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Quiz">
                        {props => <QuizScreen {...props} questions={questions} />}
                    </Stack.Screen>
                    <Stack.Screen name="Manage Questions">
                        {props => <ManageQuestionsScreen {...props} questions={questions} setQuestions={setQuestions} />}
                    </Stack.Screen>
                </Stack.Navigator>
                <Footer />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
