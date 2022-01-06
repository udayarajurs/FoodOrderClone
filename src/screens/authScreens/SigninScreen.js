import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {Formik} from 'formik';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

export default function SigninScreen({title, navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function signIn(data) {
    try {
      const {password, email} = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        console.log('USER SIGNED-IN');
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

  return (
    <View style={Styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text
          style={title}
          style={{color: '#ff8c52', fontWeight: 'bold', fontSize: 20}}>
          Sign-In
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={Styles.text1}>Please enter the email and Password</Text>
        <Text style={Styles.text1}>registered withe your accountt</Text>
      </View>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signIn(values);
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <TextInput
                  style={Styles.TextInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={Styles.TextInput2}>
                <Animatable.View
                  animation={setTextInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}>
                  <Icon
                    name="lock"
                    iconStyle={{color: '#86939e'}}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{width: '80%'}}
                  placeholder="Password"
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <Animatable.View
                  animation={setTextInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}>
                  <Icon
                    name="visibility-off"
                    iconStyle={{color: '#86939e'}}
                    type="material"
                    style={{marginRight: 20}}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <TouchableOpacity
                style={parameters.styledButton}
                onPress={
                  // navigation.navigate('DrawerNavigator');
                  props.handleSubmit
                }>
                <Text style={parameters.buttonTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...Styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 25, marginBottom: 25}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In with FaceBook"
          button
          type="facebook"
          style={Styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In with Google"
          button
          type="google"
          style={Styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 15, marginLeft: 20}}>
        <Text style={{...Styles.text1}}>Create New accountt</Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
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
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: '#bdc6cf',
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
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
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
