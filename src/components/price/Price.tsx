import {Text, View} from 'react-native';
import React from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './styles';

type PriceProps = {
  value: number;
  containerStyle?: StyleProp<TextStyle> | undefined;
  integerStyle?: StyleProp<TextStyle> | undefined;
  currencyStyle?: StyleProp<TextStyle> | undefined;
  fractionStyle?: StyleProp<TextStyle> | undefined;
};

function Price(props: PriceProps) {
  const [integerPart, fractionalPart] = props.value.toFixed(2).split('.');
  return (
    <View style={props.containerStyle}>
      <Text style={props.currencyStyle} numberOfLines={1}>
        $
        <Text style={props.integerStyle}>
          {Number(integerPart).toLocaleString()}.
          <Text style={props.fractionStyle}>{fractionalPart}</Text>
        </Text>
      </Text>
    </View>
  );
}

export function LargePrice(props: PriceProps) {
  return (
    <Price
      value={props.value}
      containerStyle={props.containerStyle}
      currencyStyle={styles.currencyLarge}
      fractionStyle={styles.fractionLarge}
      integerStyle={styles.integerLarge}
    />
  );
}

export function SmallPrice(props: PriceProps) {
  return (
    <Price
      value={props.value}
      containerStyle={props.containerStyle}
      currencyStyle={styles.currencySmall}
      fractionStyle={styles.fractionSmall}
      integerStyle={styles.integerSmall}
    />
  );
}
