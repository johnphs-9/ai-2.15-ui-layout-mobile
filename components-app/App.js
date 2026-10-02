// App.js
import { StyleSheet, ScrollView, Image, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("./assets/images/ntu-building.webp")}
        style={styles.bannerImg}
      />
      <Header title="AI Engineering Course" color="darkblue" />
      <Image
        source={{ uri: "https://i.imgur.com/9wvRTDo.png" }}
        style={styles.image}
      />
      <SubHeader title="Sign Up Form" />
      <Text style={styles.mainText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImg: {
    width: "90%",
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
