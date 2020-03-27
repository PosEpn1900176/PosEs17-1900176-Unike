import React from 'react';
import { HeaderSignup } from '../../../templates/headerSignup';
import { ScheduleServices } from '../../../templates/scheduleServices';
import { Container, Content } from 'native-base';

const ScheduleServicesPagePresentation = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup onBack={onBack} />
      <Content>
        <ScheduleServices {...props} />
      </Content>
    </Container>
  );
};

export default ScheduleServicesPagePresentation;
