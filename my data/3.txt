import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';
import {COLORS} from '../../global/styles';

const SignUpScreen = () => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/Icon_png/background_image.png')}
          style={styles.image}>
          <View>
            <Image
              source={require('../../assets/Icon_png/TestLogo.png')}
              style={styles.logoStytle}
            />
            <Text style={styles.appNameStyle}>Pet Choice</Text>
            <Text style={styles.SubTitleStyle}>Community we all need</Text>

            <View>
              <Text style={styles.SignUpTextStyle}>Sign Up</Text>
              <Text style={styles.SignUpSubTitle}>
                 Enter your credentials to continue
              </Text>
            </View>

            <View style={styles.InputTextBorderStyle}>
              <View style={styles.IconStyle}>
                <Icon
                  name="person"
                  iconStyle={{color: COLORS.grey3}}
                  type="material"
                  style={styles.IconStyleTwo}
                />
                <View style={styles.horizontalVertical}></View>
                <TextInput
                  placeholder="Name"
                  width="100%"
                  style={styles.TextInputStyle}
                />
              </View>
            </View>

            <View style={styles.InputTextBorderStyle}>
              <View style={styles.IconStyle}>
                <Icon
                  name="email"
                  iconStyle={{color: COLORS.grey3}}
                  type="Fontisto"
                  style={styles.IconStyleTwo}
                />
                <View style={styles.horizontalVertical}></View>
                <TextInput
                  placeholder="Email"
                  width="100%"
                  style={styles.TextInputStyle}
                />
              </View>
            </View>

            <View style={styles.InputTextBorderStyle}>
              <View style={styles.IconStyle}>
                <Icon
                  name="lock"
                  iconStyle={{color: COLORS.grey3}}
                  type="material"
                  style={styles.IconStyleTwo}
                />
                <View style={styles.horizontalVertical}></View>

                <TextInput
                  placeholder="Password"
                  width="75%"
                  style={styles.TextInputStyle}
                />

                <Icon
                  name="visibility-off"
                  color={COLORS.grey3}
                  type="material"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.ButtonStyle}>
            <Text style={styles.ButtonTextStyle}>Sing Up</Text>
          </TouchableOpacity>

          <View style={styles.AlreadyHaveAccountBoardStyle}>
            <Text style={styles.AlreadyHaveAccountTextStyle}>
            Already have an account?
            </Text>
            <TouchableOpacity style={styles.SingUpBoardStyle}>
              <Text style={styles.SingUpTextstyle}>Log in</Text>
              <Icon
                name="arrow-right"
                color={COLORS.PrimaryBlue}
                type="MaterialIcons"
                style={styles.ArrowStyle}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
  horizontalVertical: {
    height: '100%',
    width: 0.5,
    backgroundColor: COLORS.grey3,
  },
  ButtonStyle: {
    borderRadius: 10,
    backgroundColor: COLORS.PrimaryBlue,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  ButtonTextStyle: {
    padding: 12,
    textAlign: 'center',
    color: COLORS.wight,
    fontFamily: 'Poppins-Regular',
  },
  SignUpTextStyle: {
    fontSize: 17,
    color: COLORS.Black,
    fontFamily: 'Poppins-Medium',
    padding: 5,
    marginStart: 20,
    marginTop: 30,
  },
  SignUpSubTitle: {marginStart: 25, fontFamily: 'Poppins-Regular'},
  InputTextBorderStyle: {
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.wight,
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 25,
    borderWidth: 0.5,
  },
  IconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 15,
  },
  TextInputStyle: {marginStart: 10},
  IconStyleTwo: {marginRight: 10},
  AlreadyHaveAccountBoardStyle: {flexDirection: 'row', alignSelf: 'center'},
  AlreadyHaveAccountTextStyle: {
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    color: COLORS.Black,
  },
  SingUpBoardStyle: {flexDirection: 'row', marginTop: 15},
  SingUpTextstyle: {
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: COLORS.PrimaryBlue,
  },
  ArrowStyle: {bottom: 2, right: 5},
});
