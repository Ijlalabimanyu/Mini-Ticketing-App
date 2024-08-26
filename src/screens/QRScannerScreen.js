// src/screens/QRScannerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScannerScreen = ({ navigation }) => {
  const onSuccess = e => {
    const scannedId = e.data;
    const event = events[scannedId];

    if (event) {
      navigation.navigate('DataList', { eventId: scannedId });
    } else {
      alert('No matching event found');
    }
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner onRead={onSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QRScannerScreen;
