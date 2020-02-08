import React, { useEffect } from 'react';
import ScheduleAvailablePresentation from '../presentation';
import { useFetch } from '../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { loadScheduleAvailable } from '../../../../actions';

const useScheduleAvailable = () => {
  const [data, fetch] = useFetch('servicesAvailable');
  useEffect(() => {
    fetch();
  }, [fetch]);
  return data;
};

const ScheduleAvailableContainer = props => {
  const data= useScheduleAvailable();

  console.log('DATA', data);
  return <ScheduleAvailablePresentation {...props} />;
};

export default ScheduleAvailableContainer;
