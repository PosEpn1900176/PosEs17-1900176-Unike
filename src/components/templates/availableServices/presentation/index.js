import React from 'react';
import { Container, Content } from 'native-base';
import { HeaderSignup } from '../../headerSignup';
import { ShowMap } from '../../showMap';
import { InfoMap } from '../../../organisms/infoMap';

const AvailableServicesPresentation = ({
  info,
  showMarker,
  onAccept,
  ...props
}) => {
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <ShowMap {...props} />
      </Content>
      <InfoMap
        marker={props.selectedMarker}
        show={showMarker}
        onAccept={onAccept}
      />
    </Container>
  );
};

export default AvailableServicesPresentation;
