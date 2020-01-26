import React from 'react';
import { HeaderSignup, FooterSignup } from '../../../../templates';
import { Container, Form, Content, Button, Text } from 'native-base';
import { Question } from '../../../../templates';

const SignupSurveyPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <Form>
          {props.data.map(item => (
            <Question key={item.id} item={item} onChange={props.onChange} />
          ))}
        </Form>
        <Button onPress={props.onSave}>
          <Text>Salvar</Text>
        </Button>
      </Content>
      <FooterSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
    </Container>
  );
};

export default SignupSurveyPresentation;
