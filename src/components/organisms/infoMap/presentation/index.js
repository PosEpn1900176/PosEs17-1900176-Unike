import React from 'react';
import {
  Text,
  Content,
  Footer,
  Button,
  Body,
  Container,
  View,
  Left,
  Right,
  Icon,
} from 'native-base';
import styles from './style';
import { ShowComponent } from '../../showComponent';
import { DataValue } from '../../../molecules';
import { getFullName, getFullAddress } from '../../../../lib';
import { ListService } from '../../../templates';

const getValue = (data, key) => {
  return data ? data[key] : '';
};

const InfoMapPresentation = ({ marker, ...props }) => {
  console.log('MARKER', marker);
  return (
    <View style={styles.infoMap}>
      <View style={styles.content}>
        <ShowComponent show={props.show}>
          <DataValue label="Nome" value={getFullName(marker.Cliente)} />
          <DataValue
            label="Nome"
            value={getFullAddress(marker.EnderecoCliente)}
          />
          <ListService requests={marker.ItemsPedido} />
        </ShowComponent>
      </View>
      <View style={styles.control}>
        <Button iconLeft transparent>
          <Icon type="MaterialCommunityIcons" name="arrow-left" />
          <Text>Voltar</Text>
        </Button>
        <Button iconLeft transparent>
          <Icon type="MaterialCommunityIcons" name="check" />
          <Text>Aprovar</Text>
        </Button>
      </View>
    </View>
  );
};

export default InfoMapPresentation;
