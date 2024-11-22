// components/NewsCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsCard = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    height: 150,
    width: '100%',
  },
  content: {
    padding: 15,
  },
  title: {
    textTransform:'capitalize',
    fontFamily:'MerriweatherBold',
    fontSize: 18 ,
  },
  description: {
    fontFamily:'Merriweather',
    textAlign:'justify',
    fontSize: 12,
    color: '#666',
    marginTop: 15,
  },
});

export default NewsCard;
