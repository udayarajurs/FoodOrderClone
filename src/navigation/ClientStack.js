import React,{useLayoutEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreeen';
import SearchResultScreen from './../screens/SearchResultScreen';
import RestaurantHomeScreen from './../screens/RestaurantHomeScreen';

const ClientSearch = createStackNavigator()

export default  function ClientStack({navigation,route}) {
    return(
           <ClientSearch.Navigator>

            <ClientSearch.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="SearchResultScreen"
                component ={SearchResultScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="RestaurantHomeScreen"
                component ={RestaurantHomeScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

           </ClientSearch.Navigator>
    )
}


