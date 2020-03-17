import React from 'react';
import { Container } from 'native-base';
import TableScheduleServicesPresentation from './tableSchedule';
import { LoadingControl } from '../../../organisms';

const ScheduleServicesPresentation = props => {
  return (
    <Container>
      <LoadingControl loading={props.data.loading}>
        <TableScheduleServicesPresentation
          data={props.data.data}
          onViewMap={props.onViewMap}
          onFinish={props.onFinish}
        />
      </LoadingControl>
    </Container>
  );
};

export default ScheduleServicesPresentation;
