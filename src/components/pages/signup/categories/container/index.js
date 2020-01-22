import React from 'react';
import SignupCategoriesPresentation from '../presentation';
import { useSelector } from 'react-redux';

const SignupCategoriesContainer = ({ navigation }) => {
  const { loading } = useSelector(state => state.signup.categoria);
  const goPage = page => navigation.navigate(page);

  return (
    <SignupCategoriesPresentation
      disabled={loading}
      onBack={() => goPage('SignupProfessional')}
      onForward={() => goPage('SignupLocalization')}
      onClear={() => {}}
    />
  );
};

export default SignupCategoriesContainer;
