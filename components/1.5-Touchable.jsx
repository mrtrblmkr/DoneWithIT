import React from 'react';
import {View, Image, Text ,  TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, SafeAreaView, TouchableNativeFeedback} from 'react-native'

function TouchableEx() {
    return (
        <SafeAreaView>
            <TouchableHighlight onPress={()=>{console.log("HIGHLIGHT");}}>
                <Image source={{ 
                    width:100,
                    height:100,
                    uri: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8_u8XwRFCpu6W8DmiAuINZutk8W-Z7U26A&usqp=CAU")}} />
            </TouchableHighlight>

            <TouchableNativeFeedback onPress={console.log("NATIVE FEEDBACK")}>
                <View style={{ height:100, width:100, backgroundColor:'dodgerblue'}}>
                    <Text>HELLO</Text>
                </View>
            </TouchableNativeFeedback>
        </SafeAreaView>
    );
}

export default TouchableEx;