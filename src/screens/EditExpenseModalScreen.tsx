import React, {useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ExpenseModal} from '../components';
import {updateExpense, useObject} from '../storage';
import {Expense} from '../model';

function EditExpenseModalScreen({route}) {
  const {expenseId} = route.params;
  const expense = useObject(
    Expense,
    Realm.BSON.ObjectId.createFromHexString(expenseId),
  );
  const [title, setTitle] = useState(expense?.title || '');
  const [amount, setAmount] = useState(
    expense?.getFormattedAmount()?.toString() || '',
  );
  const [date, setDate] = useState(expense?.date);
  const navigation = useNavigation();

  useFocusEffect(() => {
    StatusBar.setTranslucent(false);
  });

  const handleSave = () => {
    if (date) {
      updateExpense(expense as Expense, title, amount, new Date(date));
    }
    navigation.goBack();
  };

  return (
    <ExpenseModal
      modalTitle="Edit Expense"
      ctaText="Edit"
      inputTitle={title}
      inputAmount={amount}
      inputDate={date}
      onTitleChange={setTitle}
      onAmountChange={setAmount}
      onDateChange={setDate}
      onCTAPress={handleSave}
      onDismiss={navigation.goBack}
    />
  );
}

export default EditExpenseModalScreen;
