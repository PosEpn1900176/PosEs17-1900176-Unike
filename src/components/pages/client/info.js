import React from 'react';
import {
  Container,
  Content,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Card,
  Grid,
  Row,
  Button,
  Text,
  Icon,
  H3,
  View,
} from 'native-base';
import { DataValue } from '../../molecules';
import { ListService } from '../../templates/listService';
import { getFullName, getFullAddress } from '../../../lib';
import { user } from '../../../images';

const getImage = photo => {
  const image = photo ? { uri: `data:image/png;base64,${photo}` } : user;
  return <Thumbnail large source={image} />;
};

const InfoClient = ({ item }) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            {getImage(item.Cliente.Foto)}
            <Body>
              <DataValue
                label="Nome"
                value={`${item.Cliente.Nome} ${getFullName(item.Cliente)}`}
              />
              <DataValue label="Telefone" value={item.Cliente.Telefone} />
            </Body>
          </Left>
        </CardItem>
      </Card>
      <Card>
        <CardItem cardBody>
          <Content>
            <DataValue
              label="Endereço"
              value={getFullAddress(item.EnderecoCliente)}
            />
            <DataValue label="Bairro" value={item.EnderecoCliente.Bairro} />
            <DataValue label="Cidade" value={item.EnderecoCliente.Cidade} />
            <DataValue label="Estado" value={item.EnderecoCliente.Estado} />
          </Content>
        </CardItem>
      </Card>
      <Card transparent>
        <ListService requests={item.ItemsPedido} />
      </Card>
    </Content>
  );
};

export default InfoClient;
