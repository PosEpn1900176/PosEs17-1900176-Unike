import React from 'react';
import { Container, Content, Grid, Col, Thumbnail } from 'native-base';
import { HeaderSignup } from '../../templates';
import { Title, DataValue, ActionButtons } from '../../molecules';
import { useSelector } from 'react-redux';
import { user } from '../../../images';

const actions = [
  {
    label: 'Serviços disponíveis',
    link: 'AvailableServices',
  },
  {
    label: 'Serviços agendados',
    link: 'ScheduleServices',
  },
  {
    label: 'Perfil do Usuário',
    link: 'ProfileUser',
  },
  {
    label: 'Ajuda',
    link: 'Help',
  },
];

const HomePage = props => {
  const selector = useSelector(state => state.user);
  const onPress = action => {
    return () => {
      props.navigation.navigate(action.link);
    };
  };
  const getImage = () => {
    if (selector.Foto) {
      return (
        <Thumbnail
          large
          source={{ uri: `data:image/png;base64,${selector.Foto}` }}
        />
      );
    } else {
      return <Thumbnail large source={user} />;
    }
  };
  return (
    <Container>
      <HeaderSignup />
      <Content>
        <Title value={selector.Nome} />
        <Grid>
          <Col>{getImage()}</Col>
          <Col>
            <DataValue
              label="Nome completo"
              value={`${selector.Nome} ${selector.Sobrenome}`}
            />
            <DataValue label="Email" value={selector.Email} />
            <DataValue label="Telefone" value={selector.Telefone} />
          </Col>
        </Grid>
        <ActionButtons actions={actions} onPress={onPress} />
      </Content>
    </Container>
  );
};

export { HomePage };
