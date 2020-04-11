import React, { useState } from 'react';
import {
  Header,
  Left,
  Right,
  Button,
  Text,
  Item,
  Icon,
  Input,
} from 'native-base';
import { Image } from 'react-native';
import { logo } from '../../../../images';
import styles from './styles';

const HeaderSeach = ({ onChangeText = () => {} }) => {
  const [text, setText] = useState('');

  const onChange = value => {
    setText(value);
    onChangeText(value);
  };

  return (
    <Header searchBar transparent>
      <Item style={styles.item}>
        <Icon name="ios-search" />
        <Input placeholder="Search" value={text} onChangeText={onChange} />
        <Icon name="close" onPress={() => onChange('')} />
      </Item>
    </Header>
  );
};

const HeaderDefault = props => {
  return (
    <Header transparent searchBar>
      <Left>
        <Image style={styles.image} source={logo} />
      </Left>
      <Right>
        <Button transparent onPress={props.onBack}>
          <Text style={styles.search}>Bem vindo</Text>
        </Button>
      </Right>
    </Header>
  );
};

const HeaderSignupPresentation = props => {
  return (
    <>
      <HeaderDefault {...props} />
      {props.search ? <HeaderSeach {...props} /> : null}
    </>
  );
};

export default HeaderSignupPresentation;
