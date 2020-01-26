import React from 'react';
import { Container, Content, Form, Item, Input, Label, H1 } from 'native-base';
import { HeaderSignup, FooterSignup } from '../../../../templates';

const SignupProfessionalPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
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
      <FooterSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
    </Container>
  );
};

export default SignupProfessionalPresentation;
