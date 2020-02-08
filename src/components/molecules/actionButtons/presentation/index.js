import React from 'react';
import { Content, Button, Text } from 'native-base';
import styles from './styles';

const ActionButtonsPresentation = props => {
  return (
    <Content>
      {props.actions.map((action, index) => (
        <Button
          key={index}
          style={styles.button}
          onPress={props.onPress(action)}>
          <Text>{action.label}</Text>
        </Button>
      ))}
    </Content>
  );
};

export default ActionButtonsPresentation;
