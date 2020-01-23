import AsyncStorage from '@react-native-community/async-storage';

const getUserToken = async () => {
  return await AsyncStorage.getItem('unikeToken');
};

export { getUserToken };
