import React, { useEffect } from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useDispatch } from 'react-redux';
import { loadScheduleServices } from '../../../../actions';
import { useScheduleService } from './use';


const ScheduleServicesContainer = props => {
  const schedule = useScheduleService();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadScheduleServices(schedule.data));
  }, [schedule, dispatch]);

  return <ScheduleServicesPresentation {...props} data={schedule} />;
};

export default ScheduleServicesContainer;
