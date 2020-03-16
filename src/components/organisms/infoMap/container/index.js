import React from 'react';
import InfoMapPresentation from '../presentation';
import { useAproveRequest } from '../../../../hooks';
import { useSelector } from 'react-redux';

const InfoMapContainer = props => {
  const [data, fetch] = useAproveRequest();
  const selector = useSelector(state => state.user);
  const onAccept = marker => {
    fetch({
      params: {
        PedidoId: marker.Id,
      },
      query: {
        ProfissionalId: selector.Id,
      },
    });
  };
  return <InfoMapPresentation {...props} onAccept={onAccept} />;
};

export default InfoMapContainer;
