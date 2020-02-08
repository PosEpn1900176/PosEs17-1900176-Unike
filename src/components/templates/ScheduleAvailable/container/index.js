import React, { useEffect } from 'react';
import ScheduleAvailablePresentation from '../presentation';
import { useFetch } from '../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { loadScheduleAvailable } from '../../../../actions';

const useScheduleAvailable = () => {
  const [data, fetch] = useFetch('scheduleAvailable');
  useEffect(() => {
    fetch();
  }, []);
  return data;
};

const ScheduleAvailableContainer = props => {
  const data = useScheduleAvailable();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadScheduleAvailable(data));
  }, [data, dispatch]);

  return <ScheduleAvailablePresentation {...props} />;
};

export default ScheduleAvailableContainer;
