import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {PriceInput, TextField} from './index';

interface Props {
  titleValue?: string;
  amountValue?: string;
  dateValue?: string;
  onTitleChange: (text: string) => void;
  onAmountChange: (amount: string) => void;
  onDateChange: (date: Date) => void;
}

function ExpenseForm({
  titleValue,
  amountValue,
  dateValue,
  onTitleChange,
  onAmountChange,
  onDateChange,
}: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleTitleChange = (text: string) => {
    onTitleChange(text);
  };
  const handleAmountChange = (text: string) => {
    onAmountChange(text);
  };
  const handleDateConfirm = (selectedDate: Date) => {
    hideDatePicker();
    onDateChange(selectedDate);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <TextField
        placeholder="Title"
        value={titleValue}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        onChangeText={handleTitleChange}
      />
      <PriceInput value={amountValue} onPriceChange={handleAmountChange} />
      <TouchableOpacity onPress={() => showDatePicker()}>
        <View pointerEvents="none">
          <TextField placeholder="Date" value={dateValue} />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ExpenseForm;
