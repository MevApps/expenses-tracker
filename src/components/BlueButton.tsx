import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type BlueButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};
function BlueButton({text, style, onPress}: BlueButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#5B58AD',
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: 52,
    paddingVertical: 15,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
  },
});

export default BlueButton;
