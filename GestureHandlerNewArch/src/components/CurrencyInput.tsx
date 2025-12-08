
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useStateContext, useDispatchContext} from '../State';
import {applyCurrencyMask} from '../CurrencyMask';

export const CurrencyInput = () => {
  const {inputValue} = useStateContext();
  const dispatch = useDispatchContext();

  const handleChangeText = (text: string) => {
    const numericValue = parseFloat(text.replace(/[^0-9.-]+/g, '')) || 0;
    dispatch({type: 'SET_INPUT_VALUE', payload: numericValue});
  };

  return (
    <TextInput
      style={styles.input}
      value={applyCurrencyMask(inputValue)}
      onChangeText={handleChangeText}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    fontSize: 20,
  },
});
