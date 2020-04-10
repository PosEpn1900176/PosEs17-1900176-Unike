import React, { useState } from 'react';
import {
  Left,
  Container,
  Text,
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Footer,
  Content,
  View,
} from 'native-base';
import { useNavigationParam } from 'react-navigation-hooks';
import { HeaderSignup } from '../../templates/headerSignup';
import InfoClient from './info';
import { ShowMap } from '../../templates/showMap';
import styles from './styles';
import ButtonGroup from '../../organisms/buttonGroup';
import { buttonsData } from './data';
import getDirections from 'react-native-google-maps-directions';
import { useSelector } from 'react-redux';
import { filterRequestWithoutGeolocation } from '../../../utils/maps';

const ClientPage = ({ navigation }) => {
  const {
    coords = { latitude: -23.564259, longitude: -46.652507 },
  } = useSelector(state => state.services.map.currentPosition);
  const [item] = useNavigationParam('item');
  console.log('Item', item);
  const [mode, setMode] = useState('DRIVING');

  const handleBack = () => {
    navigation.goBack();
  };

  const onMode = value => {
    setMode(value);
  };
  const onPressMarker = () => {
    const { Latitude: latitude, Longitude: longitude } = item;
    const data = {
      source: coords,
      destination: {
        latitude,
        longitude,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving',
        },
      ],
    };
    getDirections(data);
  };

  return (
    <Container style={styles.container}>
      <HeaderSignup />
      <Content>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="person" />
                <Text>Cliente</Text>
              </TabHeading>
            }>
            <InfoClient item={item} />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="map" />
                <Text>Localização</Text>
              </TabHeading>
            }>
            <View>
              <ShowMap
                data={filterRequestWithoutGeolocation([item])}
                mode={mode}
                onPressMarker={() => {}}
              />
              <View style={styles.getPositionButton(100)}>
                <ButtonGroup data={buttonsData} onMode={onMode} />
              </View>
              <View style={styles.getPositionButton(10)}>
                <Button>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="google-maps"
                    onPress={onPressMarker}
                  />
                </Button>
              </View>
            </View>
          </Tab>
        </Tabs>
      </Content>
      <Footer>
        <Left>
          <Button transparent onPress={handleBack}>
            <Icon active name="arrow-back" />
            <Text>Voltar</Text>
          </Button>
        </Left>
      </Footer>
    </Container>
  );
};

export { ClientPage };
