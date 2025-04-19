import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); // Điều hướng đúng
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreenComponent;
