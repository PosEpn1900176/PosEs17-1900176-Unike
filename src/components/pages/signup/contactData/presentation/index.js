import React from 'react';
import { FooterSignup, HeaderSignup } from '../../../../templates';
import { Container, Form, Item, Content, Text } from 'native-base';
import styles from './style';
import { FormInput } from '../../../../molecules';

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
          <Item error={!props.data.Email.valid}>
            <FormInput
              error={!props.data.Email.valid}
              placeholder="Email"
              value={props.data.Email.value}
              onChangeText={props.onChangeForm('Email')}
              keyboardType="email-address"
            />
          </Item>
          <Item error={!props.data.Telefone.valid}>
            <FormInput
              error={!props.data.Telefone.valid}
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
