import React, { useState, useEffect, useCallback } from 'react';
import SignupAuthPresentation from '../presentation';
import { useSelector } from 'react-redux';
import { useSetContactData } from '../../../../../hooks/useContactData';
import { useSaveSignup } from '../../../../../hooks/useSave';
import { Toast } from 'native-base';

const SignupAuthContainer = ({ navigation }) => {
  const [verify, setVerify] = useState();
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();
  const [data, save] = useSaveSignup();

  const goPage = useCallback(page => navigation.navigate(page), [navigation]);

  const onChange = key => value => setKeyContact(key, value);

  const onVerify = value => {
    setVerify(value);
  };

  const onSave = () => {
    save();
  };

  useEffect(() => {
    if (data.done) {
      Toast.show({
        text: 'Profissional cadastrado com sucesso.',
        type: 'success',
        buttonText: 'OK',
        onClose: () => {
          goPage('Login');
        },
      });
    }
  }, [data.done, goPage]);

  useEffect(() => {
    if (data.error) {
      Toast.show({
        text: 'Erro ao tentar cadastrar.',
        type: 'danger',
        buttonText: 'OK',
      });
    }
  }, [data.error, goPage]);

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
