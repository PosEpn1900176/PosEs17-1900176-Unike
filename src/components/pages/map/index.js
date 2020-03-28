import React from 'react';
import { Text, Container, Content, Footer, Button } from 'native-base';
import { ShowMap } from '../../templates/showMap';
import { HeaderSignup } from '../../templates/headerSignup';
import { useSelector } from 'react-redux';
import { useNavigationParam } from 'react-navigation-hooks';

const MapPage = ({ navigation }) => {
  const item = useNavigationParam('item');

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap data={item} />
      </Content>
      <Footer>
        <Button onPress={onBack}>
          <Text>Voltar</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export { MapPage };
