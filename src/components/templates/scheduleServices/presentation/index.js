import React from 'react';
import { H1, Container } from 'native-base';
import { HeaderSignup } from '../../../templates/headerSignup';
import TableScheduleServicesPresentation from './tableSchedule';

const ScheduleServicesPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <H1>Lista de serviços agendados</H1>
      <TableScheduleServicesPresentation
        data={props.data}
        onViewMap={props.onViewMap}
      />
    </Container>
  );
};

export default ScheduleServicesPresentation;
