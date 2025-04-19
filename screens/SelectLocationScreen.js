import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // ✅ Đúng thư viện

const SelectLocationScreen = ({ navigation }) => {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('');

  const handleSubmit = () => {
    // Sau khi chọn location, chuyển sang LoginScreen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Ảnh vị trí */}
      <Image
        source={require('../assets/location.png')} // Cần đúng đường dẫn
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      {/* Zone */}
      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={zone}
          onValueChange={(itemValue) => setZone(itemValue)}
          style={Platform.OS === 'android' ? {} : undefined}
        >
          <Picker.Item label="Banasree" value="Banasree" />
          <Picker.Item label="Dhanmondi" value="Dhanmondi" />
          <Picker.Item label="Mirpur" value="Mirpur" />
        </Picker>
      </View>

      {/* Area */}
      <Text style={styles.label}>Your Area</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={area}
          onValueChange={(itemValue) => setArea(itemValue)}
          style={Platform.OS === 'android' ? {} : undefined}
        >
          <Picker.Item label="Types of your area" value="" />
          <Picker.Item label="Road 1" value="Road 1" />
          <Picker.Item label="Road 2" value="Road 2" />
        </Picker>
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#555',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#53B175',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
