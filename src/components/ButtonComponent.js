import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const googleLogo = require('../assets/icon/image.png');

const ButtonComponent = ({
  title,
  onPress,
  borderColor = '#ccc',
  backgroundColor = '#60b558',
}) => {
  const fontFamily =
    backgroundColor === '#60b558' ? 'Inter-Medium' : 'Inter-SemiBold';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {borderColor, backgroundColor}]}>
      <View style={styles.content}>
        {backgroundColor !== '#60b558' ? (
          <Image source={googleLogo} style={styles.icon} />
        ) : null}
        <Text
          style={[
            styles.text,
            {
              fontFamily,
              color: backgroundColor === '#60b558' ? '#F8F8F8' : '#000000',
            },
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 353,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 1000,
    marginVertical: 0,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default ButtonComponent;
