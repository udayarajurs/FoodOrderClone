import React from "react";
import { Text,View,TouchableOpacity,Image,StyleSheet,Dimensions } from "react-native";

import { Icon } from "react-native-elements";
import { colors , parameters} from "../global/styles";

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable ,
    discountPercent ,
    numberOfReview ,
    businessAddress ,
    farAway ,
    averageReview ,
    images,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...Styles.cardView,width:screenWidth}}>
                <Image
                    style={{...Styles.image, width:screenWidth}}
                    source={{uri:images}}
                />
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
     },
})