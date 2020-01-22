import React, { Component } from 'react';
import { HeaderSignup } from '../../../../templates';
import { Container, Form, Item, Label, Input, Content, Icon, Text, Header } from 'native-base';

const SignupLocalizationPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          <Item stackedLabel error={!props.data.Cep.valid}>
            <Label>Cep</Label>
            <Input value={props.data.Cep.value} onChangeText={props.onChangeForm('Cep')} />
          </Item>

          <Item stackedLabel error={!props.data.Endereco.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Endereço</Label>
            <Input value={props.data.Endereco.value} onChangeText={props.onChangeForm('Endereco')} />
          </Item>
          <Item stackedLabel error={!props.data.Numero.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Número</Label>
            <Input
              value={props.data.Numero.value.toString()}
              onChangeText={props.onChangeForm('Numero')}
              //   keyboardType="number-pad"
            />
          </Item>
          <Item
            stackedLabel
            error={!props.data.Bairro.valid}
            style={{ alignItems: 'flex-start' }}
          >
            <Label>Bairro</Label>
            <Input
              value={props.data.Bairro.value}
              onChangeText={props.onChangeForm('Bairro')}
            />
          </Item>
          <Item
            stackedLabel
            error={!props.data.Complemento.valid}
            style={{ alignItems: 'flex-start' }}
          >
            <Label>Complemento</Label>
            <Input
              value={props.data.Complemento.value}
              onChangeText={props.onChangeForm('Complemento')}
            />
          </Item>
          <Item stackedLabel error={!props.data.Cidade.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Cidade</Label>
            <Input value={props.data.Cidade.value} onChangeText={props.onChangeForm('Cidade')} />
          </Item>
          <Item stackedLabel error={!props.data.Estado.valid} style={{ alignItems: 'flex-start' }}>
            <Label>UF</Label>
            <Input value={props.data.Estado.value} onChangeText={props.onChangeForm('Estado')} />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupLocalizationPresentation;
