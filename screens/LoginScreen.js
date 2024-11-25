import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
  try {
    const registeredUser = await AsyncStorage.getItem('user');
    if (!registeredUser) {
      Alert.alert('Error', 'No account found. Please register first.');
      navigation.navigate('Register');
      return;
    }

    const userData = JSON.parse(registeredUser);

    if (email === userData.email && password === userData.password) {
      setError('');
      // Simpan status login dan data pengguna
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('currentUser', JSON.stringify(userData));
      navigation.replace('Loading');
    } else {
      setError('Invalid email or password');
    }
  } catch (error) {
    setError('Error logging in. Please try again.');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>TimesLetter</Text>
          <Text style={styles.subtitle}>Your Daily News Companion</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} // Navigasi ke halaman Register
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Chomsky',
    fontSize: 48,
    color: '#2B2E4A',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Merriweather',
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    fontFamily: 'Merriweather',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    fontFamily: 'Merriweather',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#2B2E4A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    fontFamily: 'FuturaBold',
    color: '#f1c40f',
    fontSize: 18,
  },
  forgotButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  forgotButtonText: {
    fontFamily: 'Merriweather',
    color: '#2B2E4A',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontFamily: 'Merriweather',
    color: '#666',
    fontSize: 14,
  },
  signupButtonText: {
    fontFamily: 'MerriweatherBold',
    color: '#2B2E4A',
    fontSize: 14,
  },
});

export default LoginScreen;

