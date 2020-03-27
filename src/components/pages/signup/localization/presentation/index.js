import React from 'react';
import { HeaderSignup } from '../../../../templates/headerSignup';
import { FooterSignup } from '../../../../templates/footerSignup';
import { Container, Form, Item, Content } from 'native-base';
import { FormInput } from '../../../../molecules';

const SignupLocalizationPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <Form>
          <Item error={!props.data.Cep.valid}>
            {/* <Label>Cep</Label> */}
            <FormInput
              placeholder="Cep"
              error={!props.data.Cep.valid}
              value={props.data.Cep.value}
              onChangeText={props.onChangeForm('Cep')}
            />
          </Item>

          <Item
            error={!props.data.Endereco.valid}
            style={{ alignItems: 'flex-start' }}>
            {/* <Label>Endereço</Label> */}
            <FormInput
              placeholder="Endereço"
              error={!props.data.Endereco.valid}
              value={props.data.Endereco.value}
              onChangeText={props.onChangeForm('Endereco')}
            />
          </Item>
          <Item
            error={!props.data.Numero.valid}
            style={{ alignItems: 'flex-start' }}>
            {/* <Label>Número</Label> */}
            <FormInput
              placeholder="Numero"
              error={!props.data.Numero.valid}
              value={props.data.Numero.value.toString()}
              onChangeText={props.onChangeForm('Numero')}
              //   keyboardType="number-pad"
            />
          </Item>
          <Item
            error={!props.data.Bairro.valid}
            style={{ alignItems: 'flex-start' }}>
            {/* <Label>Bairro</Label> */}
            <FormInput
              placeholder="Bairro"
              error={!props.data.Bairro.valid}
              value={props.data.Bairro.value}
              onChangeText={props.onChangeForm('Bairro')}
            />
          </Item>
          <Item
            error={!props.data.Complemento.valid}
            style={{ alignItems: 'flex-start' }}>
            {/* <Label>Complemento</Label> */}
            <FormInput
              placeholder="Complemento"
              error={!props.data.Complemento.valid}
              value={props.data.Complemento.value}
              onChangeText={props.onChangeForm('Complemento')}
            />
          </Item>
          <Item
            error={!props.data.Cidade.valid}
            style={{ alignItems: 'flex-start' }}>
            <FormInput
              placeholder="Cidade"
              error={!props.data.Cidade.valid}
              value={props.data.Cidade.value}
              onChangeText={props.onChangeForm('Cidade')}
            />
          </Item>
          <Item
            error={!props.data.Estado.valid}
            style={{ alignItems: 'flex-start' }}>
            {/* <Label>UF</Label> */}
            <FormInput
              placeholder="UF"
              error={!props.data.Estado.valid}
              value={props.data.Estado.value}
              onChangeText={props.onChangeForm('Estado')}
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

export default SignupLocalizationPresentation;
