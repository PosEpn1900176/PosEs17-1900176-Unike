// @flow
import useFormControl from '../useFormControl';
import { useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';


const useStorage = (name) => {
  const state = useSelector(state => state[name]);

  const { getItem, setItem, removeItem } = useAsyncStorage(name);

  const record = async () => {
    try {
      await setItem(JSON.stringify(state));
    } catch (error) {
      console.log(error)
    }

  }

  return { getItem, record, removeItem };
};

export default useStorage;
