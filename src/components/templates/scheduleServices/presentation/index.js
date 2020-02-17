import React from 'react';
import { Container } from 'native-base';
import TableScheduleServicesPresentation from './tableSchedule';

const ScheduleServicesPresentation = props => {
  return (
    <Container>
      <TableScheduleServicesPresentation
        data={props.data}
        onViewMap={props.onViewMap}
        onFinish={props.onFinish}
      />
    </Container>
  );
};

export default ScheduleServicesPresentation;
