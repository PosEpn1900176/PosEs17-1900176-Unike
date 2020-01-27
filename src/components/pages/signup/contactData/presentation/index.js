import React from 'react';
import { FooterSignup, HeaderSignup } from '../../../../templates';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Content,
  Text,
} from 'native-base';
import styles from './style';

const SignupContactDataPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <Text style={styles.description}>
          Vamos entrar em contato através dessas informações, escreva
          corretamente.
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
          <Item stackedLabel error={!props.data.Telefone.valid}>
            <Label>Telefone</Label>
            <Input
              placeholder="Formato: (99) 9999-9999"
              value={props.data.Telefone.value}
              onChangeText={props.onChangeForm('Telefone')}
              keyboardType="phone-pad"
            />
          </Item>
        </Form>
      </Content>
      <FooterSignup
        disabled={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
    </Container>
  );
};

export default SignupContactDataPresentation;
