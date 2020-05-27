import React from 'react';
import LoginUI from './src/Screens/LoginUI';
import { View, Text } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
   
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="LoginUI" component={LoginUI}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}