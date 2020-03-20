import React from 'react';
import AlertPresentation from '../presentation';
import { useNavigation } from 'react-navigation-hooks';

const AlertContainer = props => {
  const { navigate } = useNavigation();
  
  const onClose = () => {
    console.log('ok')
    navigate('Home');
  };
  return <AlertPresentation {...props} onClose={onClose} />;
};

export default AlertContainer;
