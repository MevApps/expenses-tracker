import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_FILTER_TITLE = 'titleFilter';
const KEY_FILTER_AMOUNT = 'amountFilter';
const KEY_FILTER_DATE = 'dateFilter';
const KEY_USER_NAME = 'userName';

export async function storeUserName(userName: string): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY_USER_NAME, userName);
  } catch (e) {
    console.log('Error storing user name: ', e);
  }
}
export async function getUserName(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(KEY_USER_NAME);
  } catch {
    console.log('Error getting user name');
    return null;
  }
}

export async function clearAllData(): Promise<void> {
  AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
}

export async function storeTitleFilter(title: string) {
  try {
    await AsyncStorage.setItem(KEY_FILTER_TITLE, title);
  } catch (e) {
    console.log('Error storing last filter: ', e);
  }
}

export async function getTitleFilter(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(KEY_FILTER_TITLE);
  } catch {
    console.log('Error getting last filter');
    return null;
  }
}

export async function storeAmountFilter(amount: string) {
  try {
    await AsyncStorage.setItem(KEY_FILTER_AMOUNT, amount);
  } catch (e) {
    console.log('Error storing last filter: ', e);
  }
}

export async function getAmountFilter(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(KEY_FILTER_AMOUNT);
  } catch {
    console.log('Error getting last filter');
    return null;
  }
}
export async function storeDateFilter(date: Date | null) {
  try {
    await AsyncStorage.setItem(KEY_FILTER_DATE, date?.toISOString() || '');
  } catch (e) {
    console.log('Error storing last filter: ', e);
  }
}

export async function getDateFilter(): Promise<Date | null> {
  try {
    const date = await AsyncStorage.getItem(KEY_FILTER_DATE);
    if (date) {
      return new Date(date);
    }
    return null;
  } catch {
    console.log('Error getting last filter');
    return null;
  }
}
