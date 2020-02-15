import React from 'react';
import {
  H1,
  Container,
  Button,
  Card,
  CardItem,
  Body,
  DeckSwiper,
  Left,
  Icon,
  Right,
} from 'native-base';
import { HeaderSignup } from '../../../templates/headerSignup';
import { DataValue } from '../../../molecules';
import TableScheduleServicesPresentation from './tableSchedule';
import styles from './styles';

const ScheduleServicesPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <H1>Lista de serviços agendados</H1>
      <TableScheduleServicesPresentation
        data={props.data}
        onViewMap={props.onViewMap}
      />
    </Container>
  );
};

export default ScheduleServicesPresentation;
