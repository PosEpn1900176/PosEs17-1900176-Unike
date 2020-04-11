import React from 'react';
import { Container, Text } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { getRegion } from '../../../utils/maps';
import { useSelector } from 'react-redux';
import styles from './styles';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBM9agp_gMCjF3WlhtzX0LglbCwKu_54wA';

const ShowMap = props => {
  const { coords } = useSelector(state => state.services.map.currentPosition);

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
          return (
            <Marker
              key={index}
              coordinate={getRegion(marker.EnderecoCliente)}
              onPress={onPress(marker)}
            />
          );
        })}
        <Marker key="unike" pinColor="#0000ff" coordinate={getRegion(coords)} />
        {props.data.length === 1 ? (
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
