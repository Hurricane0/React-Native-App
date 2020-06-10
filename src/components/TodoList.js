import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({ todos }) => {
  return (
    <View>
      {todos.map(todo => (
        <View>
          <Text>{todo.text}</Text>
        </View>
      ))}
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
