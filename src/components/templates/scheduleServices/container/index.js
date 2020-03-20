import React from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useScheduleServices } from './use';
import { Text } from 'native-base';

const ScheduleServicesContainer = props => {
  const data = useScheduleServices();
  console.log('DATA', data)

  return <ScheduleServicesPresentation data={data} />;
};

export default ScheduleServicesContainer;
