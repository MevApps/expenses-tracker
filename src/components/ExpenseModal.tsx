import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {BlueButton, ExpenseForm} from './index';

interface ExpenseModalProps {
  modalTitle: string;
  ctaText: string;
  inputTitle?: string;
  inputAmount?: string;
  inputDate?: Date | null;
  onTitleChange: (text: string) => void;
  onAmountChange: (amount: string) => void;
  onDateChange: (date: Date) => void;
  onCTAPress: () => void;
  onDismiss: () => void;
}

function ExpenseModal(props: ExpenseModalProps) {
  const {
    modalTitle,
    ctaText,
    inputTitle = '',
    inputAmount = '',
    inputDate = null,
    onTitleChange,
    onAmountChange,
    onDateChange,
    onCTAPress,
    onDismiss,
  } = props;
  const dateString = inputDate ? moment(inputDate).format('DD.MM.YYYY') : '';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDismiss} style={styles.closeButton}>
        <Image source={require('../assets/ic_close.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{modalTitle}</Text>
      <ExpenseForm
        titleValue={inputTitle}
        amountValue={inputAmount}
        dateValue={dateString}
        onTitleChange={onTitleChange}
        onAmountChange={onAmountChange}
        onDateChange={onDateChange}
      />
      <BlueButton style={styles.button} text={ctaText} onPress={onCTAPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  title: {
    marginTop: 8,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  button: {
    position: 'absolute',
    bottom: 62,
  },
});

export default ExpenseModal;
