import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

export default function SigninScreen({title}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={Styles.container}>
      <Header title="MY ACCOUNT" />

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

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={Styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={Styles.TextInput2}>
          <Animatable.View
            animation={setTextInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" iconStyle={{color: '#86939e'}} type="material" />
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
});
