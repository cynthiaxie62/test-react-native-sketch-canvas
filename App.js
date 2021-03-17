import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ImageBackground, Image } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";

export default function App() {

  return (
    <View>
      <ImageBackground source={require('./assets/Untitled.png')} style={styles.image}>
        <Draw
          ref={null}
          height={650}
          width={350}
          initialValues={{
            color: "black",
            thickness: 3,
            opacity: 1,
            paths: []
          }}
          brushPreview="none"
          canvasStyle={styles.canvas}
        />
      </ImageBackground>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderColor: 'black',
    borderWidth: 2
  },
  canvas: {
    elevation: 0, 
    opacity: 0.5
  }
});
 

AppRegistry.registerComponent('main', () => App);
