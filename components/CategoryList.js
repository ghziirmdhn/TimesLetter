// components/CategoryList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const CategoryList = ({ onCategorySelect }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity key={category} onPress={() => onCategorySelect(category)}>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  categoryItem: {
    padding: 20,
    backgroundColor: '#2B2E4A',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    fontFamily:'Merriweather',
    color: '#fff',
    fontSize: 16,

  },
});

export default CategoryList;
