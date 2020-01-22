import React from 'react';
import { View } from 'react-native';
import { Header as Head, Text, Button, Left, Body, Right } from 'native-base';
import style from './style';

const Header = ({ title }) => (
  <View style={style.header}>
    <Head>
      <Left>
        <Button transparent>
          <Text>Voltar</Text>
        </Button>
      </Left>
      <Body>{title}</Body>
      <Right>
        <Button transparent>
          <Text>Avançar</Text>
        </Button>
      </Right>
    </Head>
  </View>
);

export { Header };
