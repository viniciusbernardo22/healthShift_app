import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_KEY = 'user';

async function GetUser() {
  await AsyncStorage.getItem(USER_KEY);
}
async function SaveUser(userInfo) {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(userInfo));
}
async function RemoveUser() {
  await AsyncStorage.removeItem(USER_KEY);
}

export { GetUser, SaveUser, RemoveUser };
