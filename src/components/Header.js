import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({title, navigation, type}) {
  return (
    <View style={Styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type="Feather"
          name="arrow-left"
          color={colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View>
        <Text style={Styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
