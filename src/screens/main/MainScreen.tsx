import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {CreateExpenseModalScreen, HomeScreen, ProfileScreen} from '../index';
import {Fab} from '../../components';
import {homeScreenOptions, profileScreenOptions, tabBarOptions} from './consts';
import {RouteName, StackParamList} from '../../constants';
import {StackNavigationProp} from '@react-navigation/stack';

type RootNavigationProp = StackNavigationProp<StackParamList>;
const Tab = createBottomTabNavigator();

type MainScreenProps = {
  onSignOut: () => void;
};

const HomeScreenContent = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const handleExpenseItemClick = (itemId: Realm.BSON.ObjectId) => {
    navigation.navigate(RouteName.EditExpense, {
      expenseId: itemId.toHexString(),
    });
  };

  const handleFiltersClick = () => {
    navigation.navigate(RouteName.FilterExpense);
  };

  return (
    <HomeScreen
      onExpenseItemClick={handleExpenseItemClick}
      onFiltersClick={handleFiltersClick}
    />
  );
};
function MainScreen(props: MainScreenProps) {
  const navigation = useNavigation<RootNavigationProp>();

  const CreateExpenseModalButton = useRef(() => (
    <Fab onPress={() => navigation.navigate(RouteName.CreateExpense)} />
  )).current;

  const ProfileScreenContent = useRef(() => (
    <ProfileScreen onSignOut={props.onSignOut} />
  )).current;

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={RouteName.Home}
        options={homeScreenOptions}
        component={HomeScreenContent}
      />
      <Tab.Screen
        name={RouteName.CreateExpense}
        component={CreateExpenseModalScreen}
        options={{
          tabBarButton: CreateExpenseModalButton,
        }}
      />
      <Tab.Screen
        name={RouteName.Profile}
        options={profileScreenOptions}
        component={ProfileScreenContent}
      />
    </Tab.Navigator>
  );
}
export default MainScreen;
