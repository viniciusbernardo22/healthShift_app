import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SaveUser(userInfo) {
    await AsyncStorage.setItem('user', JSON.stringify(userInfo));
  }
  
  export async function RemoveUser(){
    await AsyncStorage.removeItem('user');
  }