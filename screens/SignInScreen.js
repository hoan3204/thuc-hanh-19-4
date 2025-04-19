import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh trên */}
      <Image source={require("../assets/signin-image.png")} style={styles.image} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries with nectar</Text>

      {/* Nhập số điện thoại */}
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => navigation.navigate("NumberScreen")} // Chuyển sang màn hình NumberScreen
      >
        <Image source={require("../assets/flag.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+84</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          keyboardType="numeric"
          editable={false} // Không cho phép nhập trực tiếp
        />
      </TouchableOpacity>

      {/* Đăng nhập bằng Google */}
      <TouchableOpacity style={styles.buttonGoogle}>
        <FontAwesome name="google" size={20} color="#4285F4" />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Đăng nhập bằng Facebook */}
      <TouchableOpacity style={styles.buttonFacebook}>
        <FontAwesome name="facebook" size={20} color="#1877F2" />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: "100%",
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
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "100%",
    justifyContent: "center",
  },
  buttonFacebook: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "100%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
