import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 28,
  },
  rowContainer: {
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyLarge: {
    fontSize: 18,
    color: '#393939',
  },
  labelLarge: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
  },
  spacer: {
    height: 24,
  },
});

export default styles;
