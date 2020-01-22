import React from 'react';
import { Text, View, TextInput } from 'react-native';

import {
  Icon,
  Spinner,
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Label,
  H1,
} from 'native-base';
import { HeaderSignup } from '../../../../templates';

const SignupProfessionalPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
      <Content>
        <Form>
          <Item stackedLabel error={!props.data.Nome.valid}>
            <Label>Nome</Label>
            <Input
              value={props.data.Nome.value}
              onChangeText={props.onChangeForm('Nome')}
            />
          </Item>
          <Item stackedLabel error={!props.data.Sobrenome.valid}>
            <Label>Sobrenome</Label>
            <Input
              value={props.data.Sobrenome.value}
              onChangeText={props.onChangeForm('Sobrenome')}
            />
          </Item>
          <Item stackedLabel error={!props.data.Nascimento.valid}>
            <Label>Data de nascimento</Label>
            <Input
              value={props.data.Nascimento.value}
              onChangeText={props.onChangeForm('Nascimento')}
            />
          </Item>
          <Item stackedLabel error={!props.data.Rg.valid}>
            <Label>RG</Label>
            <Input
              value={props.data.Rg.value}
              onChangeText={props.onChangeForm('Rg')}
            />
          </Item>
          <Item stackedLabel error={!props.data.Cpf.valid}>
            <Label>CPF</Label>
            <Input
              value={props.data.Cpf.value}
              onChangeText={props.onChangeForm('Cpf')}
            />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupProfessionalPresentation;
