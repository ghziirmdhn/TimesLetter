import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SearchBar = () => {
  return (
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search news..."
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    borderColor:'#2B2E4A',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  input: {
    flex: 1,
    color: '#4b5563',
    fontFamily: 'Merriweather',
    fontSize: 16,
  },
});

export default SearchBar;