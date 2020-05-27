import React from 'react';
import LoginUI from './src/Screens/LoginUI';
import { View, Text } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

export default function App() {
 
  createHomeStack = () =>
    <Stack.Navigator>
    <Stack.Screen />
    </Stack.Navigator>
  
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}