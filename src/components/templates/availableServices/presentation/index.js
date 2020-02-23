import React, { useEffect } from 'react';
import { Button, Text, Container, Content, Footer } from 'native-base';
import { HeaderSignup } from '../../headerSignup';
import { ShowMap } from '../../showMap';
import { useSelector } from 'react-redux';

const AvailableServicesPresentation = props => {
  // useEffect(() => {
  //   props.navigation.navigate('Map', {
  //     service: 'available',
  //   });
  // });
  const a = [];

  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap markers={a} />
      </Content>
      {/* <Footer> */}
      {/* <Button onPress={goBack}>
          <Text>Voltar</Text>
        </Button> */}
      {/* </Footer> */}
    </Container>
  );
};

export default AvailableServicesPresentation;
