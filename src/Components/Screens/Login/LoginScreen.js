
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


export default class LoginScreen extends Component {

  render() {
      return (
        <View style= {styles.container}>
          <View style={styles.logoContainer}>
            <Image
             style={styles.logo}
             source={require('../../assets/images/flogo.png')}></Image>
             <Text style={styles.title}>Hello please login before join the game</Text>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#a51268',
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: "100%",
    height: "20%"
  },
  title: {
    color: "#FFFFFF",
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})
