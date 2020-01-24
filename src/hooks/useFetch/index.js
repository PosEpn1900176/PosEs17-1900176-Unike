import { useState, useEffect } from 'react';
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
  const [params, setParams] = useState({});

  const requestAPI = async parameters => {
    try {
      const api = servicesAPI[service];
      setParams(parameters);
      setFetch({
        ...fetch,
        loading: true,
      });
      const { data = [] } = await api[method](params);
      setFetch({
        ...fetch,
        data,
        loading: false,
      });
    } catch (error) {
      setFetch({
        ...fetch,
        loading: false,
        error: true,
      });
    }
  };

  const set = params => {
    console.log('SET_USE_FETCH', JSON.stringify(params))
    requestAPI(params);
  };

  return [fetch, set];
};

export default useFetch;
