import { useState } from 'react';
import {
  CategoryListService,
  ProfessionalService,
  ServiceAvailableServices,
} from '../../services';

const servicesAPI = {
  categories: CategoryListService,
  professional: ProfessionalService,
  scheduleAvailable: ServiceAvailableServices,
};

const useFetch = (service, method = 'get') => {
  const [fetch, setFetch] = useState({
    loading: true,
    error: false,
    done: false,
    data: [],
    message: '',
  });

  const requestAPI = async params => {
    try {
      console.log('Service', service);
      console.log('Instance', servicesAPI[service]);
      const api = servicesAPI[service];
      setFetch({
        ...fetch,
        loading: true,
      });
      const data = await api[method](params);
      console.log('data', data)

      setFetch({
        data: data.data ? data.data : data,
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
        message: error,
      });
    }
  };

  const set = param => {
    requestAPI(param);
  };

  return [fetch, set];
};

export default useFetch;
