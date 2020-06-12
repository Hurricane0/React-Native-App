import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export const TodoList = ({ todos }) => {
  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id}>
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
