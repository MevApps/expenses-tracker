import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type GreyButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  iconSource: ImageSourcePropType;
  onPress: () => void;
};
function GreyButton({text, iconSource, style, onPress}: GreyButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={iconSource} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'baseline',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 13,
    borderRadius: 60,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
});

export default GreyButton;
