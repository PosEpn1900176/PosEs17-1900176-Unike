import React, { useState } from 'react';
import {
  Container,
  View,
  Content,
  Button,
  Text,
  Footer,
  Left,
  Icon,
} from 'native-base';
import { HeaderSignup } from '../../templates/headerSignup';
import { ActionButtons } from '../../molecules';
import { actions } from './utils';
import styles from './styles';

const HomePage = props => {
  const [filterActions, setFilterActions] = useState(actions);
  const onPress = action => {
    return () => {
      props.navigation.navigate(action.link);
    };
  };
  const onChangeText = value => {
    const filter = actions.filter(action => {
      return action.label.toLowerCase().includes(value.toLowerCase());
    });

    setFilterActions(filter);
  };

  return (
    <Container>
      <HeaderSignup search={true} onChangeText={onChangeText} />
      <Content>
        <View style={styles.column}>
          <ActionButtons actions={filterActions} onPress={onPress} />
        </View>
      </Content>
    </Container>
  );
};

export { HomePage };
