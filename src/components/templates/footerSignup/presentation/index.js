import React from 'react';
import { Left, Right, Button, Text, Footer } from 'native-base';

const FooterSignupPresentation = ({
  text = { back: 'Voltar', next: 'Avançar' },
  ...props
}) => {
  return (
    <Footer>
      <Left>
        <Button transparent onPress={props.onBack}>
          <Text>{text.back}</Text>
        </Button>
      </Left>
      <Right>
        <Button transparent disabled={props.disabled} onPress={props.onForward}>
          <Text>{text.next}</Text>
        </Button>
      </Right>
    </Footer>
  );
};

export default FooterSignupPresentation;
