import React from 'react';
import { Button, Text, Icon, View } from 'native-base';
import styles from './styles';

const ActionButtonsPresentation = props => {
  return (
    <>
      {props.actions.map((action, index) => (
        <View style={styles.actionsButton} key={index}>
          <Button
            rounded
            transparent
            style={styles.button}
            disabled={action.disabled}
            onPress={props.onPress(action)}>
            <Icon
              type={action.icon.type}
              name={action.icon.name}
              style={styles.icon}
            />
          </Button>
          <Text style={styles.label}>{action.label}</Text>
        </View>
      ))}
    </>
  );
};

export default ActionButtonsPresentation;
