import React from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem text={item.text} />}
      keyExtractor={todo => todo.id}
    />
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
