// screens/Profile.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  
  // Data profil (nanti bisa diambil dari state/API)
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    bio: 'Passionate news reader and technology enthusiast',
    location: 'Jakarta, Indonesia',
  };


  const menuItems = [
    { icon: 'notifications-outline', label: 'Notifikasi' },
    { icon: 'settings-outline', label: 'Pengaturan' },
    { icon: 'help-circle-outline', label: 'Bantuan' },
  ];

  // Fungsi untuk handle logout
  const handleLogout = () => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Ya, Keluar",
          onPress: () => {
            // Di sini Anda bisa menambahkan logika logout seperti menghapus token, dll
            navigation.navigate('Login'); // Menggunakan replace agar user tidak bisa kembali ke profile screen
          }
        }
      ]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header Profile */}
        <View style={styles.headerContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/image/default-profile.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Ionicons name="camera-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.email}>{profileData.email}</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>
          <Text style={styles.joinDate}>{profileData.joinDate}</Text>
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => console.log(`${item.label} clicked`)}
            >
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={styles.menuItemText}>{item.label}</Text>
              <Ionicons name="chevron-forward-outline" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#2B2E4A',
    padding: 8,
    borderRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
  },
  joinDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
  },
  editProfileButton: {
    backgroundColor: '#2B2E4A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  editProfileText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  menuContainer: {
    padding: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  // Styles untuk tombol logout
  logoutButton: {
    backgroundColor: '#FF605C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 100,
    marginBottom: 15,
    borderRadius: 60,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;