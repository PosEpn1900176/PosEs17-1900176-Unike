import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setMapAvailableServices } from '../../../../actions';

const useAvailableServices = () => {
  const selector = useSelector(state => state.services.map);
  const dispatch = useDispatch();
  const [data, fetch] = useFetch('availableService', 'get');
  useEffect(() => {
    fetch({ status: 'AVAILABLE' });
  }, []);

  useEffect(() => {
    dispatch(setMapAvailableServices(data.data));
  }, [data, dispatch]);

  return selector;
};

export { useAvailableServices };
