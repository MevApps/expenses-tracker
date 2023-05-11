import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, Text, TextInput, View} from 'react-native';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import styles from './styles';

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
const TextField = ({
  returnKeyType = 'default',
  placeholder,
  value,
  keyboardType,
  autoCapitalize,
  onChangeText,
}: TextFieldProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [labelFontSize, setLabelFontSize] = useState(
    value ? LABEL_FOCUSED_FONT_SIZE : LABEL_INITIAL_FONT_SIZE,
  );
  const labelTopAnim = useRef(
    new Animated.Value(
      value ? LABEL_FOCUSED_TOP_POSITION : LABEL_INITIAL_TOP_POSITION,
    ),
  ).current;

  const changePosition = useCallback(
    (v: number) => {
      Animated.timing(labelTopAnim, {
        toValue: v,
        duration: 100,
        useNativeDriver: false,
      }).start();
    },
    [labelTopAnim],
  );

  useEffect(() => {
    if (value) {
      changePosition(LABEL_FOCUSED_TOP_POSITION);
    }
  }, [changePosition, value]);

  const handleChangeText = useCallback(
    (t: string) => {
      onChangeText && onChangeText(t);
    },
    [onChangeText],
  );

  const handleInputFocus = useCallback(() => {
    setHasFocus(true);
    setLabelFontSize(LABEL_FOCUSED_FONT_SIZE);
    changePosition(LABEL_FOCUSED_TOP_POSITION);
  }, [changePosition]);

  const handleInputBlur = useCallback(() => {
    if (!value) {
      setHasFocus(false);
      setLabelFontSize(LABEL_INITIAL_FONT_SIZE);
      changePosition(LABEL_INITIAL_TOP_POSITION);
    }
  }, [changePosition, value]);

  const placeholderStyle = useMemo(
    () => ({
      color: !hasFocus ? '#A6A6A6' : '#8C8C8C',
      fontSize: labelFontSize,
    }),
    [hasFocus, labelFontSize],
  );

  return (
    <View>
      <Animated.View style={{...styles.labelContainer, top: labelTopAnim}}>
        <Text style={placeholderStyle}>{placeholder}</Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </View>
  );
};

export default TextField;
