// navigation/CategoryStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import NewsListScreen from '../screens/NewsListScreen';

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SubCategories" 
        component={CategoryScreen} 
        options={{
            headerShown: false,
            title: 'Kategori' }} 
      />
      <Stack.Screen 
        name="NewsList" 
        component={NewsListScreen} 
        options={{ 
            headerShown: false,
            title: 'Daftar Berita' }}
      />
    </Stack.Navigator>
  );
};

export default CategoryStack;
