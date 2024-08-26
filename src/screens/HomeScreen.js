import React, {useState} from 'react';
import {View, TextInput, Button, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TaskItem from './TaskItem';
import {addTask} from '../store/actions';

const HomeScreen = () => {
  const tasks = useSelector(state => state.tasks.tasks); // Access tasks from Redux store
  
  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the action to add a task
      setTask(''); // Clear the input field after adding the task
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskItem task={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
