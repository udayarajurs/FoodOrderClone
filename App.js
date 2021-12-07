import React from 'react';
import { View , Text , StyleSheet ,  StatusBar} from 'react-native'
import { colors } from './src/global/styles';
import SigninScreen from './src/screens/authScreens/SigninScreen';

import SigninWelcomeScreen from './src/screens/authScreens/SigninWelcomeScreen';


export default function App(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />

      <SigninWelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})