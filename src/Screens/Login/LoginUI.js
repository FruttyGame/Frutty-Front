import React, { Component } from 'react';
import {View,Text, Button} from 'react-native';

class LoginUI extends Component {

    render() {
    return (
        <View>
            <Text>LoginUI</Text>
            <Button onPress={() => this.props.navigation.navigate("HomeScreen")} />
        </View>
    );
    }

}

export default LoginUI;