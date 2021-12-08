import React from 'react'
import { createNativeStackNavigator , TransitionPresets} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SignInScreen from '../screens/authScreens/SigninScreen'

const Auth = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator>
             <Auth.Screen 
                        name ="SignInWelcomeScreen"
                        component = {SignInWelcomeScreen}
                        options ={{
                            headerShown: false,
                           
                        }}
                    />

                    <Auth.Screen 
                        name ="SignInScreen"
                        component = {SignInScreen}
                        options ={{
                            headerShown: false,
                           
                        }}
                    />  
       
        </Auth.Navigator>
    )
}