import React, { useEffect } from 'react';
import AvailableServicesPresentation from '../presentation';
import { useDispatch } from 'react-redux';
import { loadAvailableServices } from '../../../../actions';
import { useScheduleAvailable } from './use';

const AvailableServicesContainer = props => {
  const data = useScheduleAvailable();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAvailableServices(data));
  }, [data, dispatch]);

  return <AvailableServicesPresentation {...props} />;
};

export default AvailableServicesContainer;
