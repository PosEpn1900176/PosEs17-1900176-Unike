import React from 'react';
import SignupLocalizationPresentation from '../presentation';
import { useSelector } from 'react-redux';
import { useSetContactData } from '../../../../../hooks/useContactData';

const SignupLocalizationContainer = ({ navigation }) => {
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();

  const onChange = key => value => setKeyContact(key, value);
  const goPage = page => navigation.navigate(page);

  return (
    <SignupLocalizationPresentation
      title="Sua localização"
      disable={false}
      onChangeForm={onChange}
      data={selector}
      onBack={() => goPage('Login')}
      onForward={() => goPage('SignupSurvey')}
      onClear={() => {}}
    />
  );
};

export default SignupLocalizationContainer;
