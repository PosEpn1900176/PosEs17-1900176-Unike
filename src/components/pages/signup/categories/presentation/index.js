import React from 'react';
import { Container, Content } from 'native-base';
import { FooterSignup } from '../../../../templates/footerSignup';
import { CategoryList } from '../../../../templates/categoryList';
import { HeaderSignup } from '../../../../templates/headerSignup';

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
