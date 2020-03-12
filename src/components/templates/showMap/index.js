import React from 'react';
import { Container, Button, Text, View } from 'native-base';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import { CustomMarker } from './markers';
import { useGetRegion } from '../../../hooks';
import { useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';
import styles from './styles';
import { LoadingControl } from '../../organisms/loadingControl';

const ShowMap = props => {
  const { loading, coords } = useSelector(
    state => state.services.map.currentPosition,
  );
  const getRegion = useGetRegion();

  const onPress = e => {
    return a => {
      console.log('onCalloutPress', e, a);
    };
  };

  console.log('COORDS', coords);
  // return <Text>Teste</Text>

  return (
    <Container>
      <LoadingControl loading={loading}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={getRegion({
            geolocation: coords,
          })}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          zoomControlEnabled={true}
          loadingEnabled={true}>
          {props.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={getRegion(marker)}
              onPress={onPress(marker)}>
              <Callout>
                <CustomMarker marker={marker} />
              </Callout>
            </Marker>
          ))}
          <Marker
            key="unike"
            pinColor="#0000ff"
            coordinate={getRegion({
              geolocation: coords,
            })}
          />
        </MapView>
      </LoadingControl>
    </Container>
  );
};

export { ShowMap };
