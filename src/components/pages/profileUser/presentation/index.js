import React from 'react';
import {
  Text,
  Container,
  Button,
  Icon,
  Left,
  Tabs,
  Tab,
  TabHeading,
  View,
  Footer,
} from 'native-base';
import { HeaderSignup } from '../../../templates/headerSignup';
import { InfoProfile } from '../../../templates/infoProfile';

const ProfileUserPagePresentation = props => {
  return (
    <Container>
      <HeaderSignup />

      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Icon name="person" />
              <Text>VerPerfil</Text>
            </TabHeading>
          }>
          <InfoProfile />
        </Tab>

        <Tab
          heading={
            <TabHeading>
              <Icon type="MaterialCommunityIcons" name="account-edit" />
              <Text>Editar Perfil</Text>
            </TabHeading>
          }>
          <View>
            <Text>Editar Serviço</Text>
          </View>
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon
                type="MaterialCommunityIcons"
                name="briefcase-edit-outline"
              />
              <Text>Editar serviço</Text>
            </TabHeading>
          }>
          <View>
            <Text>Editar Serviço</Text>
          </View>
        </Tab>
      </Tabs>

      <Footer>
        <Left>
          <Button transparent onPress={props.onBack}>
            <Icon active name="arrow-back" />
            <Text>Voltar</Text>
          </Button>
        </Left>
      </Footer>
    </Container>
  );
};

export default ProfileUserPagePresentation;
