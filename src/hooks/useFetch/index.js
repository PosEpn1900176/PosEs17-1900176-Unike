import { useState } from 'react';
import { CategoryListService, ProfessionalService } from '../../services';

const servicesAPI = {
  categories: CategoryListService,
  professional: ProfessionalService,
};

const useFetch = (service, method = 'get') => {
  const [fetch, setFetch] = useState({
    loading: true,
    error: false,
    data: [],
  });

  const requestAPI = async params => {
    try {
      const api = servicesAPI[service];

      setFetch({
        ...fetch,
        loading: true,
      });
      const { data = [] } = await api[method](params);
      console.log('USE_FETCH_SUCCESS');
      setFetch({
        ...fetch,
        data,
        loading: false,
      });
    } catch (error) {
      console.log('USE_FETCH_ERROR');
      console.log(error);
      setFetch({
        ...fetch,
        loading: false,
        error: true,
      });
    }
  };

  const set = param => {
    requestAPI(param);
  };

  return [fetch, set];
};

export default useFetch;
