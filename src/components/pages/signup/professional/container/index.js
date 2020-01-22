import React from 'react';
import SignupProfessionalPresentation from '../presentation';
import { useSelector } from 'react-redux';
import { useSetContactData } from '../../../../../hooks/useContactData';

const SignupProfessionalContainer = ({ navigation }) => {
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();

  const onChange = key => value => setKeyContact(key, value);
  const goPage = page => navigation.navigate(page);

  return (
    <SignupProfessionalPresentation
      valid={true}
      onChangeForm={onChange}
      data={selector}
      onBack={() => goPage('SignupContactData')}
      onForward={() => goPage('SignupCategories')}
      onClear={() => {}}
    />
  );
};

export default SignupProfessionalContainer;
