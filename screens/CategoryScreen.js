// screens/CategoryScreen.js
import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Import gambar dari folder lokal
const SubCategories = [
  { id: '1', name: 'Technology', image: require('../assets/image/Tech.jpg') },
  { id: '2', name: 'Sports',image: require('../assets/image/Sport.jpg')},
  { id: '3', name: 'Business', image: require('../assets/image/Business.jpg')},
  { id: '4', name: 'Entertainment', image: require('../assets/image/Entertaiment.jpg')},
  { id: '5', name: 'Health', image: require('../assets/image/Health.jpg')},
  { id: '6', name: 'Science', image: require('../assets/image/Science.jpg')},
];

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('NewsList', { category: item.name })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <View style={styles.overlay}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SubCategories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  grid: {
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 1,
    aspectRatio: 0.85,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryName: {
    fontFamily:'MerriweatherBold',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
