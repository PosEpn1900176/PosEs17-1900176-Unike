import React from 'react';
import { Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { CustomMarker } from './markers';
import { useGetRegion } from '../../../hooks';
import { useSelector } from 'react-redux';
import { logo } from '../../../images';

const ShowMap = props => {
  const { coords } = useSelector(state => state.services.map.currentPosition);
  const getRegion = useGetRegion();

  const handleChange = regions => {
    console.log(regions);
  };

  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={getRegion(coords)}
        zoomTapEnabled={true}
        onRegionChange={handleChange}>
        {props.markers.map((marker, index) => (
          <Marker key={index} coordinate={getRegion(marker)}>
            <Callout>
              <CustomMarker marker={marker} />
            </Callout>
          </Marker>
        ))}
        <Marker key="unike" pinColor="#0000ff" coordinate={getRegion(coords)} />
      </MapView>
    </Container>
  );
};

export { ShowMap };
