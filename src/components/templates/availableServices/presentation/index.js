import React from 'react';
import { Container, Content } from 'native-base';
import { HeaderSignup } from '../../headerSignup';
import { ShowMap } from '../../showMap';
import { InfoMap } from '../../../organisms';

const AvailableServicesPresentation = ({ info, showMarker, ...props }) => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap {...props} />
      </Content>
      <InfoMap marker={props.selectedMarker} show={showMarker} />
    </Container>
  );
};

export default AvailableServicesPresentation;
