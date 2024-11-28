
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screen/StartScreen'; // Start screen
import WelcomeScreen from './screen/WelcomeScreen'; // Welcome screen
import LoginScreen from './screen/LoginScreen'; // Login screen
import SignupScreen from './screen/SignupScreen'; // Signup screen
import HomeScreen from './screen/HomeScreen'; // Home screen
import BurgerMenu from './screen/BurgerMenu'; // New screen
import MycartScreen from './screen/MycartScreen';
import CheckoutScreen from './screen/CheckoutScreen'; // CheckoutScreen Component
import OrderDoneScreen from './screen/OrderDoneScreen';
import DeliveryScreen from './screen/DeliveryScreen'   ;

import NextScreen from './screen/NextScreen'; // ConfirmationScreen Component
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* Start Screen */}
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }} // Hide the header on the Start screen
        />

        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome Screen',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login Screen',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: 'Signup Screen',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Pakistan Zindabad Screen */}
        <Stack.Screen
          name="BurgerMenu"
          component={BurgerMenu}
          options={{
            title: 'BurgerMenu',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
       
       <Stack.Screen
          name="MyCartScreen"
          component={MyCartScreen}
          options={{
            title: 'MyCartScreen',
            headerStyle: { backgroundColor: '#235346' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ headerShown: true, title: 'Checkout' }}
        />
       
 <Stack.Screen
          name="OrderDoneScreen"
          component={OrderDoneScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DeliveryScreen"
          component={DeliveryScreen}
          options={{ headerShown: false }} // Hide header if needed
        />
         <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{ headerShown: false }} // Hide header if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
