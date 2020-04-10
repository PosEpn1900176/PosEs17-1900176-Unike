import React from 'react';
import { Text, Container, Content, Footer, Button } from 'native-base';
import { ShowMap } from '../../templates/showMap';
import { HeaderSignup } from '../../templates/headerSignup';
import { useNavigationParam } from 'react-navigation-hooks';
import { filterRequestWithoutGeolocation } from '../../../utils/maps';

const MapPage = ({ navigation }) => {
  const item = useNavigationParam('item');

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap data={filterRequestWithoutGeolocation(item)} />
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
