import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BlueButton} from '../index';
import styles from './styles';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  modalTitle: string;
  ctaText: string;
  onCTAPress: () => void;
  onDismiss: () => void;
};
function Modal(props: ModalProps) {
  const handleCTAPress = () => {
    props.onCTAPress();
  };

  const handleDismissPress = () => {
    props.onDismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDismissPress} style={styles.closeButton}>
        <Image source={require('../../assets/ic_close.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.modalTitle}</Text>
      {props.children}
      <BlueButton
        style={styles.button}
        text={props.ctaText}
        onPress={handleCTAPress}
      />
    </View>
  );
}
export default Modal;
