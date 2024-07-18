import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderComponent = () => {
    switch (currentView) {
      case "login":
        return <Login onSignupPress={() => setCurrentView("signup")} />;
      case "signup":
        return <Signup onLoginPress={() => setCurrentView("login")} />;
      default:
        return <Home onLoginPress={() => setCurrentView("login")} />;
    }
  };

  return <View style={styles.container}>{renderComponent()}</View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});