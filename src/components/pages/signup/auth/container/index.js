import React, { useState } from 'react';
import SignupAuthPresentation from '../presentation';
import { useSelector } from 'react-redux';
import { useSetContactData } from '../../../../../hooks/useContactData';
import { useSaveSignup } from '../../../../../hooks/useSave';

const SignupAuthContainer = ({ navigation }) => {
  const [verify, setVerify] = useState();
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();
  const [data, save] = useSaveSignup();

  const goPage = page => navigation.navigate(page);
  const onChange = key => value => setKeyContact(key, value);

  const onVerify = value => {
    console.log(selector);
    setVerify(value);
  };

  const onSave = () => {
    save();
  };

  return (
    <SignupAuthPresentation
      title="Dados de login"
      disable={selector.Senha.value !== verify}
      onChangeForm={onChange}
      data={selector}
      onSave={onSave}
      onBack={() => goPage('Login')}
      onForward={() => goPage('SignupProfessional')}
      onVerify={() => onVerify}
      onClear={() => {}}
    />
  );
};

export default SignupAuthContainer;
