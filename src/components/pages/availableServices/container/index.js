import React from 'react';
import AvailableServicesPagePresentation from '../presentation';

const AvailableServicesPageContainer = props => {
  const onGoMap = () => {
    props.navigation.navigate('Map', {
      service: 'available',
    });
  };
  return <AvailableServicesPagePresentation {...props} onGoMap={onGoMap} />;
};

export default AvailableServicesPageContainer;
