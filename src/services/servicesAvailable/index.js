import scheduleAvailableData from './mock';

const ServiceAvailableServices = {
  get: async () =>
    new Promise((resolve, reject) => resolve(scheduleAvailableData)),
};

export { ServiceAvailableServices };
