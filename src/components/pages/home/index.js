import React from 'react';
import { Container, View, Content } from 'native-base';
import { HeaderSignup } from '../../templates/headerSignup';
import { ActionButtons } from '../../molecules';
import { actions } from './utils';
import styles from './styles';

const HomePage = props => {
  const onPress = action => {
    return () => {
      props.navigation.navigate(action.link);
    };
  };

  return (
    <Container>
      <HeaderSignup />
      <Content>
        <View style={styles.column}>
          <ActionButtons actions={actions} onPress={onPress} />
        </View>
      </Content>
    </Container>
  );
};

export { HomePage };
