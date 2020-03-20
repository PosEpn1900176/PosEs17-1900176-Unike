import React, { useEffect, useState } from 'react';
import InfoMapPresentation from '../presentation';
import { useAproveRequest } from '../../../../hooks';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { Alert } from '../../../molecules/alert';

const InfoMapContainer = props => {
  const { navigate } = useNavigation();
  const [data, fetch] = useAproveRequest();
  const selector = useSelector(state => state.user);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {}, [data.done, navigate]);

  const onBack = () => {
    navigate('Home');
  };
  const onAccept = marker => {
    setShowAlert(true);
    props.onAccept();
    fetch({
      query: {
        pedidoId: marker.Id,
        profissionalId: selector.Id,
      },
    });
  };
  return (
    <>
      {showAlert ? <Alert loading={!data.done} /> : null}
      <InfoMapPresentation
        status={data}
        {...props}
        onAccept={onAccept}
        onBack={onBack}
      />
    </>
  );
};

export default InfoMapContainer;
