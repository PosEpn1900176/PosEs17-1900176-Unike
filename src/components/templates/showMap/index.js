import React from 'react';
import {
  Container,
  Button,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Card,
  CardItem,
} from 'native-base';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useSelector } from 'react-redux';

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const useGetRegion = () => {
  const { width, height } = Dimensions.get('window');
  const get = ({ latitude, longitude }) => {
    return {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * (width / height),
    };
  };

  return get;
};

// const markers = [
//   {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     categoria: 'Cabeleireiro',
//     description: 'Cabeleireiro profissional',
//   },
//   {
//     latitude: 37.788403658257394,
//     longitude: -122.43751248344779,
//     categoria: 'Massagista',
//     description: 'Massagiadora profissional',
//   },
// ];

const CustomMarker = props => {
  return (
    <View>
      <Card>
        <CardItem header bordered>
          <Text>{props.categoria}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{props.description}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
        <CardItem footer>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  );
};

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
              <CustomMarker {...marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

export { ShowMap };
