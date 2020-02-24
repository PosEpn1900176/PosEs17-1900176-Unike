import React, { useEffect } from 'react';
import { Button, Text, Container, Content, Footer } from 'native-base';
import { HeaderSignup } from '../../headerSignup';
import { ShowMap } from '../../showMap';
import { useSelector } from 'react-redux';

const AvailableServicesPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap markers={props.data} />
      </Content>
      <Footer>
        <Button onPress={props.goBack}>
          <Text>Voltar</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default AvailableServicesPresentation;
