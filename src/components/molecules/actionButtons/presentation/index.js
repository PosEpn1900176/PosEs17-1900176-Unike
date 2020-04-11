import React from 'react';
import { Button, Text, Icon, View, Content } from 'native-base';
import styles from './styles';

const WhiteSpace = () => {
  return new Array(3).fill(null).map((_, index) => {
    return (
      <View key={index} style={styles.actionsButton}>
        {null}
      </View>
    );
  });
};

const ActionButtonsPresentation = props => {
  return (
    <Content>
      <View style={styles.container}>
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
        <WhiteSpace />
      </View>
    </Content>
  );
};

export default ActionButtonsPresentation;
