import React from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useScheduleServices } from './use';
import { Text } from 'native-base';
import { addGeolocationData } from '../../../../utils/maps';
import { useNavigation } from 'react-navigation-hooks';

const ScheduleServicesContainer = props => {
  const data = useScheduleServices();
  const { navigate } = useNavigation();

  const onViewMap = item => {
    navigate('Client', {
      item: addGeolocationData([item]),
    });
  };

  return <ScheduleServicesPresentation data={data} onViewMap={onViewMap} />;
};

export default ScheduleServicesContainer;
