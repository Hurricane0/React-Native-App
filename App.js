import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { AddTodo } from './src/components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { id: Date.now().toString(), text: 'First todo', completed: false },
  ]);

  const addTodo = text => {
    alert(text);
  };
  return (
    <View>
      <Navbar title="Todo" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
