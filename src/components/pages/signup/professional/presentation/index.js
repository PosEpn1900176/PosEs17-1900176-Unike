import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  DatePicker,
} from 'native-base';
import { HeaderSignup, FooterSignup } from '../../../../templates';
import styles from './styles';

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
          <Item
            stackedLabel
            error={!props.data.Nascimento.valid}
            style={styles.datePicker}>
            <Label>Data de nascimento</Label>

            <DatePicker
              defaultDate={new Date(props.data.Nascimento.value || new Date())}
              maximumDate={new Date()}
              locale={'pt-br'}
              animationType={'fade'}
              androidMode={'default'}
              onDateChange={props.onChangeForm('Nascimento')}
              disabled={false}
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
