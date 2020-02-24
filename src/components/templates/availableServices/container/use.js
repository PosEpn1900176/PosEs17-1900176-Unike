import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setMapAvailableServices } from '../../../../actions';

// const addGeolocationData = requests => {
//   return requests.map(request => {
//     const {Endereco, Numero} = request.EnderecoCliente
//   });
// };

const useAvailableServices = () => {
  const selector = useSelector(state => state.services.map.available);
  const dispatch = useDispatch();
  const [data, fetch] = useFetch('availableService');

  useEffect(() => {
    fetch({ ProfissionalId: 48 });
  }, []);

  useEffect(() => {
    console.log(data.data);
    addGeolocationData(data.data);
    // dispatch(setMapAvailableServices(data.data));
  }, [data, dispatch]);

  return selector;
};

export { useAvailableServices };
