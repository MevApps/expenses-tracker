import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

type GreyButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  iconSource: ImageSourcePropType;
  onPress: () => void;
};

function GreyButton(props: GreyButtonProps) {
  const handlePress = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handlePress}>
      <Image source={props.iconSource} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default GreyButton;
