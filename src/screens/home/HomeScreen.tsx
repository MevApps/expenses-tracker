import {StatusBar, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import styles from './styles';

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

  const getLastFilteredExpenses = useCallback(async () => {
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
  }, [expenses]);

  useEffect(() => {
    getLastFilteredExpenses().then(lastFilteredExpenses => {
      setFilteredExpenses(lastFilteredExpenses);
    });
  }, [isFocused, getLastFilteredExpenses]);

  useFocusEffect(() => {
    StatusBar.setTranslucent(true);
  });

  async function loadUserName() {
    return await getUserName();
  }

  useEffect(() => {
    loadUserName().then(name => setUserName(name ?? ''));
  }, []);

  const formattedExpenses = Object.keys(expensesByDate).map(date => ({
    date: date,
    data: expensesByDate[date],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <TotalExpenses amount={totalAmount} />
      <FiltersButton onPress={onFiltersClick} />
      <ExpenseList
        expenses={formattedExpenses}
        onExpenseItemPress={onExpenseItemClick}
      />
    </View>
  );
}
export default HomeScreen;
