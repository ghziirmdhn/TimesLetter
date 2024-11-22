// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import HotNewsCard from '../components/HotNewsCard';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';

const API_KEY = '5adaee36e05045a78355f31cf2391c74';

const HomeScreen = ({ navigation }) => {
 const [news, setNews] = useState([]);
 const [hotNews, setHotNews] = useState([]);
 const [loading, setLoading] = useState(true);
 const [selectedCategory, setSelectedCategory] = useState('general');

 useEffect(() => {
   fetchNews(selectedCategory);
 }, [selectedCategory]);

 const fetchNews = async (category) => {
   setLoading(true);
   try {
     const response = await axios.get(
       'https://newsapi.org/v2/top-headlines',
       {
         params: {
           country: 'us',
           category: category,
           apiKey: API_KEY,
         },
       }
     );
     const allArticles = response.data.articles;
     setHotNews(allArticles.slice(0, 3));
     setNews(allArticles.slice(3));
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 };

 const handleCategorySelect = (category) => {
   setSelectedCategory(category);
 };

 const renderHeader = () => (
   <View>
     <SearchBar />
     <Text style={styles.sectionTitle}>HOT NEWS</Text>
     <FlatList
       data={hotNews}
       renderItem={({ item }) => (
         <HotNewsCard
           article={item}
           onPress={() => navigation.navigate('NewsDetail', { article: item })}
         />
       )}
       keyExtractor={(item) => item.url}
       horizontal
       showsHorizontalScrollIndicator={false}
       style={styles.hotNewsList}
     />
     <CategoryList onCategorySelect={handleCategorySelect} />
     <Text style={styles.sectionTitle}>LATEST NEWS</Text>
   </View>
 );

 if (loading) return <Text>Loading...</Text>;

 return (
   <SafeAreaView style={styles.container}>
     <FlatList
       data={news}
       renderItem={({ item }) => (
         <NewsCard
           article={item}
           onPress={() => navigation.navigate('NewsDetail', { article: item })}
         />
       )}
       keyExtractor={(item) => item.url}
       ListHeaderComponent={renderHeader}
       contentContainerStyle={styles.newsList}
     />
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#FFF',
 },
 sectionTitle: {
   fontFamily: 'FuturaBold',
   fontSize: 22,
   marginHorizontal: 10,
   marginTop: 10,
   marginBottom: 10,
 },
 hotNewsList: {
   paddingLeft: 10,
   marginBottom: 15,
 },
 newsList: {
   paddingHorizontal: 10,
 },
});

export default HomeScreen;