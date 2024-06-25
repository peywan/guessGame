import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import ManageQuestionsScreen from '../screens/ManageQuestionsScreen';
import Footer from '../components/Footer';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Quiz">
                <Stack.Screen name="Quiz" component={QuizScreen} />
                <Stack.Screen name="Manage Questions" component={ManageQuestionsScreen} />
            </Stack.Navigator>
            <Footer />
        </NavigationContainer>
    );
}
