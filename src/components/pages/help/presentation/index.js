import React from 'react';
import { HeaderSignup } from '../../../templates/headerSignup';
import { Container, Tabs, Tab, TabHeading, Footer, Left, Text, Button, Icon } from 'native-base';

const HelpPagePresentation = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup onBack={onBack} />
      <Tabs>
        <Tab>
          <Text>Sobre</Text>
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

export default HelpPagePresentation;
