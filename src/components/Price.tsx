import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type PriceProps = {
  value: number;
  containerStyle?: StyleProp<TextStyle> | undefined;
  integerStyle?: StyleProp<TextStyle> | undefined;
  currencyStyle?: StyleProp<TextStyle> | undefined;
  fractionStyle?: StyleProp<TextStyle> | undefined;
};

function Price(props: PriceProps) {
  const {value, containerStyle, integerStyle, currencyStyle, fractionStyle} =
    props;
  const [integerPart, fractionalPart] = value.toFixed(2).split('.');
  return (
    <View style={containerStyle}>
      <Text style={currencyStyle} numberOfLines={1}>
        $
        <Text style={integerStyle}>
          {Number(integerPart).toLocaleString()}.
          <Text style={fractionStyle}>{fractionalPart}</Text>
        </Text>
      </Text>
    </View>
  );
}

export function LargePrice(props: PriceProps) {
  const {value, containerStyle} = props;
  return (
    <Price
      value={value}
      containerStyle={containerStyle}
      currencyStyle={styles.currencyLarge}
      fractionStyle={styles.fractionLarge}
      integerStyle={styles.integerLarge}
    />
  );
}

export function SmallPrice(props: PriceProps) {
  const {value, containerStyle} = props;
  return (
    <Price
      value={value}
      containerStyle={containerStyle}
      currencyStyle={styles.currencySmall}
      fractionStyle={styles.fractionSmall}
      integerStyle={styles.integerSmall}
    />
  );
}

const styles = StyleSheet.create({
  integerLarge: {
    fontFamily: 'Helvetica',
    fontSize: 22,
    color: '#000000',
  },
  fractionLarge: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#000000',
  },
  currencyLarge: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: '#000000',
  },
  integerSmall: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#000000',
  },
  fractionSmall: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#000000',
  },
  currencySmall: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: '#000000',
  },
});
