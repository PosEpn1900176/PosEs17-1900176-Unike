import React from 'react';
import { View, Text } from 'native-base';
import { formatMoney, totalService } from '../../../../lib';
import styles from './style';

const TotalService = ({ request }) => {
  return (
    <View style={styles.totalService}>
      <Text style={styles.total}>{formatMoney(totalService(request, 'ValorPadrao'))}</Text>
      <Text note>
        {formatMoney(totalService(request, 'ComissaoProfissional'))}
      </Text>
    </View>
  );
};

export default TotalService;
