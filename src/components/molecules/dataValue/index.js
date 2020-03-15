import React from 'react';

import { Text, Content } from 'native-base';
import styles from './styles';

const DataValue = ({ label, value = '' }) => {
  return (
    <Content padder>
      <Text note>{label}</Text>
      <Text>{value}</Text>
    </Content>
  );
};

export { DataValue };
