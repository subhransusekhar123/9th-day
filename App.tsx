import React from 'react';
import {
  View, //almost a div but not exactly
  Text, //for texts
  SafeAreaView, // to avoid notches
  Image //for image
} from "react-native";
import AppPro from './AppPro';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      <Image 
      style={{width:100,height:100}}
      source={{
        uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
      }} />
      </View>
      <View>
      <AppPro/>
      </View>
    </SafeAreaView>
  )
}
export default App;
