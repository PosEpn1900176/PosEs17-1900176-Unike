import React, { Component } from 'react';
import { HeaderSignup } from '../../../../templates';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Content,
  Button,
  Icon,
  Text,
  Header,
} from 'native-base';

const SignupContactDataPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
      <Content>
        <Text>
          Vamos entrar em contato através dessas informações, escreva
          corretamente
        </Text>
        <Form>
          <Item stackedLabel error={!props.data.Email.valid}>
            <Label>E-mail</Label>
            <Input
              value={props.data.Email.value}
              onChangeText={props.onChangeForm('Email')}
              keyboardType="email-address"
            />
          </Item>
          <Item
            stackedLabel
            error={!props.data.Telefone.valid}
            style={{ alignItems: 'flex-start' }}>
            <Label>Telefone</Label>
            <Input
              value={props.data.Telefone.value}
              onChangeText={props.onChangeForm('Telefone')}
              keyboardType="phone-pad"
            />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupContactDataPresentation;
