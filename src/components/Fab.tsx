import {Image, TouchableOpacity, View} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import React from 'react';

interface FabProps {
  onPress: () => void;
}

const Fab = (props: FabProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        top: -28,
        elevation: 6,
        width: 56,
        height: 56,
        backgroundColor: DefaultTheme.colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/ic_plus.png')}
        style={{
          width: 30,
          height: 30,
          tintColor: 'white',
        }}
      />
    </View>
  </TouchableOpacity>
);
export default Fab;
