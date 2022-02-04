import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/authScreens/SplashScreen';
import AppInfo from '../screens/authScreens/AppInfo';
import SigninScreen from './../screens/authScreens/SigninScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const Auth = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="AppInfo"
        component={AppInfo}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="SigninScreen"
        component={SigninScreen}
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
};

