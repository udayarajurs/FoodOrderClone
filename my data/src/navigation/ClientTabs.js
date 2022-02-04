import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import GroupScreen from './../screens/GroupScreen';
import ChatScreen from './../screens/ChatScreen';
import ProfileScreen from './../screens/ProfileScreen';

const ClientTab = createBottomTabNavigator();

export function ClientTabs() {
  return (
    <ClientTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PrimaryBlue,
        headerShown: false,
      }}>
      <ClientTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTab.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTab.Navigator>
  );
};


