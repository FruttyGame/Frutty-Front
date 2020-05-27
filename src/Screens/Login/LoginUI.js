import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import {View,Text, Button} from 'react-native';

class LoginUI extends Component {

    render() {
    return (
        <View>
            <Text>LoginUI</Text>
            <Button title="Click me" onPress={() => this.props.navigation.navigate("HomeScreen")} />
            

        </View>
    );
    }

}

export default LoginUI;