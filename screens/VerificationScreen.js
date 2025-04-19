import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const VerificationScreen = ({ route, navigation }) => {
  const [code, setCode] = useState("");
  const phoneNumber = route.params?.phone || ""; // Nhận số điện thoại từ NumberScreen

  const handleVerify = () => {
    if (code.length === 4) {
      alert("Verified Successfully!");
      navigation.navigate("SelectLocation");
      // Chuyển sang màn hình chính sau khi xác minh thành công
    } else {
      alert("Invalid Code. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your 4-digit code</Text>

      {/* Trường nhập mã OTP */}
      <Text style={styles.label}>Code</Text>
      <TextInput
        style={styles.input}
        placeholder="- - - -"
        placeholderTextColor="#999"
        keyboardType="numeric"
        maxLength={4}
        value={code}
        onChangeText={setCode}
        textAlign="center"
      />

      {/* Nút gửi lại mã */}
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Nút xác nhận */}
      <TouchableOpacity
        style={[styles.verifyButton, code.length === 4 ? styles.verifyButtonActive : styles.verifyButtonDisabled]}
        disabled={code.length < 4}
        onPress={handleVerify}
      >
        <FontAwesome name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
    textAlign: "left",
    marginTop: 80,
  },
  label: {
    fontSize: 16,
    color: "#777",
    marginTop: 30,
    marginBottom: 5,
  },
  input: {
    fontSize: 24,
    letterSpacing: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    width: "60%",
    alignSelf: "center",
    paddingVertical: 10,
    color: "#000",
  },
  resendButton: {
    marginTop: 20,
    alignSelf: "flex-start",
  },
  resendText: {
    color: "#53B175",
    fontSize: 16,
  },
  verifyButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyButtonActive: {
    backgroundColor: "#53B175",
  },
  verifyButtonDisabled: {
    backgroundColor: "#D3D3D3",
  },
});

export default VerificationScreen;
