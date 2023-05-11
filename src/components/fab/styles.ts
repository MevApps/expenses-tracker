import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    top: -28,
    elevation: 6,
    width: 56,
    height: 56,
    backgroundColor: DefaultTheme.colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});
export default styles;
