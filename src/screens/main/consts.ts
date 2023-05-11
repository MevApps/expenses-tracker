import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export const tabBarOptions: {
  headerShown: boolean;
  tabBarStyle: {
    height: number;
  };
  tabBarLabelStyle: StyleProp<TextStyle>;
} = {
  headerShown: false,
  tabBarStyle: {
    height: 87,
  },
  tabBarLabelStyle: {
    fontSize: 13,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlignVertical: 'center',
  },
};

export const homeScreenOptions: BottomTabNavigationOptions = {
  tabBarIconStyle: {display: 'none'},
};
export const profileScreenOptions: BottomTabNavigationOptions = {
  tabBarIconStyle: {display: 'none'},
};
