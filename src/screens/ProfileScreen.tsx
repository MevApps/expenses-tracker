import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Expense} from '../model';
import {useQuery} from '../storage';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 28,
  },
  rowContainer: {
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyLarge: {
    fontSize: 18,
    color: '#393939',
  },
  labelLarge: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
  },
  spacer: {
    height: 24,
  },
});

export default ProfileScreen;
