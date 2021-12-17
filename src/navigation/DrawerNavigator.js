import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Drawer = createDrawerNavigator()


export default function DrawerNavigator(){

    return(
        <Drawer.Navigator>

            <Drawer.Screen
             name = "RootClientTabs"
             component ={RootClientTabs}

             options = {{
                title:'Client',
                headerShown: false,
                drawerIcon: ({focussed,size}) =>(
                    <Icon 
                        type = "material-community"
                        name = "home"
                        color = {focussed ? '#7cc' :colors.grey2}
                        size = {size}

                    />
                )
            }}


            />
           

        </Drawer.Navigator>
    )

}