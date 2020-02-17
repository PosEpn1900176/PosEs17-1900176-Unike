import React, { useEffect } from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useDispatch } from 'react-redux';
import { setMapScheduledServices } from '../../../../actions';
import { useScheduleService } from './use';
import { LoadingControl } from '../../../organisms/loadingControl';

const ScheduleServicesContainer = props => {
  const { scheduled, finish } = useScheduleService();
  const dispatch = useDispatch();

  const onViewMap = item => {
    dispatch(setMapScheduledServices(item));
    props.navigation.navigate('Map', {
      service: 'scheduled',
    });
  };
  const onFinish = item => {
    finish(item);
    console.log('DATA', scheduled);
  };

  const getScheduledData = () => {
    return scheduled.data.filter(schedule => {
      return schedule.status === 'SCHEDULED';
    });
  };

  return (
    <LoadingControl loading={scheduled.loading}>
      <ScheduleServicesPresentation
        {...props}
        data={getScheduledData()}
        onViewMap={onViewMap}
        onFinish={onFinish}
      />
    </LoadingControl>
  );
};

export default ScheduleServicesContainer;
