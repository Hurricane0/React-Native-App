import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');
  return (
    <View>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder="Enter your todo"
        style={styles.input}
      />
      <Button onPress={() => addTodo(input.trim())} title="Add todo" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: 5,
    fontSize: 18,
    paddingHorizontal: 5,
  },
});
