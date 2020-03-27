import React from 'react';
import { Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useGetRegion } from '../../../hooks';
import { useSelector } from 'react-redux';
import styles from './styles';

const ShowMap = props => {
  console.log('data', props);
  const { coords } = useSelector(state => state.services.map.currentPosition);
  const getRegion = useGetRegion();

  const onPress = marker => {
    return event => {
      props.onPressMarker(marker);
    };
  };

  return (
    <Container>
      <MapView
        style={styles.mapView}
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
        {props.data.map((marker, index) => (
          <Marker
            key={index}
            coordinate={getRegion(marker)}
            onPress={onPress(marker)}
          />
        ))}
        <Marker
          key="unike"
          pinColor="#0000ff"
          coordinate={getRegion({
            geolocation: coords,
          })}
        />
      </MapView>
    </Container>
  );
};

export { ShowMap };
