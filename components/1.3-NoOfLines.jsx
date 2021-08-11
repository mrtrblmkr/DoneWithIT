import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function NoOfLines() {

    const handlePress=()=>{
        console.log("text pressed");
    }
    return (
        <SafeAreaView>
            <Text numberOfLines={2} onPress={handlePress}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reprehenderit quia neque porro, unde dicta minima minus laudantium quo repellendus ducimus? Iusto sint eius voluptatibus atque ratione doloribus autem iste.
                </Text>
        </SafeAreaView>
    );
}

