import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';

const useScheduleServices = () => {
  const user = useSelector(state => state.user);
  const [data, fetch] = useFetch('scheduleService');
  console.log('chedule', data);

  useEffect(() => {
    fetch({
      params: {
        ProfissionalId: user.Id,
      },
    });
  }, []);

  return data;
};

export { useScheduleServices };
