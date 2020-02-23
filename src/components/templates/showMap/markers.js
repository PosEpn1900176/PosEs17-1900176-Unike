import React from 'react';
import {
  View,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Right,
} from 'native-base';
import { DataValue } from '../../molecules';
import { useFetch } from '../../../hooks';

const CustomMarker = ({ marker }) => {
  const [data, fetch] = useFetch('scheduledService', 'put');

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

const MyMarker = props => {
  return <Text>dsdsd</Text>;
};

export { CustomMarker, MyMarker };
