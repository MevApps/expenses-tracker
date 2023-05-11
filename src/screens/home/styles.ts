import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    elevation: 10,
    alignSelf: 'center',
    marginTop: 16,
  },
  row: {
    alignItems: 'center',
    alignSelf: 'baseline',
    flexDirection: 'row',
  },
  rounded_button: {
    paddingVertical: 4,
    paddingHorizontal: 13,
    borderRadius: 60,
    backgroundColor: '#D9D9D9',
  },
});

export default styles;
