import React from 'react';
import { Text, Container, Content } from 'native-base';
import { HeaderSignup } from '../../../templates/headerSignup';

const ProfileUserPagePresentation = () => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <Text>Content here</Text>
      </Content>
    </Container>
  );
};

export default ProfileUserPagePresentation;
