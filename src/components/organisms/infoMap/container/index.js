import React from 'react';
import InfoMapPresentation from '../presentation';
import { useAproveRequest } from '../../../../hooks';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

const InfoMapContainer = props => {
  const { navigate } = useNavigation();
  const [data, fetch] = useAproveRequest();
  const selector = useSelector(state => state.user);
  const onBack = () => {
    navigate('Home');
  };
  const onAccept = marker => {
    fetch({
      query: {
        pedidoId: marker.Id,
        profissionalId: selector.Id,
      },
    });
  };
  return <InfoMapPresentation {...props} onAccept={onAccept} onBack={onBack} />;
};

export default InfoMapContainer;
