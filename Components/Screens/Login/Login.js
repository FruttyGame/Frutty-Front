import React,{Component} from 'react';
import {View,Image,StyleSheet} from 'react-native';

class Login extends React.Component {
    render() {
        return (
<View style={styles.container}>
        <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/MYLOGO.png')} />
         </View>

            <View style={styles.formContainer}>
                   <LoginForm />
            </View>
       </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});
export default Login;