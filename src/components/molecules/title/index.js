import React from 'react';
import { View, Text } from 'native-base';
import styles from './styles';

const Title = props => {
  return (
    <View style={styles.title}>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

export { Title };
