import React from 'react';
import {
  Container,
  Button,
  Text,
  Body,
  Card,
  CardItem,
  Left,
  Right,
} from 'native-base';
import { View, Dimensions } from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  CalloutSubview,
} from 'react-native-maps';
import { DataValue } from '../../molecules';
import { useFetch } from '../../../hooks';

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

const CustomMarker = ({ marker }) => {
  const [data, fetch] = useFetch('scheduledService', 'put');
  console.log('MARKER', marker);
  const onFinishService = () => {
    // fetch(marker);
    console.log(data);
  };

  return (
    <View>
      <Card>
        <CardItem header bordered>
          <Text>{marker.Servico}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <DataValue label="Cliente" value={marker.Cliente} />
            <DataValue label="Endereço" value={marker.Endereco} />
            <DataValue label="Horário" value={marker.Horario} />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button>
              <Text>Aceitar</Text>
            </Button>
          </Left>
          <Right>
            <Button>
              <Text>Concluir</Text>
            </Button>
          </Right>
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
              <CustomMarker marker={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

export { ShowMap };
