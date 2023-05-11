import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface FabProps {
  onPress: () => void;
}

function Fab(props: FabProps) {
  const handlePress = () => {
    props.onPress();
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/ic_plus.png')}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}
export default Fab;
