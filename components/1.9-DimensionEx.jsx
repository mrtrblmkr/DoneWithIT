import React from 'react';
import {View,Dimensions , Text } from 'react-native'

export default function DimensionEx() {
    console.log(Dimensions.get("screen"));
    return (
        <View>
            <Text> Dimension</Text>
        </View>
    );
}
