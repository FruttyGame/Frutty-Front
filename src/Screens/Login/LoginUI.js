import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import {View,Text, Button, ImageBackground, StyleSheet, Image} from 'react-native';

class LoginUI extends Component {

    render() {
    return (
        <View style={style.MContainer}>
        <ImageBackground source={require('../Login/images/background.png')} style={style.Container}>
        <View style={style.logoContainer}>
            <Image source={require('./images/flogo.png')} />
        </View>
        </ImageBackground>
        </View>
    );
    }

}

const style = StyleSheet.create({
    Container: {
    width: '100%',
    height: '100%'
    },
    MContainer: {
        flex: 1
        },
    logoContainer: {
        width: '100%',
        height: '100%'
    },    
    
})

export default LoginUI;