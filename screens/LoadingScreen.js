// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulasi waktu loading sebelum pindah ke HomeScreen
    const timer = setTimeout(() => {
      navigation.replace('HomeTabs'); // Ganti ke layar Home setelah beberapa detik
    }, 3000); // Durasi 3 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
});

export default LoadingScreen;
