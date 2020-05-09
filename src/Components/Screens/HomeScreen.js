import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground} from 'react-native';

export default function HomeScreen() {

        return (
            <View>
            <ImageBackground source={require('../../assets/images/background.png')} style={{width:'100%'}}>
            <View>
                <Image source={require('../../assets/images/gem1.png')}></Image>
            </View>
            </ImageBackground>
            </View>
        );
        const styles = StyleSheet.create({
            Background: {
                width:'100%',
            },
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
          });
}