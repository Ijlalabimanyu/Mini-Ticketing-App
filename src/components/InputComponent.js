import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const eyeOff = require('../assets/icon/eyeOff.png');
const eye = require('../assets/icon/eye.png');

const InputComponent = ({
  value,
  onChangeText,
  placeholder,
  isPassword,
  validation,
  borderColor = 'red',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {borderColor: validation ? borderColor : '#ccc'},
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}>
          {showPassword ? (
            <Image source={eyeOff}  style={styles.backgroundImage}/>
          ) : (
            <Image source={eye}  />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1,
    borderRadius: 1000,
    paddingHorizontal: 20,
    position: 'relative',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  iconContainer: {
    paddingLeft: 10,
  },
  backgroundImage: {
  },
});

export default InputComponent;
