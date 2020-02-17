import React from 'react';
import { Text, Container, Content, Footer, Button } from 'native-base';
import { ShowMap } from '../../templates/showMap';
import { HeaderSignup } from '../../templates/headerSignup';
import { useSelector } from 'react-redux';

const MapPage = ({ navigation }) => {
  const selector = useSelector(
    state => state.services.map[navigation.state.params.service],
  );
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap markers={selector} />
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
