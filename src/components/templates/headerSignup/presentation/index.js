import React from 'react';
import { Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { Image } from 'react-native';
import { logo } from '../../../../images';
import styles from './styles';

const HeaderSignupPresentation = props => {
  return (
    <Header transparent>
      <Left>
        <Image style={styles.image} source={logo} />
      </Left>
      <Right>
        <Text>Bem vindo</Text>
      </Right>
    </Header>
  );
};

export default HeaderSignupPresentation;
