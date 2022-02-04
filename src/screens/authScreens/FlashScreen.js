import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlashScreen = ({navigation}) => {
    
  setTimeout(() => {
    navigation.navigate('SigninWelcomeScreen');
  }, 3000);

  return (
    <View>
      <Text>FlashScreen</Text>
    </View>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({});
