import React from 'react';
import {TextField} from './index';

type PriceInputProps = {
  value?: string;
  onPriceChange: (price: string) => void;
};

const formatText = (text: string) => {
  if (text === '$' || text === '') {
    return '';
  }
  if (text.charAt(0) !== '$') {
    return `$${text}`;
  }
  return text;
};

function PriceInput(props: PriceInputProps) {
  const {value = '', onPriceChange} = props;
  const handleChangeText = (text: string) => {
    const formattedText = formatText(text);
    onPriceChange(formattedText);
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

export default PriceInput;
