import { useState } from 'react';
import {
  CategoryListService,
  ProfessionalService,
  ScheduleServiceServices,
  AvailableServiceServices,
  AproveRequestService,
  FinalizeRequestService,
} from '../../services';
import { buildParams } from './utils';

const servicesAPI = {
  categories: CategoryListService,
  professional: ProfessionalService,
  availableService: AvailableServiceServices,
  scheduleService: ScheduleServiceServices,
  aproveRequest: AproveRequestService,
  finalizeRequest: FinalizeRequestService,
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
      console.error(error);
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
