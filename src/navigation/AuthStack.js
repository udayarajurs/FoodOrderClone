import React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SignInScreen from '../screens/authScreens/SigninScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';


const Auth = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />

  
    </Auth.Navigator>
  );
}
