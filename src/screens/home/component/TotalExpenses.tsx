import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LargePrice} from '../../../components';

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

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    alignItems: 'center',
    alignSelf: 'baseline',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Helvetica',
    marginStart: 13,
    marginEnd: 9,
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TotalExpenses;
