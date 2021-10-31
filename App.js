import React from 'react';
import { View , Text , StyleSheet ,  StatusBar} from 'react-native'
import { colors } from './src/global/styles';
import SigninScreen from './src/screens/authScreens/SigninScreen';
import TabScreen from './src/screens/authScreens/TabScreen';

export default function App(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />

      <SigninScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})