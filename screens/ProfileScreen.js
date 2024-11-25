import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
    joinDate: '',
    stats: {
      savedArticles: 0,
      comments: 0,
      likes: 0
    }
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('currentUser');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setProfileData(userData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };
  
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
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('isLoggedIn'); // Hapus status login
              console.log('Logged out successfully');
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }], // Reset ke layar Login
              });
            } catch (error) {
              console.error('Error during logout:', error);
            }
          }
        }
      ]
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `Joined ${date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })}`;
  };

  const menuItems = [
    { icon: 'notifications-outline', label: 'Notification' },
    { icon: 'settings-outline', label: 'Setting' },
    { icon: 'help-circle-outline', label: 'Help' },
  ];

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
          
          <Text style={styles.name}>{profileData.username}</Text>
          <Text style={styles.email}>{profileData.email}</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>
          <Text style={styles.joinDate}>{formatDate(profileData.joinDate)}</Text>
          
          <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
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