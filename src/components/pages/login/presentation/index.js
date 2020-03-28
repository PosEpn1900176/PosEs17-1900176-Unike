import React from 'react';
import { banner } from '../../../../images';
import { Image, StatusBar, View } from 'react-native';
import style from './style.js';

import {
  Text,
  Spinner,
  Button,
  Container,
  Form,
  Item,
  Input,
  Label,
  H3,
} from 'native-base';

const LoginPagePresentation = props => {
  return (
    <Container style={style.container}>
      {/* <StatusBar hidden /> */}
      <View style={style.header}>
        <Image style={style.logo} source={banner} />
      </View>
      <View style={style.form}>
        <H3 style={style.messageTitle}>AUTENTICAÇÃO</H3>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={props.value.email}
              onChangeText={props.onChange('email')}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={props.value.password}
              onChangeText={props.onChange('password')}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
          </Item>
        </Form>
        <View style={style.button}>
          <Button
            primary
            block
            large
            rounded
            onPress={props.onLogin}
            disabled={props.load}>
            <Spinner
              style={[!props.load ? style.hidden : null]}
              color="white"
            />
            <Text> Entrar </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};
export default LoginPagePresentation;
