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
import { ScrollView, View, Dimensions } from 'react-native';

const TableScheduleServicesPresentation = ({ data = [], onViewMap }) => {
  console.log('Presentation', onViewMap);
  return (
    <Container>
      <Content>
        <List>
          {data.map((item, index) => {
            return (
              <ListItem key={index}>
                <Body>
                  <View style={styles.row}>
                    <View style={styles.flexAuto}>
                      <Text>{getFullName(item.Cliente)}</Text>
                      <Text note>{getFullAddress(item.EnderecoCliente)}</Text>
                      <View style={styles.items}>
                        {item.ItemsPedido.map((request, i) => {
                          return (
                            <View key={i}>
                              <Text note>{getDate(request.Horario)}</Text>
                              <View style={styles.badge}>
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
                      <Button transparent onPress={() => onViewMap(item)}>
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
