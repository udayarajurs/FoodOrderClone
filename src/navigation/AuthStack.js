import React from 'react';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SignInScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';

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
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
}
