import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({style, error, onChangeText, value, label, onBlur, onFocus}) => {
  const getBorderColor = () => {
    if (error) {
      return 'red';
    } else {
      return 'grey';
    }
  };
  return (
    <View style={{marginVertical: 20}}>
      {label && <Text style={{fontSize: 20, color: 'black'}}>{label}</Text>}
      <TextInput
        style={[
          style,
          {borderColor: getBorderColor(), height: 40, borderWidth: 2},
        ]}
        onChangeText={onChangeText}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
