import React from 'react';
import { HeaderSignup } from '../../../../templates/headerSignup';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Content,
  Button,
  Text,
} from 'native-base';
import style from './style';

const SignupAuthPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
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
          <Item stackedLabel error={!props.data.Email.valid}>
            <Label>Repetir senha</Label>
            <Input
              value={props.verify}
              onChangeText={props.onConfirm}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button
          style={style.save}
          block
          onPress={props.onSave}
          disabled={props.disabled}>
          <Text>Salvar</Text>
        </Button>
      </Content>
      {/* <FooterSignup
        disabled={props.disabled}
        onBack={props.onBack}
        onForward={props.onSave}
        text={{ back: 'Voltar', next: 'Salvar' }}
      /> */}
    </Container>
  );
};

export default SignupAuthPresentation;
