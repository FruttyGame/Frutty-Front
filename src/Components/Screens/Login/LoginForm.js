import React,{Component} from 'react';
import {StyleSheet,TextInput,View, TouchableOpacity,Text} from 'react-native';

export default class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <TextInput
             placeholder="username or email"
             returnKeyType="next"
             placeholderTextColor= "rgba(255,255,255,0.5)"
             onSubmitEditing= {() => this.passwordInput.focus()}
             autoCorrect= {false}
             autoCapitalize= "none"
             style={styles.input}/>
        
            <TextInput
             placeholder="password"
             secureTextEntry
             placeholderTextColor= "rgba(255,255,255,0.5)"
             ref={(input) => this.passwordInput = input}
             returnKeyType="go"
             style={styles.input}/>
             <TouchableOpacity style={styles.buttonContainer}>
             <Text style={styles.buttonText}>LOGIN</Text>
             </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        color: '#ffffff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#ffa60b',
        paddingVertical: 15
    },
    buttonText:{
        color:'#ffffff',
        textAlign: "center",
        fontWeight: "700"
    }
});