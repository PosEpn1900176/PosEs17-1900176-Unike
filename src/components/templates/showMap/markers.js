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
  List,
  ListItem,
} from 'native-base';
import { DataValue } from '../../molecules';
import { useFetch } from '../../../hooks';
import { getFullName, getFullAddress, getDateHour } from './utils';

const ListService = props => {
  return (
    <List>
      {/* <ListItem itemDivider>
        <Text>Serviços</Text>
      </ListItem> */}
      {props.requests.map((request, index) => {
        const service = request.Servico;
        return (
          <ListItem key={index}>
            <Text> - {service.Nome}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

const CustomMarker = ({ marker }) => {
  const [data, fetch] = useFetch('scheduledService', 'put');

  const onFinishService = () => {
    // fetch(marker);
    console.log(data);
  };

  return (
    <View>
      <Card>
        <CardItem>
          <Body>
            <DataValue label="Cliente" value={getFullName(marker.Cliente)} />
            <DataValue
              label="Endereço"
              value={getFullAddress(marker.EnderecoCliente)}
            />
            <DataValue label="Data / hora" value={getDateHour(marker)} />
            <ListService requests={marker.ItemsPedido} />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button onPress={() => console.log('Aceitar')}>
              <Text>Aceitar</Text>
            </Button>
          </Left>
          <Right>
            <Button onPress={() => console.log('Concluir')}>
              <Text>Concluir</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </View>
  );
};

export { CustomMarker };
