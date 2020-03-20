import React from 'react';
import { View, Icon, Button } from 'native-base';
import styles from './styles';
import { IconStatusLoading } from '../../iconStatusLoading';

const AlertPresentation = ({ loading = false, onClose }) => {
  return (
    <View style={styles.alert}>
      <View style={styles.control}>
        <Button
          transparent
          style={styles.button}
          disabled={loading}
          onPress={onClose}>
          <Icon name="close" />
        </Button>
      </View>
      <View style={styles.loading}>
        <IconStatusLoading style={styles.icon} loading={loading} />
      </View>
    </View>
  );
};

export default AlertPresentation;
