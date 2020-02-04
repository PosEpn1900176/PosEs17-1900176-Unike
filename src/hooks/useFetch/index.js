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
    done: false,
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
      setFetch({
        data,
        done: true,
        error: false,
        loading: false,
      });
    } catch (error) {
      setFetch({
        ...fetch,
        done: false,
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
