import React from 'react';
import ScheduleServicesPresentation from '../presentation';
import { useScheduleServices } from './use';
// import { addGeolocationData } from '../../../../utils/maps';
import { useNavigation } from 'react-navigation-hooks';

const ScheduleServicesContainer = ({ status }) => {
  const data = useScheduleServices({ status });
  const { navigate } = useNavigation();

  const onViewMap = item => {
    navigate('Client', {
      item: [item],
    });
  };

  return <ScheduleServicesPresentation data={data} onViewMap={onViewMap} />;
};

export default ScheduleServicesContainer;
