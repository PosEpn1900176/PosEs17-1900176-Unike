import React from 'react';
import { Container, Content } from 'native-base';
import {
  FooterSignup,
  CategoryList,
  HeaderSignup,
} from '../../../../templates';

const SignupCategoriesPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <CategoryList />
      </Content>

      <FooterSignup
        disabled={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />
    </Container>
  );
};

export default SignupCategoriesPresentation;
