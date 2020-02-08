import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';

const useScheduleAvailable = () => {
  const [data, fetch] = useFetch('scheduleAvailable');
  useEffect(() => {
    fetch();
  }, []);

  return data;
};

export { useScheduleAvailable };
