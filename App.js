// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import BottomTabs from './navigation/BottomTabs';
import NewsDetailScreen from './screens/NewsDetailScreen';
import NewsListScreen from './screens/NewsListScreen';
import AppHeader from './components/AppHeader';
import LoadingScreen from './screens/LoadingScreen'; 
import EditProfileScreen from './screens/EditProfileScreen';
import AboutScreen from './screens/About';



const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load font Chomsky
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Crimson':require('./assets/fonts/CrimsonRegular.ttf'),
        'Chomsky': require('./assets/fonts/Chomsky.ttf'),
        'FuturaHeavy': require('./assets/fonts/FuturaHeavy.ttf'),
        'FuturaBold': require('./assets/fonts/FuturaBold.ttf'),
        'Merriweather': require('./assets/fonts/Merriweather.ttf'),
        'MerriweatherBold': require('./assets/fonts/Merriweather-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <AppHeader />, // Menggunakan header custom di setiap layar
        }}
      >
         <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="NewsList" component={NewsListScreen} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'Detail Berita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
