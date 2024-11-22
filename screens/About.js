// screens/About.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/default-profile.png')} // Path gambar
          style={styles.logo}
        />
      </View>

      {/* Judul */}
      <Text style={styles.title}>Tentang Times Letter</Text>

      {/* Deskripsi */}
      <Text style={styles.description}>
        Times Letter adalah aplikasi berita modern yang dirancang untuk memberikan informasi terkini dan terpercaya kepada pengguna.
        Dengan kategori yang beragam seperti teknologi, bisnis, olahraga, dan hiburan, Times Letter memastikan bahwa Anda tidak
        akan ketinggalan berita penting di dunia.
      </Text>

      {/* Fitur Utama */}
      <Text style={styles.subtitle}>Fitur Utama:</Text>
      <Text style={styles.listItem}>• Berita terkini dari berbagai kategori</Text>
      <Text style={styles.listItem}>• Navigasi yang mudah digunakan</Text>
      <Text style={styles.listItem}>• Tampilan yang bersih dan menarik</Text>
      <Text style={styles.listItem}>• Pilihan untuk menyimpan berita favorit</Text>

      {/* Kontak */}
      <Text style={styles.subtitle}>Kontak Kami:</Text>
      <Text style={styles.contact}>Email: support@timesletter.com</Text>
      <Text style={styles.contact}>Website: www.timesletter.com</Text>
    </View>
  );
};

// Gaya menggunakan StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#666666',
    lineHeight: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  contact: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
});

export default AboutScreen;
