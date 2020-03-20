import React from 'react';
import { Spinner, Icon } from 'native-base';
import styles from './styles';

const IconStatusLoading = ({ loading = true }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Icon type="FontAwesome" name="check" style={styles.icon} />
  );
};

export { IconStatusLoading };
