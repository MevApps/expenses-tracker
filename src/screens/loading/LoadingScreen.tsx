import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5B58AD" />
    </View>
  );
}

export default LoadingScreen;
