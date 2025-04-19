import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <Image source={require("../assets/onboarding.png")} style={styles.image} />

      {/* Nội dung */}
      <View style={styles.content}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>

        {/* Nút Get Started */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("SignIn")}

        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "60%", // Chiếm 60% chiều cao màn hình
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
