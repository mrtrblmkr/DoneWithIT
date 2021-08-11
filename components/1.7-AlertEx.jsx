import React from 'react';
import {View, Alert,Button } from 'react-native'

function AlertEx(props) {
    return (
        <View>
           {/*`````````````````````````````````````` ALERT.ALERT ``````````````````````````````````````````````````` */}
            <Button 
            title="Click Me"
            onPress={()=>
                Alert.alert("my Title", "My Message",[
                    { text: 'Yes', onPress:()=>console.log('Yes')},
                    { text: 'No', onPress:()=>console.log('No')},

                ])
            } />
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ALERT PROMPT WORKS ON IOS 21-July-2021~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            {/* <Button 
            title="promt"
            onPress={()=>
            Alert.prompt("my title", "my message", text => console.log(text))
            }
            /> */}
        </View>
    );
}

export default AlertEx;