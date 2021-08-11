import * as React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native'




function AsyncStorageExample(){

 
  setItemStorage = async () => {
    try {
      await AsyncStorage.setItem(
        'AppVersion',
        'V1.1.1.1s'
      );
    } catch (error) {
      // Error saving data
    }
  };

    //   GETTING ITEM FROM ASYNC STORAGE
      getItemStorage = async () => {
        try {
          const value = await AsyncStorage.getItem('AppVersion');
          if (value !== null) {
            // We have data!!
            alert(value);
          }
        } catch (error) {
          // Error retrieving data
          console.log("read data error");
        }
      };
      
  
    return (
        <View>
            <Text>
                Async Storage
                <Button title="set" onPress={this.setItemStorage}>set</Button>
                <Button title="get" onPress={this.getItemStorage}>get</Button>
                <Button title="clear" onPress={this.clearStorage}>clear</Button>
                

            </Text>
        </View>
    );
}




export default AsyncStorageExample;