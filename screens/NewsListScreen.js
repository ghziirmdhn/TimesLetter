// screens/NewsListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { useNavigation } from '@react-navigation/native';

const API_KEY = '5adaee36e05045a78355f31cf2391c74';
const BASE_URL = 'https://newsapi.org/v2';

const NewsListScreen = ({ route }) => {
  const { category } = route.params;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: {
            category: category.toLowerCase(),
            country: 'us',
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsByCategory();
  }, [category]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{
        fontFamily:'FuturaBold', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10 }}>
        
        News in {category}
      
      </Text>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => `${index}-${item.url}`}
        renderItem={({ item }) => (
          <NewsCard 
            article={item} 
            onPress={() => navigation.navigate('NewsDetail', { article: item })}
          />
        )}
      />
    </View>
  );
};

export default NewsListScreen;
