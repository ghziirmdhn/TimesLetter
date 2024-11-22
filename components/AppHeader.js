// components/AppHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TimesLetter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#2B2E4A', // Ubah warna background sesuai keinginan
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#f1c40f', // Warna garis bawah header
  },
  title: {
    marginTop:'auto',
    fontSize: 50,
    fontFamily: 'Chomsky', // Pastikan font yang di-link sudah benar
    color: '#FFF', // Ubah warna teks sesuai kebutuhan
  },
});

export default AppHeader;
