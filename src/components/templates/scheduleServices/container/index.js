import React, { useEffect } from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useDispatch } from 'react-redux';
import { loadScheduleServices } from '../../../../actions';
import { useScheduleService } from './use';
import { LoadingControl } from '../../../organisms/loadingControl';

const ScheduleServicesContainer = props => {
  const schedule = useScheduleService();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadScheduleServices(schedule.data));
  }, [schedule, dispatch]);

  return (
    <LoadingControl loading={schedule.loading}>
      <ScheduleServicesPresentation {...props} data={schedule.data} />
    </LoadingControl>
  );
};

export default ScheduleServicesContainer;
