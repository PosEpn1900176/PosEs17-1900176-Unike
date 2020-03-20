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
import TotalService from './totalService';
import { AproveRequestService } from '../../../../services';

const InfoMapPresentation = ({ marker, ...props }) => {
  console.log('status', props.status);
  return (
    <View style={styles.infoMap}>
      <View style={styles.content}>
        <ShowComponent show={props.show}>
          <View style={styles.column}>
            <View>
              <DataValue label="Nome" value={getFullName(marker.Cliente)} />
            </View>
            <View>
              <TotalService request={marker.ItemsPedido} />
            </View>
          </View>
          <DataValue
            label="Nome"
            value={getFullAddress(marker.EnderecoCliente)}
          />
          <ListService requests={marker.ItemsPedido} />
        </ShowComponent>
      </View>
      <View style={styles.control}>
        <Button iconLeft transparent onPress={props.onBack}>
          <Icon type="MaterialCommunityIcons" name="arrow-left" />
          <Text>Voltar</Text>
        </Button>
        <Button
          iconLeft
          transparent
          disabled={!props.show}
          onPress={() => props.onAccept(marker)}>
          <Icon type="MaterialCommunityIcons" name="check" />
          <Text>Aceitar</Text>
        </Button>
      </View>
    </View>
  );
};

export default InfoMapPresentation;
