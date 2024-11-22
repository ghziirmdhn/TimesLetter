// components/HotNewsCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HotNewsCard = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2}>{article.title}</Text>
        {article.source && <Text style={styles.category}>{article.source.name}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350, // Lebar HotNewsCard
    height: 240, // Tinggi HotNewsCard lebih besar
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    textTransform:'capitalize',
    fontFamily:'MerriweatherBold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    
  },
  category: {
    fontSize: 14,
    color: '#f1c40f',
    fontWeight: 'bold',
  },
});

export default HotNewsCard;
