import React from 'react';
import {TextField} from '../index';
import {formatText} from './actions';

type CurrencyInputProps = {
  value?: string;
  onValueChange: (value: string) => void;
};

function CurrencyInput({value = '', onValueChange}: CurrencyInputProps) {
  const handleChangeText = (text: string) => {
    onValueChange(text);
  };

  return (
    <TextField
      placeholder="Amount"
      value={formatText(value)}
      keyboardType="numeric"
      onChangeText={handleChangeText}
    />
  );
}

export default CurrencyInput;
