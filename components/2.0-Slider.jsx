import React from 'react';
import {View, Image, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 100 / 60; // 60 %  

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjExFxyPP9V4ENXyW5p_M68tQ-TVyP43CuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjExFxyPP9V4ENXyW5p_M68tQ-TVyP43CuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjExFxyPP9V4ENXyW5p_M68tQ-TVyP43CuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjExFxyPP9V4ENXyW5p_M68tQ-TVyP43CuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjExFxyPP9V4ENXyW5p_M68tQ-TVyP43CuQ&usqp=CAU'
]

function Slider(props) {
    return (
        <View style={{ marginTop: 50, width, height}}>
            <ScrollView  horizontal style={{width, height}}>
            {
                images.map((image, index) => (
                    <Image 
                    source={{ uri: image}}
                    style={{width ,height, resizeMode: 'contain'}}
                    key={index}
            />
                ))
            }
            </ScrollView>
        </View>
    );
}


export default Slider;