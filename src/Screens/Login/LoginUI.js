import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import {View,Text, Button} from 'react-native';

class LoginUI extends Component {

    render() {
    return (
        <View>
            <Text>LoginUI</Text>
            <Button title="Click me" onPress={() => this.props.navigation.navigate("HomeScreen")} />
            <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>

        </View>
    );
    }

}

export default LoginUI;