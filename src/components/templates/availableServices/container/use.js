import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleAvailable = () => {
  const [data, fetch] = useFetch('service', 'get');
  useEffect(() => {
    fetch({ status: 'AVAILABLE' });
  }, []);

  return data;
};

export { useScheduleAvailable };
