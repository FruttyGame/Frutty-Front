
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class HomeScreen extends Component {

  render() {
      return (
        <View style= {styles.container}>
          <Text>Abdulmajeed</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#a51268',
    flex: 1
  }
})
