import React from 'react';
import {View,Platform, Text, StyleSheet} from 'react-native'


function PlatformEx(props) {
    return (
        <View style={styles.div1}>
            <Text>
                HELLo
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    div1:{
        paddingTop: Platform.OS === "android" ? 100 : 0, 
    },
})

export default PlatformEx;