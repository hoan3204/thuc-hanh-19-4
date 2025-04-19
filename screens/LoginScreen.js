import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥕</Text>
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgot}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Signup
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  logo: { fontSize: 30, alignSelf: 'center', marginVertical: 30 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#666', marginBottom: 30 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingVertical: 8,
  },
  forgot: { alignItems: 'flex-end', marginBottom: 20 },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  bottomText: { textAlign: 'center', marginTop: 20 },
  link: { color: '#53B175', fontWeight: 'bold' },
});
