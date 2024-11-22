// screens/NewsDetail.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const NewsDetail = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.author}>{article.author ? `By ${article.author}` : ''}</Text>
        <Text style={styles.date}>{new Date(article.publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.contentText}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  image: {
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  content: {
    padding: 10,
  },
  title: {
    fontFamily:'MerriweatherBold',
    fontSize: 22,
    marginBottom: 10,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginBottom: 15,
  },
  description: {
    color: '#666',
    fontFamily: 'Merriweather',
    textAlign:'justify',
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    
  },
  contentText: {
    fontFamily:'Merriweather',
    fontSize: 14,
    textAlign:'justify',
    color: '#333',
    lineHeight: 22,
  },
});

export default NewsDetail;
