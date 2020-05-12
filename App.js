import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, creaeSwitchNavigator} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Screens/Login/AuthScreen.js'
import AuthScreen from './Components/Screens/Login/AuthScreen.js';


const Stack = createStackNavigator();
const MainNavigator = creaeSwitchNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AuthScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});