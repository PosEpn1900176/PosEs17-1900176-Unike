import React from 'react';
import { Left, Right, Button, Text, Footer } from 'native-base';

const FooterSignupPresentation = props => {
  return (
    <Footer>
      <Left>
        <Button transparent onPress={props.onBack}>
          <Text>Voltar</Text>
        </Button>
      </Left>
      <Right>
        <Button transparent disabled={props.disabled} onPress={props.onForward}>
          <Text>AVANÇAR</Text>
        </Button>
      </Right>
    </Footer>
  );
};

export default FooterSignupPresentation;
