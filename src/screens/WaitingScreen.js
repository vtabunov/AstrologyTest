import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SvgGirl from '../svg/SvgGirl';
import {white} from '../constants/colors';

const WaitingScreen = () => {
  return (
    <View style={s.container}>
      <SvgGirl style={s.girl} />
      <Text style={s.text}>Please wait while I prepare{`\n`}your report</Text>
      <Text style={s.text2}>
        My content is developed by industry leaders like Stephanie Dempsey, Hans
        Decoz, Stephanie Gailing and Aliza Kelly.
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  girl: {
    marginBottom: 21,
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 14,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default WaitingScreen;
