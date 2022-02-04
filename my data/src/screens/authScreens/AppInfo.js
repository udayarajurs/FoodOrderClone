import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../global/styles';
import Swiper from 'react-native-swiper';

const AppInfo = () => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/Icon_png/background_image.png')}
          style={styles.image}>
          <View style={styles.root}>
            <Swiper
              autoplay={true}
              activeDot={
                <View
                  style={{
                    backgroundColor: COLORS.PrimaryBlue,
                    width: 10,
                    height: 4,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 30,
                  }}
                />
              }
              dot={
                <View
                  style={{
                    backgroundColor: COLORS.lightGray,
                    width: 10,
                    height: 4,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 30,
                  }}
                />
              }>
              <View style={styles.SliderStyle}>
                <Image
                  source={require('../../assets/Icon_png/TestOne.png')}
                  style={styles.SliderImageStyle}
                />
                <Text style={styles.SwiperHeadLineStyle}>Easy to Adopt</Text>
                <Text style={styles.SwiperSubLineStyle}>
                  {
                    'Join us for pets adoption across country \ngive them a loving home too.'
                  }
                </Text>
              </View>

              <View style={styles.SliderStyle}>
                <Image
                  source={require('../../assets/Icon_png/TestTwo.png')}
                  style={styles.SliderImageStyle}
                />
                <Text style={styles.SwiperHeadLineStyle}>Safe and Healthy</Text>
                <Text style={styles.SwiperSubLineStyle}>
                  {
                    'Find tips on how to keep your pet healthy &\nwhich pet brands to use for your pet.'
                  }
                </Text>
              </View>

              <View style={styles.SliderStyle}>
                <Image
                  source={require('../../assets/Icon_png/TestThree.png')}
                  style={styles.SliderImageStyle}
                />
                <Text style={styles.SwiperHeadLineStyle}>
                  Need your Support
                </Text>
                <Text style={styles.SwiperSubLineStyle}>
                  {
                    'Help those pets deserves adoption\nEvery pet need a loving home.'
                  }
                </Text>
              </View>
            </Swiper>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 100,
              }}>
              <TouchableOpacity style={styles.ButtonStyle}>
                <Text style={styles.ButtonTextStyle}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ButtonStyle}>
                <Text style={styles.ButtonTextStyle}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default AppInfo;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  div1: {
    justifyContent: 'center',
    flex: 1,
  },
  SliderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  SliderImageStyle: {
    height: 220,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SwiperHeadLineStyle: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.Black,
    fontSize: 25,
    marginTop: 30,
  },
  SwiperSubLineStyle: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: COLORS.Black,
    marginTop: 15,
  },
  ButtonStyle: {
    borderRadius: 10,
    backgroundColor: COLORS.PrimaryBlue,
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  ButtonTextStyle: {
    padding: 12,
    textAlign: 'center',
    color: COLORS.wight,
    fontFamily: 'Poppins-Regular',
  },
});
