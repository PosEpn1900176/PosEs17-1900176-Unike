import React, { useState, useEffect } from 'react';
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

const ClientPage = ({ navigation }) => {
  const [item] = useNavigationParam('item');
  const [mode, setMode] = useState('DRIVING');

  const handleBack = () => {
    navigation.goBack();
  };

  const onMode = value => {
    setMode(value);
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
              <ShowMap data={[item]} mode={mode} />
              <View style={{ position: 'absolute', top: 100, right: 10 }}>
                <ButtonGroup data={buttonsData} onMode={onMode} />
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
