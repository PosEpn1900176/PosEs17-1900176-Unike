import React from 'react';
import { HeaderSignup } from '../../../templates/headerSignup';
import { ScheduleServices } from '../../../templates/scheduleServices';
import {
  Container,
  Content,
  Tabs,
  Tab,
  H3,
  Footer,
  Left,
  Button,
  Icon,
  Text,
  Right,
  TabHeading,
} from 'native-base';

const ScheduleServicesPagePresentation = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup onBack={onBack} />

      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Icon type="MaterialIcons" name="schedule" />
              <Text>Agendados</Text>
            </TabHeading>
          }>
          <ScheduleServices {...props} status={2} />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon type="AntDesign" name="smileo" />
              <Text>Realizados</Text>
            </TabHeading>
          }>
          <ScheduleServices {...props} status={3} />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon type="MaterialIcons" name="close" />
              <Text>Cancelados</Text>
            </TabHeading>
          }>
          <ScheduleServices {...props} status={4} />
        </Tab>
      </Tabs>

      <Footer>
        <Left>
          <Button transparent onPress={onBack}>
            <Icon active name="arrow-back" />
            <Text>Voltar</Text>
          </Button>
        </Left>
      </Footer>
    </Container>
  );
};

export default ScheduleServicesPagePresentation;
