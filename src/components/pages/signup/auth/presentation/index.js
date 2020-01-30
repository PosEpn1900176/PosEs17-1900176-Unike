import React from 'react';
import { HeaderSignup } from '../../../../templates';
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

const SignupAuthPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disable={props.disable}
        onBack={props.onBack}
        onForward={props.onForward}
      />
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
          <Item
            stackedLabel
            error={!props.data.Email.valid}
            style={{ alignItems: 'flex-start' }}>
            <Label>Repetir senha</Label>
            <Input
              value={props.verify}
              onChangeText={props.onVerify()}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button onPress={props.onSave}>
          <Text>Salvar</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignupAuthPresentation;
