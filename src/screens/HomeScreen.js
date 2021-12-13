import React,{useState} from "react";

import { View , Text , StyleSheet , TouchableOpacity , ScrollView} from "react-native";
import { Icon } from  'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import { colors } from './../global/styles';



export default function HomeScreen(){

    const [delivery , setDelivery] = useState(true) 

    return(
        <View style={styles.container}>
            <HomeHeader/>
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator = {false}
        >

            <View>
            <View style={{flexDirection: 'row' , marginTop: 10 , justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                    onPress={() => {
                        setDelivery(true)
                    }}
                >
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey4}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setDelivery(false)
                    }}
                >
                    <View style = {{...styles.deliveryButton,backgroundColor:delivery?colors.grey5:colors.buttons}}>
                        <Text style={styles.deliveryText}>Pick Up</Text>
                    </View>
                </TouchableOpacity>

            </View>

            </View>

            <View style={styles.filterView}>

           

                <View style={styles.addressView}>

               
                <View style={{flexDirection: 'row', backgroundColor: colors.grey4, borderRadius: 15, paddingVertical:3}}>
                    <View style={{flexDirection: 'row' , alignItems: 'center', paddingLeft: 10 }}>
                        <Icon
                            type = "material-community"
                            name = "map-marker"
                            color = {colors.grey1}
                            size = {26}
                        />
                        <Text style={{marginLeft: 5}}>22 Beessie stree</Text>
                    </View>

                    <View style={styles.clockView}>
                        <Icon
                            type = "material-community"
                            name = "clock-time-four"
                            color = {colors.grey1}
                            size = {26}
                        />
                        <Text style={{marginLeft: 5}}>Now</Text>
                    </View>

                </View>

                <View style={{flexDirection: 'row' , alignItems: 'center' , marginLeft: 20}}>
                        <Icon
                            type = "material-community"
                            name = "tune"
                            color = {colors.grey1}
                            size = {26}
                        />
                        <Text style={{marginLeft: 5}}>Now</Text>
                    </View>


                </View>


                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16
    },
    filterView:{
        flexDirection: 'row' , alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10, marginVertical: 10
    },
    clockView:{
        flexDirection: 'row' ,
         alignItems: 'center' ,
          marginLeft: 20 , 
          backgroundColor:colors.cardBackground ,
           borderRadius: 15 , 
           paddingHorizontal: 5 , 
           marginRight: 20
        },
        addressView:{
            flexDirection: 'row' , 
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
             marginVertical: 10,
             justifyContent: 'space-between',
             paddingHorizontal: 20
            }
})
