import React, {useState} from 'react';
import {StatusBar, TextInput, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {BlueButton} from '../../components';
import styles from './styles';

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

export default WelcomeScreen;
