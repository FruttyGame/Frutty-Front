import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import {View,Text, Button, ImageBackground} from 'react-native';

class LoginUI extends Component {

    render() {
    return (
        <View>
        <ImageBackground source={require('../Login/images/background.png')}>
            <Button title="Click me" onPress={() => this.props.navigation.navigate("HomeScreen")} />
            </ImageBackground>
            

        </View>
    );
    }

}

export default LoginUI;