import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  StatusBar,
} from 'react-native';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const backgroundImage = require('../assets/image/bg.png');

const Separator = () => <View style={styles.separator} />;

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [boolean, setBoolean] = useState(false);

  const handleLogin = () => {
    if (username === 'test@example.com' && password === 'password') {
      navigation.navigate('DataList');
      setErrorPassword('');
      setErrorUsername('');
setBoolean(false)
    } else if (username !== 'test@example.com') {
      setErrorUsername('Email tidak terdaftar');
      setErrorPassword('Password salah');
      setBoolean(true)
    } else if (username === 'test@example.com' && password !== 'password') {
      setErrorPassword('Password salah');
      setBoolean(true)
    }
  };

  const handleForgotPassword = () => {
    // Linking.openURL('https://www.your-url.com');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage} />

        <Text style={styles.title}>Masuk</Text>
        <Text style={styles.subtitle}>Selamat datang kembali!</Text>

        <InputComponent
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.input}
          validation={boolean}
        />
        {errorUsername !== '' ? (
          <Text style={styles.error}>{errorUsername}</Text>
        ) : null}

        <InputComponent
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          style={styles.input}
          isPassword={true}
          validation={boolean}
        />
        {errorPassword !== '' ? (
          <Text style={styles.error}>{errorPassword}</Text>
        ) : null}

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent
          title="Masuk"
          onPress={handleLogin}
          borderColor="#60b558"
          backgroundColor="#60b558"
        />

        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Belum punya akun?</Text>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={styles.createAccountText}> Buat Akun</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <Separator />
          <Text style={styles.separatorText}>atau</Text>
          <Separator />
        </View>

        <ButtonComponent
          title="Google"
          borderColor="#EAE9E9"
          backgroundColor="#FFFFFF"
        />

        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DataList')}>
            <Text style={styles.skipText}>
              Lewati, langsung lihat daftar komik
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 20,
    position: 'relative',
  },
  title: {
    fontFamily: 'Comic Book',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#020202',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#959697',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#3fa535',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#959697',
  },
  createAccountText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#3fa535',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  separatorText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#8F9092',
    marginHorizontal: 16,
  },
  skipContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 40,
    alignItems: 'center',
  },
  skipText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#3fa535',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 188,
    height: 130,
  },
  error: {
    color: 'red',
    marginLeft: 16,
  },
});

export default LoginScreen;
