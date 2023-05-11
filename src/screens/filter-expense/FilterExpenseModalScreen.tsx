import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ExpenseForm, Modal} from '../../components';
import {
  storeAmountFilter,
  storeDateFilter,
  storeTitleFilter,
} from '../../storage';
import styles from './styles';
import {formatDate} from '../../utils';
import {getAmount, getDate, getTitle} from './actions';

function FilterExpenseModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const navigation = useNavigation();

  const handleTitleChange = useCallback((value: string = '') => {
    setTitle(value);
  }, []);

  const handleAmountChange = useCallback((value: string = '') => {
    setAmount(value);
  }, []);

  const handleDateChange = useCallback((value: Date | null = null) => {
    setDate(value);
  }, []);

  const handleClean = useCallback(() => {
    handleTitleChange();
    handleAmountChange();
    handleDateChange();
  }, [handleTitleChange, handleAmountChange, handleDateChange]);

  const handleDismiss = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleFilter = useCallback(async () => {
    await storeTitleFilter(title);
    await storeAmountFilter(amount);
    await storeDateFilter(date);
    navigation.goBack();
  }, [title, amount, date, navigation]);

  useEffect(() => {
    getTitle().then(handleTitleChange);
    getAmount().then(handleAmountChange);
    getDate().then(handleDateChange);
  }, [handleTitleChange, handleAmountChange, handleDateChange]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent(false);
    }, []),
  );

  return (
    <Modal
      modalTitle="Filter Expense"
      ctaText="Filter"
      onCTAPress={handleFilter}
      onDismiss={handleDismiss}>
      <TouchableOpacity
        style={styles.textButtonContainer}
        onPress={handleClean}>
        <Text style={styles.textButton}>clean</Text>
      </TouchableOpacity>
      <ExpenseForm
        titleValue={title}
        amountValue={amount}
        dateValue={formatDate(date)}
        onTitleChange={handleTitleChange}
        onAmountChange={handleAmountChange}
        onDateChange={handleDateChange}
      />
    </Modal>
  );
}

export default FilterExpenseModalScreen;
