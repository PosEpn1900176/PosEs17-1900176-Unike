import React from 'react';
import InfoProfilePresentation from '../presentation';
import { useSelector } from 'react-redux';

const InfoProfileContainer = () => {
  const selector = useSelector(state => state.user);
  return <InfoProfilePresentation profile={selector} />;
};

export default InfoProfileContainer;
