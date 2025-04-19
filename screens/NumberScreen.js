import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    if (phoneNumber.trim() !== "") {
      navigation.navigate("VerificationScreen", { phone: phoneNumber });
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Ô nhập số điện thoại */}
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/flag.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+84</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút Next */}
      <TouchableOpacity
        style={[styles.nextButton, phoneNumber ? styles.nextButtonActive : styles.nextButtonDisabled]}
        disabled={!phoneNumber}
        onPress={handleNext}
      >
        <FontAwesome name="arrow-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  nextButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonActive: {
    backgroundColor: "#53B175",
  },
  nextButtonDisabled: {
    backgroundColor: "#D3D3D3",
  },
});

export default NumberScreen;
