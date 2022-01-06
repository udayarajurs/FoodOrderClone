import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';

import Swiper from 'react-native-swiper';

export default function SigninWelcomeScreen({title, navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 16, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 16, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={Styles.slide1}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/pet-choice-1fc21.appspot.com/o/download.jfif?alt=media&token=97b6a585-97b7-406d-8c82-4395fca1dbb2',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={Styles.slide2}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/pet-choice-1fc21.appspot.com/o/photo-1504674900247-0877df9cc836.jfif?alt=media&token=d64b86d0-ef7c-48f5-b459-5fc10d12d6e6',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={Styles.slide3}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/pet-choice-1fc21.appspot.com/o/istockphoto-1279763992-170667a.jpg?alt=media&token=94307641-1ffb-4297-b68d-9cd12befd988',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <TouchableOpacity
            style={parameters.styledButton}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <Text style={parameters.buttonTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={Styles.createButton}
            titleStyle={Styles.createButtonTitle}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
