import React from 'react';
import { HeaderSignup, FooterSignup } from '../../../../templates';
import { Container, Form, Content } from 'native-base';
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
