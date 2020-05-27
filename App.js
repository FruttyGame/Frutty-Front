import React from 'react';
import LoginUI from './src/Screens/Login/LoginUI';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import { View, Text } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
   
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
    headerShown: false
  }}
>

    <Stack.Screen name="LoginUI" component={LoginUI}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}