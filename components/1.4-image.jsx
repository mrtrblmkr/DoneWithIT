import React from 'react';
import {Image,View} from 'react-native'

function ImageEx() {
    return (
        <View>
            {/* LOADING LOCALLY STORED IMAGES */}
            {/* <Image
            source={
                require("../assets/icon.png")} /> */}
            {/* LOADING ONLINE IMAGES */}
            <Image 
            // blurRadius={2}
            fadeDuration={1000}
            source={{ 
                width:200,
                height:200,
                uri: "http://www.mandysam.com/img/random.jpg"}} />
        </View>
    );
}

export default ImageEx;