import React from 'react';
import { List, ListItem, Text, Left, Body, Right, View } from 'native-base';
import { getDate, formatMoney } from '../../../lib';
import styles from './styles';

const ListService = props => {
  console.log(props.requests);
  return (
    <List>
      {props.requests.map((request, index) => {
        const service = request.Servico;
        console.log('Service', request);
        return (
          <View key={index} style={styles.row}>
            <View style={styles.column}>
              <Text>{service.Nome}</Text>
              <Text note>{service.Categoria.Nome}</Text>
            </View>
            <View style={styles.column}>
              <Text>{getDate(request.Horario, 'date')}</Text>
              <Text note>{getDate(request.Horario, 'hours')}</Text>
            </View>
            <View style={styles.column}>
              <Text>{formatMoney(service.ValorPadrao)}</Text>
              <Text note>{formatMoney(request.ComissaoProfissional)}</Text>
            </View>
          </View>
        );
      })}
    </List>
  );
};

export { ListService };
