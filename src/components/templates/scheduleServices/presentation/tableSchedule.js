import React from 'react';
import styles from './styles';
import {
  Body,
  Button,
  Icon,
  Text,
  Container,
  List,
  Content,
  ListItem,
  Badge,
} from 'native-base';
import { getFullName, getFullAddress, getDate } from '../../../../lib';
import { View } from 'react-native';

const TableScheduleServicesPresentation = ({ data = [], onViewMap }) => {
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
