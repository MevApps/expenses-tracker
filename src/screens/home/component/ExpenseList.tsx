import {SectionList, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Seperator} from '../../../components';
import {Expense} from '../../../model';
import {ExpenseItem} from './index';

type SectionType = {
  date: string;
  data: Expense[];
};
interface ExpenseListProps {
  expenses: SectionType[];
  onExpenseItemClick: (id: Realm.BSON.ObjectId) => void;
}

function renderExpenseDateSectionHeader({section}: {section: {date: string}}) {
  return <Text style={styles.section}>{section.date}</Text>;
}
function ExpenseList({expenses, onExpenseItemClick}: ExpenseListProps) {
  return (
    <SectionList
      style={styles.container}
      sections={expenses}
      renderItem={({item}) => (
        <ExpenseItem
          title={item.title}
          price={item.amount}
          onExpenseItemClick={() => onExpenseItemClick(item._id)}
        />
      )}
      ItemSeparatorComponent={Seperator}
      renderSectionHeader={renderExpenseDateSectionHeader}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  section: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.8)',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10,
    paddingVertical: 5.5,
    paddingHorizontal: 16,
    backgroundColor: '#F4EEEE',
  },
});

export default ExpenseList;
