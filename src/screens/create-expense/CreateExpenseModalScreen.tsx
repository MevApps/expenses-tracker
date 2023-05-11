import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ExpenseForm, Modal} from '../../components';
import {addExpense} from '../../storage';
import {formatDate} from '../../utils';

function CreateExpenseModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const navigation = useNavigation();

  const handleCreate = useCallback(() => {
    if (date) {
      addExpense(title, amount, new Date(date));
    }
    navigation.goBack();
  }, [date, title, amount, navigation]);

  const handleDismiss = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleTitleChange = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleAmountChange = useCallback((text: string) => {
    setAmount(text);
  }, []);

  const handleDateChange = useCallback((d: Date) => {
    setDate(d);
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent(false);
    }, []),
  );

  return (
    <Modal
      modalTitle="Create Expense"
      ctaText="Create"
      onCTAPress={handleCreate}
      onDismiss={handleDismiss}>
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
export default CreateExpenseModalScreen;
