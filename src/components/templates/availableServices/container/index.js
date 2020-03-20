import React, { useState } from 'react';
import AvailableServicesPresentation from '../presentation';
import { useAvailableServices } from './use';

const AvailableServicesContainer = props => {
  const data = useAvailableServices();
  const [selectedMarker, setSelectedMarker] = useState({});
  const [showMarker, setShowMarker] = useState(false);
  const [accept, setAccept] = useState(false);

  const onAccept = () => {
    setShowMarker(false);
  };
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
      onAccept={onAccept}
      {...props}
      ongoMap={props.onGoMap}
    />
  );
};

export default AvailableServicesContainer;
