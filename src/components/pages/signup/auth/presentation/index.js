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
  Header
} from 'native-base';

const SignupAuthPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disable} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          <Item stackedLabel error={!props.data.Email.valid}>
            <Label>Senha</Label>
            <Input
              value={props.data.Senha.value}
              onChangeText={props.onChangeForm('Senha')}
              secureTextEntry={true}
            />
          </Item>
          <Item stackedLabel error={!props.data.Email.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Repetir senha</Label>
            <Input
              value={props.verify}
              onChangeText={props.onVerify()}
              secureTextEntry={true}
            />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupAuthPresentation;
