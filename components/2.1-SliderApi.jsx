import React from 'react';
import { View,Text,Image } from 'react-native'
import axios from 'axios'
import { useState } from 'react';



var options = {
    method: 'GET',
    url: 'https://picsum.photohttps://ibb.co/H7b4FC6s/200',
   
  };

function SliderApi(props) {
    const [data, setData ] =useState([]);

    axios.request(options).then(function (response) {
        setData(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <View>
            <Text>SliderApi </Text>
            <Image source={{ uri: data}} 
            style={{height: 100 , width: 100, resizeMode: 'contain' }}
            />
        </View>
    );
}

export default SliderApi;