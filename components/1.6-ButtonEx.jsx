import React from 'react';
import { Button,View,Text } from 'react-native'

function ButtonEx(props) {
    return (
        <View>
            <Button title="Click me" onPress={()=>{console.log('button clicked');}} />
        </View>
    );
}

export default ButtonEx;