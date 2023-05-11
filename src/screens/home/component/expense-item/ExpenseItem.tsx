import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SmallPrice} from '../../../../components';
import styles from './styles';

type ExpenseItemProps = {
  title: string;
  price: number;
  onExpenseItemPress: () => void;
};

function ExpenseItem({title, price, onExpenseItemPress}: ExpenseItemProps) {
  const handleExpenseItemPress = () => {
    onExpenseItemPress();
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleExpenseItemPress}>
      <Text style={styles.itemTitle} numberOfLines={1}>
        {title}
      </Text>
      <SmallPrice value={price} containerStyle={styles.itemPrice} />
    </TouchableOpacity>
  );
}

export default ExpenseItem;
