import React from "react";

import { View , Text , StyleSheet , Dimensions} from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantsData } from "../global/Data";
import {colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) =>{
    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
            </View>
            <SearchResultCard
                screenWidth = {SCREEN_WIDTH}
                images = {restaurantsData[0].images}
                averageReview ={restaurantsData[0].averageReview}
                numberOfReview ={restaurantsData[0].numberOfReview}
                restaurantName={restaurantsData[0].restaurantName}
                farAway={restaurantsData[0].farAway}  
                businessAddress={restaurantsData[0].businessAddress}  
             />
        </View>
    )
}

export default SearchResultScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20
    },
    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    }
})
