import React, {useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ExpenseModal} from '../components';
import {addExpense} from '../storage';

function CreateExpenseModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const navigation = useNavigation();

  useFocusEffect(() => {
    StatusBar.setTranslucent(false);
  });
  const handleCreate = () => {
    if (date) {
      addExpense(title, amount, new Date(date));
    }
    navigation.goBack();
  };

  return (
    <ExpenseModal
      modalTitle="Create Expense"
      ctaText="Create"
      inputTitle={title}
      inputAmount={amount}
      inputDate={date}
      onTitleChange={setTitle}
      onAmountChange={setAmount}
      onDateChange={setDate}
      onCTAPress={handleCreate}
      onDismiss={navigation.goBack}
    />
  );
}
export default CreateExpenseModalScreen;
