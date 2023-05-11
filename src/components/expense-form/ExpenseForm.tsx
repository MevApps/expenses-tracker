import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import CurrencyInput from '../currency-input';
import {TextField} from '../index';

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

  const handleTitleChange = useCallback(
    (text: string) => {
      onTitleChange(text);
    },
    [onTitleChange],
  );

  const handleAmountChange = useCallback(
    (text: string) => {
      onAmountChange(text);
    },
    [onAmountChange],
  );

  const handleDateConfirm = useCallback(
    (selectedDate: Date) => {
      hideDatePicker();
      onDateChange(selectedDate);
    },
    [onDateChange],
  );
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
      <CurrencyInput value={amountValue} onValueChange={handleAmountChange} />
      <TouchableOpacity onPress={showDatePicker}>
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

export default ExpenseForm;
