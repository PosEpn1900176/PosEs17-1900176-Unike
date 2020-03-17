import React, { useEffect, useState } from 'react';
import InfoMapPresentation from '../presentation';
import { useAproveRequest } from '../../../../hooks';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

const InfoMapContainer = props => {
  const { navigate } = useNavigation();
  const [data, fetch] = useAproveRequest();
  const selector = useSelector(state => state.user);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (data.done) {
      alert('Cliente aceite com sucesso');
      navigate('Home');
    }
  }, [data.done, navigate]);

  const onBack = () => {
    navigate('Home');
  };
  const onAccept = marker => {
    setDisabled(false);
    fetch({
      query: {
        pedidoId: marker.Id,
        profissionalId: selector.Id,
      },
    });
  };
  return (
    <InfoMapPresentation
      disabled={disabled}
      status={data}
      {...props}
      onAccept={onAccept}
      onBack={onBack}
    />
  );
};

export default InfoMapContainer;
