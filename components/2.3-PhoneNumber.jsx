import React from 'react';
import { View, Text, StyleSheet, Platform, addons, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

function PhoneNumber(props) {
  const number =  DeviceInfo.getPhoneNumber();
  console.log(number);
    return (
        <View style={style.div}>
            <Text>Phone number</Text>
        </View>
    );
}

const style = StyleSheet.create({
    div:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    }
})

export default PhoneNumber;