import React from 'react';
import { Container } from 'native-base';
import { HeaderSignup, CategoryList } from '../../../../templates';

const SignupCategoriesPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disable={props.disabled}
        onBack={props.onBack}
        onForward={props.onForward}
      />

      <CategoryList />
    </Container>
  );
};

export default SignupCategoriesPresentation;
