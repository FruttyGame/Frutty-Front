import React,{Component} from 'react';
import { View, Text, Image ,TextInput, TouchableOpacity,StyleSheet,KeyboardAvoidingView} from 'react-native';

class LoginForm extends React.Component {

    render() {
        return (
<KeyboardAvoidingView behavior="padding" style={styles.container}>

<View style={styles.loginContainer}>
    <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/MYLOGO.png')} />
  
   </View>
<View style={styles.formContainer}>
   <LoginForm />
</View>
</KeyboardAvoidingView>
);
    }

}
const styles = StyleSheet.create({
    container: {
        padding: 20
       },
       input:{
           height: 40,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 10,
           color: '#fff'
       },
       buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15
       },
       buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700',
    
}});

export default LoginForm;