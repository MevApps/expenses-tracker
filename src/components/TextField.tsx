import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native/Libraries/Components/TextInput/TextInput';

const LABEL_INITIAL_TOP_POSITION = 40;
const LABEL_FOCUSED_TOP_POSITION = 10;
const LABEL_INITIAL_FONT_SIZE = 18;
const LABEL_FOCUSED_FONT_SIZE = 14;

type TextFieldProps = {
  placeholder: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText?: (text: string) => void;
};
const TextField = (props: TextFieldProps) => {
  const {
    placeholder,
    value,
    keyboardType,
    autoCapitalize,
    returnKeyType = 'default',
    onChangeText,
  } = props;

  const [hasFocus, setHasFocus] = useState(false);
  const [labelFontSize, setLabelFontSize] = useState(
    value ? LABEL_FOCUSED_FONT_SIZE : LABEL_INITIAL_FONT_SIZE,
  );
  const labelTopAnim = useRef(
    new Animated.Value(
      value ? LABEL_FOCUSED_TOP_POSITION : LABEL_INITIAL_TOP_POSITION,
    ),
  ).current;

  useEffect(() => {
    if (value) {
      changePosition(LABEL_FOCUSED_TOP_POSITION);
    }
  });
  const changePosition = (v: number) => {
    Animated.timing(labelTopAnim, {
      toValue: v,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  const handleChangeText = (t: string) => {
    onChangeText && onChangeText(t);
  };
  return (
    <View>
      <Animated.View style={{...styles.labelContainer, top: labelTopAnim}}>
        <Text
          style={{
            color: !hasFocus ? '#A6A6A6' : '#8C8C8C',
            fontSize: labelFontSize,
          }}>
          {placeholder}
        </Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        onFocus={() => {
          setHasFocus(true);
          setLabelFontSize(LABEL_FOCUSED_FONT_SIZE);
          changePosition(LABEL_FOCUSED_TOP_POSITION);
        }}
        onBlur={() => {
          if (!value) {
            setHasFocus(false);
            setLabelFontSize(LABEL_INITIAL_FONT_SIZE);
            changePosition(LABEL_INITIAL_TOP_POSITION);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Helvetica',
    color: '#000000',
    paddingStart: -5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
  },
  labelContainer: {
    fontSize: 16,
  },
});

export default TextField;
