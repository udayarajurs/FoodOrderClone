import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import {AppStack} from './appStack';
import {SignInContext} from '../contexts/authContext';

export default function RootNavigator() {

  const {signedIn} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {
        signedIn.userToken !== 'signed-in'?(
          <AuthStack />
        ):(
          <AppStack />
        )
      }
     
    </NavigationContainer>
  );
}
