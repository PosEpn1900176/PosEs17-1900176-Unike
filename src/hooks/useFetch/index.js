import { useState, useEffect } from 'react';
import { CategoryListService, ProfessionalService } from '../../services';

const servicesAPI = {
  categories: CategoryListService,
  professional: ProfessionalService 
};

const useFetch = (service, method = 'get', args = {}) => {
  const [fetch, setFecth] = useState({
    loading: true,
    error: false,
    data: []
  });
  const [params, setParams] = useState({});

  const requestAPI = async (parameters) => {
    try {
      const api = servicesAPI[service];
      setParams(parameters || args);
      setFecth({
        ...fetch,
        loading: true
      });
      const { data = [] } = await api[method](params)
      setFecth({
        ...fetch,
        data,
        loading: false
      });
    } catch (error) {
      setFecth({
        ...fetch,
        loading: false,
        error: true
      });
    }
  };

  const set = params => {
    requestAPI(params);
  };

  return [fetch, set];
};

export default useFetch;
