import React from 'react';
import { Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useGetRegion } from '../../../hooks';
import { useSelector } from 'react-redux';
import styles from './styles';
import ButtonGroup from '../../organisms/buttonGroup';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBM9agp_gMCjF3WlhtzX0LglbCwKu_54wA';

const ShowMap = props => {
  const {
    coords = { latitude: -23.564259, longitude: -46.652507 },
  } = useSelector(state => state.services.map.currentPosition);
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
        loadingEnabled={true}
        toolbarEnabled={true}>
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
        {props.data.length === 1 ? (
          <MapViewDirections
            origin={coords}
            destination={props.data[0] ? props.data[0].geolocation : coords}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="hotpink"
            mode={props.mode}
          />
        ) : null}
      </MapView>
    </Container>
  );
};

export { ShowMap };
