import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 23,
    paddingStart: 16,
    paddingEnd: 24,
  },
  itemTitle: {
    flex: 2,
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400',
    color: '#3E3E3E',
  },
  itemPrice: {
    alignItems: 'flex-end',
    flex: 1,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '400',
    color: '#3E3E3E',
  },
});

export default styles;
