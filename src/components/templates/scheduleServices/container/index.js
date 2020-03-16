import React from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useScheduleServices } from './use';
import { Text } from 'native-base';

const ScheduleServicesContainer = props => {
  const data = useScheduleServices();
  return <Text>Teste</Text>; //<ScheduleServicesPresentation />;
};

export default ScheduleServicesContainer;
