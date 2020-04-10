import React, { useState } from 'react';
import AvailableServicesPresentation from '../presentation';
import { useAvailableServices } from './use';
import { filterRequestWithoutGeolocation } from '../../../../utils/maps';

const AvailableServicesContainer = props => {
  const data = useAvailableServices();
  console.log('DATA', data)
  const [selectedMarker, setSelectedMarker] = useState({});
  const [showMarker, setShowMarker] = useState(false);

  const onAccept = () => {
    setShowMarker(false);
  };
  const onPressMarker = marker => {
    setShowMarker(true);
    setSelectedMarker(marker);
  };
  return (
    <AvailableServicesPresentation
      data={filterRequestWithoutGeolocation(data)}
      onPressMarker={onPressMarker}
      showMarker={showMarker}
      selectedMarker={selectedMarker}
      onAccept={onAccept}
      {...props}
      ongoMap={props.onGoMap}
    />
  );
};

export default AvailableServicesContainer;
