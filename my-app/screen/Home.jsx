import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Home = ({ onLoginPress }) => {
  return (
    <View style={styles.view1}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg",
        }}
      >
        <View>
          <Text style={styles.text}>Welcome to the Jungle</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    minHeight: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  view1: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
  },
  loginButton: {
    width: 250,
    height: 70,
    backgroundColor: "#33E6FF",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 30,
  },
});
