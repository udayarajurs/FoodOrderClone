import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {COLORS} from '../global/styles';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import BusinessConsoleScreen from './../screens/BusinessConsoleScreen';
import DrawerContent from './../components/DrawerContent';

const Drawer = DrawerNavigator();

export function ClientTabs() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          headerShown: false,
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : COLORS.PrimaryBlue}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          headerShown: false,
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? '#7cc' : COLORS.PrimaryBlue}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};


