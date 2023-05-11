import {SectionList, Text} from 'react-native';
import React from 'react';
import {Expense} from '../../../../model';
import styles from './styles';
import ExpenseItem from '../expense-item';
import {Seperator} from '../../../../components';

type SectionType = {
  date: string;
  data: Expense[];
};
interface ExpenseListProps {
  expenses: SectionType[];
  onExpenseItemPress: (id: Realm.BSON.ObjectId) => void;
}

function renderExpenseDateSectionHeader({section}: {section: {date: string}}) {
  return <Text style={styles.section}>{section.date}</Text>;
}

function ExpenseList({expenses, onExpenseItemPress}: ExpenseListProps) {
  return (
    <SectionList
      style={styles.container}
      sections={expenses}
      renderItem={({item}) => (
        <ExpenseItem
          title={item.title}
          price={item.amount}
          onExpenseItemPress={() => onExpenseItemPress(item._id)}
        />
      )}
      ItemSeparatorComponent={Seperator}
      renderSectionHeader={renderExpenseDateSectionHeader}
    />
  );
}

export default ExpenseList;
