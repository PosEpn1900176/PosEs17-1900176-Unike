import React, { useEffect } from 'react';
// import { ShowMap } from '../../../templates/showMap';
import { Button, Text } from 'native-base';

const AvailableServicesPresentation = props => {
  useEffect(() => {
    props.navigation.navigate('Map', {
      service: 'available',
    });
  });
  return <Text></Text>;
};

export default AvailableServicesPresentation;
