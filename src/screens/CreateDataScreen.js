import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { createData } from '../services/api';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const CreateDataScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    if (!title) {
      Alert.alert('Validation Error', 'Title is required');
      return;
    }

    try {
      const newData = { title, body: 'Sample body', userId: 20 };
      await createData(newData);
      navigation.navigate('DataList');
    } catch (error) {
      Alert.alert('Error', 'Failed to create data');
    }
  };

  return (
    <View style={styles.container}>
      <InputComponent
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <ButtonComponent onPress={handleSubmit} title="Create" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default CreateDataScreen;
