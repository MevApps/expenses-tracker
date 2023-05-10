import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SmallPrice} from '../../../components';

type ExpenseItemProps = {
  title: string;
  price: number;
  onExpenseItemClick: () => void;
};

function ExpenseItem({title, price, onExpenseItemClick}: ExpenseItemProps) {
  return (
    <TouchableOpacity style={styles.item} onPress={onExpenseItemClick}>
      <Text style={styles.itemTitle} numberOfLines={1}>
        {title}
      </Text>
      <SmallPrice value={price} containerStyle={styles.itemPrice} />
    </TouchableOpacity>
  );
}

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
  seperator: {
    height: 0.5,
    backgroundColor: '#000000',
  },
});

export default ExpenseItem;
