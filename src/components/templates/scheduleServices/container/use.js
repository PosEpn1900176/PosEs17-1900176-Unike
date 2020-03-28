import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';

const useScheduleServices = ({ status }) => {
  const user = useSelector(state => state.user);
  const [data, fetch] = useFetch('scheduleService');

  useEffect(() => {
    fetch({
      params: {
        ProfissionalId: user.Id,
      },
      status,
    });
  }, []);

  return data;
};

export { useScheduleServices };
