import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleService = () => {
  const [data, fetch] = useFetch('scheduledService');
  useEffect(() => {
    fetch({ status: 'SCHEDULED' });
  }, []);

  return data;
};

export { useScheduleService };
