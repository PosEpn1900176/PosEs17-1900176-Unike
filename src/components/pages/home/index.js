import React from 'react';
import { Container, Grid, Col, Row } from 'native-base';
import { HeaderSignup } from '../../templates/headerSignup';
import { DataValue, ActionButtons } from '../../molecules';
import { useSelector } from 'react-redux';
import { actions } from './utils';
import { ImageUser } from '../../organisms/imageUser';
import styles from './styles';

const HomePage = props => {
  const selector = useSelector(state => state.user);
  const onPress = action => {
    return () => {
      props.navigation.navigate(action.link);
    };
  };

  return (
    <Container>
      <HeaderSignup />
      <Grid>
        <Row>
          <Col>
            <ImageUser photo={selector.Foto} />
          </Col>
          <Col>
            <DataValue
              label="Nome completo"
              value={`${selector.Nome} ${selector.Sobrenome}`}
            />
            <DataValue label="Email" value={selector.Email} />
            <DataValue label="Telefone" value={selector.Telefone} />
          </Col>
        </Row>
        <Row size={2} style={styles.actionButton}>
          <ActionButtons actions={actions} onPress={onPress} />
        </Row>
      </Grid>
    </Container>
  );
};

export { HomePage };
