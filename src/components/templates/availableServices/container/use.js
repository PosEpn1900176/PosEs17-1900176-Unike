import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setMapAvailableServices } from '../../../../actions';
import { addGeolocationData } from '../../../../utils/maps';

const useAvailableServices = () => {
  const user = useSelector(state => state.user);
  const selector = useSelector(state => state.services.map.available);
  const dispatch = useDispatch();
  const [data, fetch] = useFetch('availableService');
  console.log('DATA', data.data);

  useEffect(() => {
    fetch({
      params: {
        ProfissionalId: user.Id,
      },
    });
  }, []);

  useEffect(() => {
    dispatch(setMapAvailableServices(addGeolocationData(data.data)));
  }, [data.data, dispatch]);

  return selector;
};

export { useAvailableServices };
