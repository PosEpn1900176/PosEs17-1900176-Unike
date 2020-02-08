import scheduleServiceData from './mock';

const ScheduleServiceServices = {
  get: () => {
    return new Promise((resolve, reject) => {
      resolve(scheduleServiceData);
    });
  },
};

export { ScheduleServiceServices };
