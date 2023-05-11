import React, {useCallback, useState} from 'react';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ExpenseForm, Modal} from '../../components';
import {updateExpense, useObject} from '../../storage';
import {Expense} from '../../model';
import {formatDate} from '../../utils';
import {RouteName, StackParamList} from '../../constants';

type EditExpenseModalScreenRouteProp = RouteProp<
  StackParamList,
  RouteName.EditExpense
>;

interface EditExpenseModalScreenProps {
  route?: EditExpenseModalScreenRouteProp;
}

function EditExpenseModalScreen({route}: EditExpenseModalScreenProps) {
  const expenseId = route?.params.expenseId ?? '';
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

  const handleTitleChange = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleAmountChange = useCallback((text: string) => {
    setAmount(text);
  }, []);

  const handleDateChange = useCallback((d: Date) => {
    setDate(d);
  }, []);

  const handleDismiss = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(() => {
    if (date) {
      updateExpense(expense as Expense, title, amount, new Date(date));
    }
    navigation.goBack();
  }, [expense, title, amount, date, navigation]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent(false);
    }, []),
  );

  return (
    <Modal
      modalTitle="Edit Expense"
      ctaText="Edit"
      onCTAPress={handleSave}
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

export default EditExpenseModalScreen;
