import availableScheduleData from './mock';

const AvailableServiceServices = {
  get: () => {
    return new Promise((resolve, reject) => {
      resolve(availableScheduleData);
    });
  },
};

export { AvailableServiceServices };
