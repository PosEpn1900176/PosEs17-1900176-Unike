import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleAvailable = () => {
  const [data, fetch] = useFetch('service', 'get', { type: 'AVAILABLE' });
  useEffect(() => {
    fetch();
  }, []);

  return data;
};

export { useScheduleAvailable };
