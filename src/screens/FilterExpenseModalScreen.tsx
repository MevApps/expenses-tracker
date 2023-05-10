import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ExpenseModal} from '../components';
import {
  getAmountFilter,
  getDateFilter,
  getTitleFilter,
  storeAmountFilter,
  storeDateFilter,
  storeTitleFilter,
} from '../storage';

function FilterExpenseModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const navigation = useNavigation();

  const getTitle = async () => {
    return (await getTitleFilter()) ?? '';
  };
  const getAmount = async () => {
    return (await getAmountFilter()) ?? '';
  };
  const getDate = async () => {
    return await getDateFilter();
  };

  useEffect(() => {
    getTitle().then(handleSetTitle);
    getAmount().then(handleSetAmount);
    getDate().then(handleSetDate);
  }, []);

  useFocusEffect(() => {
    StatusBar.setTranslucent(false);
  });

  const handleSetTitle = (value: string = '') => {
    setTitle(value);
  };

  const handleSetAmount = (value: string = '') => {
    setAmount(value);
  };

  const handleSetDate = (value: Date | null = null) => {
    setDate(value);
  };
  const handleClean = async () => {
    handleSetTitle();
    handleSetAmount();
    handleSetDate();
  };

  const handleFilter = async () => {
    await storeTitleFilter(title);
    await storeAmountFilter(amount);
    await storeDateFilter(date);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textButtonContainer}
        onPress={handleClean}>
        <Text style={styles.textButton}>clean</Text>
      </TouchableOpacity>
      <ExpenseModal
        modalTitle="Filter Expense"
        ctaText="Filter"
        inputTitle={title}
        inputAmount={amount}
        inputDate={date}
        onTitleChange={handleSetTitle}
        onAmountChange={handleSetAmount}
        onDateChange={handleSetDate}
        onCTAPress={handleFilter}
        onDismiss={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textButtonContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    start: 24,
  },
  textButton: {
    color: '#455EFF',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
});

export default FilterExpenseModalScreen;
