// @flow
import { useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';

const useStorage = name => {
  const nameState = useSelector(state => state[name]);

  const { getItem, setItem, removeItem } = useAsyncStorage(name);

  const record = async () => {
    try {
      await setItem(JSON.stringify(nameState));
    } catch (error) {
      console.log(error);
    }
  };

  return { getItem, record, removeItem };
};

export default useStorage;
