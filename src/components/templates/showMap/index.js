import React from 'react';
import { Container } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useGetRegion } from '../../../hooks';
import { useSelector } from 'react-redux';
import styles from './styles';
import MapViewDirections from 'react-native-maps-directions';
import { hasLatitude } from './utils';

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
  console.log('PROPS', props, coords);

  return (
    <Container>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={getRegion(coords)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
        loadingEnabled={true}
        toolbarEnabled={true}>
        {props.data.map((marker, index) => {
          console.log('MARKer', marker);
          return (
            <Marker
              key={index}
              coordinate={getRegion(marker.EnderecoCliente)}
              onPress={onPress(marker.EnderecoCliente)}
            />
          );
        })}
        <Marker key="unike" pinColor="#0000ff" coordinate={getRegion(coords)} />
        {props.data.length === 1 &&
        hasLatitude(props.data[0].EnderecoCliente) ? (
          <MapViewDirections
            origin={coords}
            destination={
              props.data[0]
                ? getRegion(props.data[0].EnderecoCliente, false)
                : coords
            }
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
