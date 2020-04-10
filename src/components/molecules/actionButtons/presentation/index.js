import React from 'react';
import { Button, Text, Icon } from 'native-base';
import styles from './styles';

const ActionButtonsPresentation = props => {
  return (
    <>
      {props.actions.map((action, index) => (
        <Button
          rounded
          transparent
          key={index}
          style={styles.button}
          disabled={action.disabled}
          onPress={props.onPress(action)}>
          {/* <Text>{action.label}</Text> */}
          <Icon
            type={action.icon.type}
            name={action.icon.name}
            style={styles.icon}
          />
        </Button>
      ))}
    </>
  );
};

export default ActionButtonsPresentation;
