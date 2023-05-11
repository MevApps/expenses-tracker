import {Text, View} from 'react-native';
import React from 'react';
import {LargePrice} from '../../../../components';
import styles from './styles';

interface TotalExpensesProps {
  amount: number;
}
function TotalExpenses(props: TotalExpensesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        Total Expenses:
      </Text>
      <LargePrice value={props.amount} />
    </View>
  );
}
export default TotalExpenses;
