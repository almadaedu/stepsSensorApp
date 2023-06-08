import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";

export default function App() {

  const [PedometerAvailability, setPedometerAvailability] = useState("");
  const [stepCount, setStepCount] = useState(0)

  React.useEffect(() => {

    subscribe();
 
  }, []);

  subscribe = () => {

    const subscription = Pedometer.watchStepCount((result) => {
 
      setStepCount(result.steps);
 
    });

    Pedometer.isAvailableAsync().then((result) => {
      setPedometerAvailability(String(result))
    
    }, (error) =>{
      setPedometerAvailability(error)
    });
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require("./assets/runningBg.png")}
    >
      <View style={styles.container}>
        <Text style={styles.headingDesign}>
          Pedometer available : {PedometerAvailability}
        </Text>
        <Text>{stepCount}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headingDesign: {
    color: "white",
    backgroundColor: "rgb(155,89,182)",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
