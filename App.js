import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Hello from './components/1.1-hello'
import Safeareaview from './components/1.2-Safeareaview'
import NoOfLines from './components/1.3-NoOfLines'
import ImageEx from './components/1.4-image'
import TouchableEx from './components/1.5-Touchable'
import ButtonEx from './components/1.6-ButtonEx'
import AlertEx from './components/1.7-AlertEx'
import PlatformEx from './components/1.8-PlatformEx'
import DimensionEx from './components/1.9-DimensionEx'
import Slider from './components/2.0-Slider'
// import SliderApi from './components/2.1-SliderApi';
import AsyncStorageExample  from './components/2.2-AsyncStorage';
import PhoneNumber from './components/2.3-PhoneNumber'

export default function App() {
  return (
    <View style={styles.container}>
        <Hello /> 
        {/* <Safeareaview />
        <NoOfLines />
        <ImageEx />
        <TouchableEx />
        <ButtonEx />
        <AlertEx /> 
        <PlatformEx />
        <DimensionEx /> */}
        {/* <Slider /> */}
        {/* <SliderApi /> */}
       {/* <AsyncStorageExample /> */}
       {/* <PhoneNumber /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
 
});
