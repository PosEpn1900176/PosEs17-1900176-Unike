import { useSelector } from 'react-redux';
import { prepareDataForSend } from './utils';
import useFetch from '../useFetch';

const useSaveSignup = () => {
  const selector = useSelector(state => state.signup);
  const [data, fetch] = useFetch('professional', 'post');
  const save = async () => {
    await fetch(prepareDataForSend(selector));
  };

  return [data, save];
};

export { useSaveSignup };
