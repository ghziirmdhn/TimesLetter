import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryStack from './CategoryStack';  // Import CategoryStack

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'category';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f1c40f',
        tabBarInactiveTintColor: '#2B2E4A',
        tabBarStyle: 
        { paddingBottom: 5, 
          height: 70 },
          
 
        })}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ 
        headerShown : false,
        title: 'Home' }} />
      <Tab.Screen 
      name="Categories" 
      component={CategoryStack} 
      options={{ 
        headerShown : false,
        title: 'Category' }} />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{ 
        headerShown : false,
        title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
