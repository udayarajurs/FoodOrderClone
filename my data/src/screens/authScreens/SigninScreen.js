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

const SigninScreen = () => {
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
              <Text style={styles.LoginTextStyle}>Login</Text>
              <Text style={styles.LoginSubTitle}>
                Enter your email and password
              </Text>
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
            <View>
              <TouchableOpacity>
                <Text style={styles.ForgotPasswordTextStyle}>
                  Forgot password!
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.ButtonStyle}>
            <Text style={styles.ButtonTextStyle}>Log in</Text>
          </TouchableOpacity>

          <View style={styles.DonthaveAccountBoardStyle}>
            <Text style={styles.DonthaveAccountTextStyle}>
              Don't have an acccount?
            </Text>
            <TouchableOpacity style={styles.SingUpBoardStyle}>
              <Text style={styles.SingUpTextstyle}>Singup</Text>
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

export default SigninScreen;

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
    marginTop: 15,
  },
  ButtonTextStyle: {
    padding: 12,
    textAlign: 'center',
    color: COLORS.wight,
    fontFamily: 'Poppins-Regular',
  },
  LoginTextStyle: {
    fontSize: 17,
    color: COLORS.Black,
    fontFamily: 'Poppins-Medium',
    padding: 5,
    marginStart: 20,
    marginTop: 30,
  },
  LoginSubTitle: {marginStart: 25, fontFamily: 'Poppins-Regular'},
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
  ForgotPasswordTextStyle: {
    alignSelf: 'flex-end',
    marginEnd: 25,
    marginTop: 15,
    color: COLORS.red,
    fontFamily: 'Poppins-Medium',
  },
  DonthaveAccountBoardStyle: {flexDirection: 'row', alignSelf: 'center'},
  DonthaveAccountTextStyle: {
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
