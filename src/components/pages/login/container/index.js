import React, { useState } from 'react';
import { LogonService } from '../../../../services';
import LoginPagePresentation from '../presentation';
import AsyncStorage from '@react-native-community/async-storage';
import { useUser } from '../../../../hooks';
import { Toast } from 'native-base';

const LoginPage = props => {
  const [form, setForm] = useState({
    email: 'tcc@unike.com.br',
    password: '123456',
  });
  const setUser = useUser();
  const [load, setLoad] = useState(false);

  async function handleLogin() {
    setLoad(true);
    try {
      const response = await LogonService.signIn(form);
      setUser(response.data);
      await AsyncStorage.setItem('unikeToken', response.token || 'testeToken');
      setLoad(false);
      props.navigation.navigate('App');
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'danger',
        text: 'Autenticação não realizada. Tente novamente.',
        buttonText: 'OK',
        onClose: () => {
          setLoad(false);
        },
      });
    }
  }

  function handleSign() {
    props.navigation.navigate('Signup');
  }

  function handleChange(element) {
    return value => {
      setForm({
        ...form,
        [element]: value,
      });
    };
  }
  return (
    <LoginPagePresentation
      error={form.error}
      load={load}
      value={form}
      onChange={handleChange}
      onLogin={handleLogin}
      onSignup={handleSign}
    />
  );
};

export { LoginPage };
