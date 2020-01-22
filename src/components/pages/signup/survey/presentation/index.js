import React, { useState } from 'react';
import { HeaderSignup } from '../../../../templates';
import { Container, Form, Content, Button, Text } from 'native-base';
import { Question } from '../../../../templates';
import { useSelector } from 'react-redux';

const SignupSurveyPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          {props.data.map(item => (
            <Question key={item.id} item={item} onChange={props.onChange} />
          ))}
        </Form>
        <Button onPress={props.onSave}><Text>Salvar</Text></Button>
      </Content>
    </Container>
  );
};

export default SignupSurveyPresentation;
