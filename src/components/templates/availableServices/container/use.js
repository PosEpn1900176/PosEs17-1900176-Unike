import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setMapAvailableServices } from '../../../../actions';
import { addGeolocationData } from './utils';

const useAvailableServices = () => {
  const selector = useSelector(state => state.services.map.available);
  const dispatch = useDispatch();
  const [data, fetch] = useFetch('availableService');


  useEffect(() => {
    fetch({ ProfissionalId: 48 });
  }, []);

  useEffect(() => {
    dispatch(setMapAvailableServices(addGeolocationData(data.data)));
  }, [data, dispatch]);

  return selector;
};

export { useAvailableServices };
