import React from 'react';
import Color from '../../Color';
import {ScrollView, StyleSheet,View, KeyboardAvoidingView, Button} from 'react-native';
import Card from '../../Card'

const AuthScreen = (props) => {

    return (
        <KeyboardAvoidingView 
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.authContainer} >
            <Card>
                <ScrollView>
                <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorMessage="Please enter a valid E-Mail address."
                onValueChange={() => {}}
                initialValue=""
                 />
                 <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter a valid Password."
                onValueChange={() => {}}
                initialValue=""
                 />
                </ScrollView>
                <Button title="Login" color={Color.primary} onPress={() => {}} />
                <Button title="Sign UP" color={Color.accent} onPress={() => {}} />
            </Card>
        </KeyboardAvoidingView>

    );

};

const styles = StyleSheet.create({});

export default AuthScreen;
