import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  const initialTasks = ['Task 1', 'Task 2', 'Task 3']; // Example initial tasks

  return (
    <View style={styles.container}>
      <ToDoList tasks={initialTasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
  