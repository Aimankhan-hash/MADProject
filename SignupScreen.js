import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseauth'; // Import your Firebase auth instance correctly

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  // Firebase signup function
  const signup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Using the imported `auth` instance
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User Signed Up:', user.email);
        // Navigate to Home screen after successful signup
        navigation.navigate('Home');
      })
      .catch((error) => {
        setError(error.message); // Show error message if signup fails
        console.error('Error signing up: ', error.message);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://static.vecteezy.com/system/resources/thumbnails/030/033/279/small/burger-fry-souse-banner-free-space-text-mockup-fast-food-top-view-empty-professional-phonography-photo.jpg',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: 'https://st.depositphotos.com/40223836/54024/i/450/depositphotos_540246522-stock-illustration-golden-food-delivery-icon-isolated.jpg',
            }}
            style={styles.logo}
          />
        </View>

        {/* Welcome text */}
        <Text style={styles.welcomeText}>Let's get started</Text>
        <Text style={styles.createAccountText}>Create an account</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#fff"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input with Eye Icon */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input with Eye Icon */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!confirmPasswordVisible}
            placeholderTextColor="#fff"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Icon name={confirmPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Error message */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Navigate to Login Screen */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  createAccountText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    color: '#FF5733',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default SignupScreen;
