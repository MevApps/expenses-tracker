import React, {useState} from 'react';
import {StatusBar, StyleSheet, TextInput, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {BlueButton} from '../components';

type WelcomeScreenProps = {
  onLogin: (name: string) => void;
};

function WelcomeScreen(props: WelcomeScreenProps) {
  const [name, setName] = useState('');

  useFocusEffect(() => {
    StatusBar.setTranslucent(false);
  });
  const handleLogin = () => {
    props.onLogin(name);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor={'#AAA9C0'}
        autoCapitalize="words"
        value={name}
        onChangeText={handleNameChange}
      />
      <BlueButton text="Login" style={styles.button} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlignVertical: 'bottom',
    width: '68%',
    borderColor: '#5B58AD',
    borderWidth: 1,
    borderRadius: 3,
    paddingBottom: 9,
    paddingTop: 20,
    paddingStart: 10,
  },
  button: {
    position: 'absolute',
    bottom: 62,
  },
});

export default WelcomeScreen;
