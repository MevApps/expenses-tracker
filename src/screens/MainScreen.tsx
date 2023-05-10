import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {RouteName} from '../App';
import {CreateExpenseModalScreen, HomeScreen, ProfileScreen} from './index';
import {Fab} from '../components';

const Tab = createBottomTabNavigator();

type MainScreenProps = {
  onSignOut: () => void;
};

function MainScreen(props: MainScreenProps) {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 87,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
        },
      }}>
      <Tab.Screen
        name={RouteName.Home}
        options={{
          tabBarIconStyle: {display: 'none'},
        }}>
        {() => (
          <HomeScreen
            onExpenseItemClick={itemId =>
              navigation.navigate(RouteName.EditExpense, {
                expenseId: itemId.toHexString(),
              })
            }
            onFiltersClick={() => navigation.navigate(RouteName.FilterExpense)}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={RouteName.CreateExpense}
        component={CreateExpenseModalScreen}
        options={{
          tabBarButton: () => (
            <Fab onPress={() => navigation.navigate(RouteName.CreateExpense)} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Profile}
        options={{
          tabBarIconStyle: {display: 'none'},
        }}>
        {() => <ProfileScreen onSignOut={props.onSignOut} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
export default MainScreen;
