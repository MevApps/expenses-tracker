import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Expense} from '../../model';
import {useQuery} from '../../storage';
import styles from './styles';

type ProfileScreenProps = {
  onSignOut: () => void;
};
function ProfileScreen(props: ProfileScreenProps) {
  const totalExpenses = useQuery(Expense).length;

  useFocusEffect(() => {
    StatusBar.setTranslucent(true);
  });

  const handleSignOut = () => {
    props.onSignOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.bodyLarge}>Total Expenses Items</Text>
        <Text style={styles.labelLarge}>{totalExpenses}</Text>
      </View>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.rowContainer} onPress={handleSignOut}>
        <Text style={styles.bodyLarge}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
