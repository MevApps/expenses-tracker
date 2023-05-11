import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './styles';

type BlueButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

function BlueButton(props: BlueButtonProps) {
  const handlePress = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handlePress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default BlueButton;
