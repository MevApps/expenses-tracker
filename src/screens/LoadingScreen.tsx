import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5B58AD" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
