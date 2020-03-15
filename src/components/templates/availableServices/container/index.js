import React, { useState } from 'react';
import AvailableServicesPresentation from '../presentation';
import { useAvailableServices } from './use';
import { Text } from 'native-base';

const AvailableServicesContainer = props => {
  const data = useAvailableServices();
  const [selectedMarker, setSelectedMarker] = useState({});
  const [showMarker, setShowMarker] = useState(false);
  const onPressMarker = marker => {
    setShowMarker(true);
    setSelectedMarker(marker);
  };
  return (
    <AvailableServicesPresentation
      data={data}
      onPressMarker={onPressMarker}
      showMarker={showMarker}
      selectedMarker={selectedMarker}
      {...props}
      ongoMap={props.onGoMap}
    />
  );
};

export default AvailableServicesContainer;
