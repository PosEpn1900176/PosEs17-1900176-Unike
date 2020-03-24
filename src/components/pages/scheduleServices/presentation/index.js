import React from 'react';
import { ScheduleServices, HeaderSignup } from '../../../templates';
import { Container, Content, Text } from 'native-base';

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
