import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

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
      <TouchableOpacity
        onPress={() => {
          addTodo(input.trim());
          setInput('');
        }}
        activeOpacity={0.6}
      >
        <View style={styles.circleButton}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  circleButton: {
    backgroundColor: '#000',
    alignSelf: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
  },
});
