import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
//import {SignInContext} from '../contexts/authContext';

export function RootNavigator() {
  //const {signedIn} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {/* {
        signedIn.userToken !== 'signed-in'?( 
      <AuthStack />
           ):(
           <AppStack />
         )
       }  */}
      <AppStack />
    </NavigationContainer>
  );
};

