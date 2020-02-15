import getServicesData from './mock';

const serviceServices = {
  get: async type => {
    console.log(type)
    try {
      const services = await getServicesData(type);
      return services;
    } catch (error) {
      console.log('Ocorreu um erro: ', error);
      return [];
    }
  },
};

export { serviceServices };
