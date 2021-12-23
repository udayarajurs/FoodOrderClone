import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RestaurantHeader from './../components/RestaurantHeader';

const RestaurantHomeScreen = ({navigation,route}) => {

    const {id,restaurant} = route.params 
    return (
        <View>
            <RestaurantHeader id={id} navigation={navigation}/>
        </View>
    )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({})
