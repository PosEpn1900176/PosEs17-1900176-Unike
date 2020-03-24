import React from 'react';
import styles from './styles';
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Icon,
  Fab,
  Right,
  Grid,
  Col,
  Text,
  Container,
  List,
  Content,
  ListItem,
  Thumbnail,
  Badge,
} from 'native-base';
import { DataValue } from '../../../molecules';
import { HeaderSignup } from '../../headerSignup';
import { ListService } from '../../listService';
import { getFullName, getFullAddress, getDate } from '../../../../lib';
import { ScrollView, View, FlatList } from 'react-native';

const TableScheduleServicesPresentation = ({ data = [] }) => {
  return (
    <List>
      <FlatList
        data={data}
        keyExtractor={item => item.Id}
        renderItem={({ item }) => (
          <ListItem>
            <Body>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{ flex: 1 }}>
                  <Text>{getFullName(item.Cliente)}</Text>
                  <Text note>{getFullAddress(item.EnderecoCliente)}</Text>
                  <View style={{ flexDirection: 'row', padding: 5 }}>
                    {item.ItemsPedido.map((request, index) => {
                      return (
                        <View key={index}>
                          <Text note>{getDate(request.Horario)}</Text>
                          <View style={{ padding: 5 }}>
                            <Badge primary>
                              <Text>{request.Servico.Nome}</Text>
                            </Badge>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
                <View>
                  <Button transparent>
                    <Icon name="arrow-forward" />
                  </Button>
                </View>
              </View>
            </Body>
          </ListItem>
        )}
      />
    </List>
  );
};

const TableScheduleServicesPresentation1 = ({ data = [] }) => {
  console.log('Presentation', data);
  return (
    <Container>
      <Content>
        <List>
          {data.map((item, index) => {
            return (
              <ListItem key={index}>
                <Body>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                      <Text>{getFullName(item.Cliente)}</Text>
                      <Text note>{getFullAddress(item.EnderecoCliente)}</Text>
                      <View style={{ flexDirection: 'row', padding: 5 }}>
                        {item.ItemsPedido.map((request, i) => {
                          return (
                            <View key={i}>
                              <Text note>{getDate(request.Horario)}</Text>
                              <View style={{ padding: 5 }}>
                                <Badge primary>
                                  <Text>{request.Servico.Nome}</Text>
                                </Badge>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                    <View>
                      <Button transparent>
                        <Icon name="arrow-forward" />
                      </Button>
                    </View>
                  </View>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default TableScheduleServicesPresentation;
