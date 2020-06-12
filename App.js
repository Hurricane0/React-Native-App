import React, { useState } from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { AddTodo } from './src/components/AddTodo';
import { TodoList } from './src/components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { id: Date.now().toString(), text: 'First todo', completed: false },
  ]);

  const [completed, setCompleted] = useState(false);

  const addTodo = text => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };
  return (
    <View style={styles.wrapper}>
      {/* <Text style={styles.text}>Даша привет!</Text> */}
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
  checkbox: {
    height: 30,
    width: 30,
  },
});
