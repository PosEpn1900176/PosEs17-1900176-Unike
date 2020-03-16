import { useEffect } from 'react';
import { useFetch } from '../../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { loadScheduleServices } from '../../../../actions';

const useFinishService = () => {
  const [data, fetch] = useFetch('scheduledService', 'finish');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadScheduleServices(data));
  }, [data]);

  return fetch;
};

const useScheduleService = () => {
  const finish = useFinishService();
  const scheduled = useSelector(state => state.services.scheduled);
  const dispatch = useDispatch();
  const [data, fetch] = useFetch('scheduledService');

  useEffect(() => {
    fetch({ params: { status: 'SCHEDULED' } });
  }, []);

  useEffect(() => {
    dispatch(loadScheduleServices(data));
  }, [data, dispatch]);

  return { scheduled, finish };
};

export { useScheduleService, useFinishService };
