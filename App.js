import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator, StackNavigator } from "react-navigation";
import HomeScreen from './src/Components/Screens/HomeScreen.js'

//Stack navigation
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

class HomeStack extends React.Component {

  render() {
    return (
      <MyStack/>
    );
  }

}


//primary switch navigation 
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      HomeScreen: HomeStack,
    },
    {
      initialRouteName: "HomeScreen"
    }
  )
);

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer/>
  
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
