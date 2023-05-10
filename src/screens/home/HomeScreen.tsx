import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {buildFilterString} from '../../utils';
import {Expense} from '../../model';
import {ExpenseList, FiltersButton, TotalExpenses} from './component';
import {
  getAmountFilter,
  getDateFilter,
  getTitleFilter,
  getUserName,
  useQuery,
} from '../../storage';

type HomeScreenProps = {
  onExpenseItemClick: (id: Realm.BSON.ObjectId) => void;
  onFiltersClick: () => void;
};
function HomeScreen({onExpenseItemClick, onFiltersClick}: HomeScreenProps) {
  const expenses = useQuery(Expense);
  const isFocused = useIsFocused();
  const [userName, setUserName] = useState<string>('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const totalAmount = filteredExpenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
  const expensesByDate = filteredExpenses
    .sorted('date', true)
    .reduce((accumulator: Record<string, Expense[]>, expense: Expense) => {
      const dateString = moment(expense.date).format('DD.MM.YYYY');
      if (!accumulator[dateString]) {
        accumulator[dateString] = [];
      }
      accumulator[dateString].push(expense);
      return accumulator;
    }, {});

  const getLastFilteredExpenses = async () => {
    const titleFilter = await getTitleFilter();
    const amountFilter = await getAmountFilter();
    const dateFilter = await getDateFilter();
    const filter = buildFilterString(titleFilter, amountFilter, dateFilter);
    const dateFilterStartOfDay = moment(dateFilter).startOf('day');
    return filter
      ? expenses.filtered(
          filter,
          dateFilterStartOfDay.toDate(),
          dateFilterStartOfDay.add(1, 'day').toDate(),
        )
      : expenses;
  };

  useEffect(() => {
    getLastFilteredExpenses().then(lastFilteredExpenses => {
      setFilteredExpenses(lastFilteredExpenses);
    });
  }, [isFocused]);

  useFocusEffect(() => {
    StatusBar.setTranslucent(true);
  });

  async function loadUserName() {
    return await getUserName();
  }

  useEffect(() => {
    loadUserName().then(name => setUserName(name ?? ''));
  }, []);

  const newExpenses = Object.keys(expensesByDate).map(date => ({
    date: date,
    data: expensesByDate[date],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <TotalExpenses amount={totalAmount} />
      <FiltersButton onPress={onFiltersClick} />
      <ExpenseList
        expenses={newExpenses}
        onExpenseItemClick={onExpenseItemClick}
      />
    </View>
  );
}

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

export default HomeScreen;
