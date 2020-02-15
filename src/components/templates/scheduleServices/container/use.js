import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleService = () => {
  const [data, fetch] = useFetch('service');
  console.log('data', data);
  useEffect(() => {
    fetch({ type: 'SCHEDULED' });
  }, []);

  return data;
};

export { useScheduleService };
