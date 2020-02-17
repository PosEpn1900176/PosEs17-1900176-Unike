import dataServices from '../../data';

const getServicesData = params => {
  const services = dataServices.filter(
    service => service.status === params.status,
  );
  return Promise.resolve(services);
};

const finishService = param => {
  const services = dataServices.map(service => {
    if (param.id === service.id) {
      service.status = 'FINISHED';
    }
    return service;
  });

  return Promise.resolve(services);
};

export { getServicesData, finishService };
