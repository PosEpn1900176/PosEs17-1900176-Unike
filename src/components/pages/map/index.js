import React from 'react';
import { Text, Container, Content, Footer, Button, Icon } from 'native-base';
import { ShowMap } from '../../templates/showMap';
import { HeaderSignup } from '../../templates/headerSignup';

const MapPage = ({ navigation, route }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap />
      </Content>
      <Footer>
        <Button onPress={goBack}>
          <Text>Voltar</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export { MapPage };
