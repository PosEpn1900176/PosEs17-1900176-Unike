import React from 'react';
import AvailableServicesPresentation from '../presentation';
import { useAvailableServices } from './use';
import { useSelector } from 'react-redux';

const AvailableServicesContainer = props => {
  const selector = useSelector(state => state.user);
  console.log(selector);
  const data = useAvailableServices();

  return (
    <AvailableServicesPresentation
      data={data}
      {...props}
      ongoMap={props.onGoMap}
    />
  );
};

export default AvailableServicesContainer;
