import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <ImageBackground 
      style={{flex: 1}}
      resizeMode='cover'
      source={require('./assets/runningBg.png')}
      >
      <View style={styles.container}>
      <Text style={styles.headingDesign}>Open up App.js to start working on your app!</Text>
      </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  headingDesign: {
    color: "white",
    backgroundColor: 'rgb(155,89,182)',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  }
});
