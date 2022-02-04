import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS} from '../../global/styles';

const SplashScreen = () => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/Icon_png/background_image.png')}
          style={styles.image}>
          <View style={styles.div1}>
            <Image
              source={require('../../assets/Icon_png/TestLogo.png')}
              style={styles.logoStytle}
            />
            <Text style={styles.appNameStyle}>Pet Choice</Text>
            <Text style={styles.SubTitleStyle}>Community we all need</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoStytle: {
    height: 125,
    width: 125,
    alignSelf: 'center',
  },
  appNameStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: COLORS.Black,
    alignSelf: 'center',
  },
  SubTitleStyle: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  div1: {
    justifyContent: 'center',
    flex: 1,
  },
});
