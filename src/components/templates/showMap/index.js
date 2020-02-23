import React from 'react';
import { Container } from 'native-base';
import { Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import CustomMarker from './marker';
import { useGetRegion } from '../../../hooks';

const ShowMap = props => {
  const getRegion = useGetRegion();
  const handleChange = regions => {
    console.log(regions);
  };
  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={getRegion(props.markers[0])}
        zoomTapEnabled={true}
        onRegionChange={handleChange}>
        {props.markers.map((marker, index) => (
          <Marker key={index} coordinate={getRegion(marker)}>
            <Callout>
              <CustomMarker marker={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

export { ShowMap };
