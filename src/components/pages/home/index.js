import React from 'react';
import {
  Container,
  Button,
  Content,
  Text,
  Icon,
  Left,
  Body,
  Right,
  H1,
  Card,
  CardItem,
} from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
});

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const markers = [
  {
    latitude: 37.78825,
    longitude: -122.4324,
    categoria: 'Cabeleireiro',
    description: 'Cabeleireiro profissional',
  },
  {
    latitude: 37.788403658257394,
    longitude: -122.43751248344779,
    categoria: 'Massagista',
    description: 'Massagiadora profissional',
  },
];

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

const HomePage = props => {
  const handleChange = region => {
    console.log(region);
  };
  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        zoomTapEnabled={false}
        onRegionChange={handleChange}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            <Callout>
              <CustomMarker {...marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

export { HomePage };
