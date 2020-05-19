import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import MainNavigator from './Navigator';
import { View, Text } from 'react-native';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

 
  return (
    <View><Text>Hello</Text></View>
  );
}