import { getServicesData, finishService } from './mock';

const ServiceServices = {
  get: async params => {
    try {
      const services = await getServicesData(params);
      return services;
    } catch (error) {
      console.log('Ocorreu um erro: ', error);
      return [];
    }
  },
  put: async params => {
    try {
      const services = await finishService(params);
      return services;
    } catch (error) {
      console.log('Ocorreu um erro: ', error);
      return [];
    }
  },
};

export { ServiceServices };
