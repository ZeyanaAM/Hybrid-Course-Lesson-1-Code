import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const image = require("./assets/icon.png");

export default function App() {
  const handleOnPress = () => {
    console.log("Button was pressed");
    console.log("Another print");
  };

  function handleOnPressAgain() {
    console.log("Button was pressed");
    console.log("Another print");
  }

  console.log("reloading");

  let textInput = "No value";

  const handleChangeText = (value) => {
    console.log("The text was changed" + value);
    textInput = value;
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ width: "70%", height: 200, backgroundColor: "yellow" }} />
      <Text style={{ color: "red", width: "50%", backgroundColor: "yellow" }}>
        I am a text component {5 * 3 + 2} {"\n"}
        <Text style={styles.text}>inside another text component</Text>
      </Text>
      <Text>I am text on its own</Text>
      <Button title="Press me" onPress={handleOnPressAgain} color="green" />
      <TextInput
        placeholder="Enter some text"
        onChangeText={handleChangeText}
      />
      <Text style={[styles.text, styles.blueColor]}>{textInput}</Text>
      <Text style={{ ...styles.text, width: "10%" }}>{textInput}</Text>
      <Button
        title="Text Input Log"
        onPress={() => console.log("Text input is: " + textInput)}
      />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image
        source={{
          uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  blueColor: {
    color: "blue",
  },
});
