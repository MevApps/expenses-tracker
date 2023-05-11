import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {
  CreateExpenseModalScreen,
  EditExpenseModalScreen,
  FilterExpenseModalScreen,
  LoadingScreen,
  MainScreen,
  WelcomeScreen,
} from './screens';
import {
  clearAllData,
  deleteAllData,
  getUserName,
  RealmProvider,
  storeUserName,
} from './storage';
import {RouteName} from './constants';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sawWelcomeScreen, setSawWelcomeScreen] = useState<boolean>(false);

  const handleLogin = async (name: string) => {
    await storeUserName(name);
    setSawWelcomeScreen(true);
  };

  const handleSignOut = async () => {
    await clearAllData();
    deleteAllData();
    setSawWelcomeScreen(false);
  };

  const loadUserName = async () => {
    const name = await getUserName();
    setSawWelcomeScreen(name !== null);
    setIsLoading(false);
  };

  useEffect(() => {
    loadUserName().then(() => console.log('user name loaded'));
  }, []);

  const ExpenseTrackerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#455EFF',
      background: '#FFFFFF',
    },
  };

  if (isLoading) {
    return LoadingScreen();
  }

  return (
    <NavigationContainer theme={ExpenseTrackerTheme}>
      <RealmProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
        <Stack.Navigator>
          {sawWelcomeScreen ? (
            <>
              <Stack.Group>
                <Stack.Screen
                  name={RouteName.Main}
                  options={{headerShown: false}}>
                  {() => <MainScreen onSignOut={handleSignOut} />}
                </Stack.Screen>
              </Stack.Group>
              <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                  name={RouteName.CreateExpense}
                  component={CreateExpenseModalScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={RouteName.EditExpense}
                  component={EditExpenseModalScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={RouteName.FilterExpense}
                  component={FilterExpenseModalScreen}
                  options={{headerShown: false}}
                />
              </Stack.Group>
            </>
          ) : (
            <Stack.Screen
              name={RouteName.Welcome}
              options={{headerShown: false}}>
              {() => <WelcomeScreen onLogin={handleLogin} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </RealmProvider>
    </NavigationContainer>
  );
}
export default App;
