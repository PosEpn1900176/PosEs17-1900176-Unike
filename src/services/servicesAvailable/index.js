import scheduleAvailableData from './mock';

const ServiceAvailableServices = {
  get: () => {
    return new Promise((resolve, reject) => {
      resolve(scheduleAvailableData);
    });
  },
};

export { ServiceAvailableServices };
