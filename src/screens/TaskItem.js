import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.taskContainer}>
      <Text>{task.name}</Text>
      <Button title="Delete" onPress={() => dispatch(removeTask(task.id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskItem;
