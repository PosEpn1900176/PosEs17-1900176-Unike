import React from 'react';
import { HeaderSignup } from '../../../../templates/headerSignup';
import { FooterSignup } from '../../../../templates/footerSignup';
import { Container, Form, Content } from 'native-base';
import { Question } from '../../../../templates/question';

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
