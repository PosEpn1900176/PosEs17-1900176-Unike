import { useDispatch } from 'react-redux';
import { setUser } from '../../actions';

const useUser = () => {
  const dispatch = useDispatch();

  const set = user => {
    dispatch(setUser(user));
  };

  return set;
};

export default useUser;
