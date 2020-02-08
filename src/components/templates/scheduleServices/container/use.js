import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleService = () => {
  const [data, fetch] = useFetch('scheduleService');
  useEffect(() => {
    fetch();
  }, []);

  return data;
};

export { useScheduleService };
