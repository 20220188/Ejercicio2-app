import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from './src/components/TodoList'

const App = () => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
