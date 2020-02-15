import { useState } from 'react';
import {
  CategoryListService,
  ProfessionalService,
  AvailableServiceServices,
  serviceServices,
} from '../../services';

const servicesAPI = {
  categories: CategoryListService,
  professional: ProfessionalService,
  availableService: AvailableServiceServices,
  service: serviceServices,
};

const useFetch = (service, method = 'get', parameters) => {
  const [fetch, setFetch] = useState({
    loading: true,
    error: false,
    done: false,
    data: [],
    message: '',
  });

  const requestAPI = async params => {
    try {
      const api = servicesAPI[service];
      setFetch({
        ...fetch,
        loading: true,
      });
      const data = await api[method](params);

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
