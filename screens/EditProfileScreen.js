// screens/EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }) => {
  // State untuk menyimpan data input
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profileImage, setProfileImage] = useState(null);

  // Fungsi untuk memilih gambar dari galeri
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = () => {
    // Di sini bisa ditambahkan logika penyimpanan ke database atau state global
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/image/default-profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  changePhotoText: {
    textAlign: 'center',
    color: '#007bff',
    marginBottom: 20,
  },
  label: {
    fontFamily:'FuturaHeavy',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontFamily:'Merriweather',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default EditProfileScreen;
