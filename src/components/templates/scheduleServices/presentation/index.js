import React, { useRef } from 'react';
import {
  H1,
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Body,
  DeckSwiper,
  Left,
  Icon,
  View,
  Footer,
  Right,
} from 'native-base';
import { HeaderSignup } from '../../../templates/headerSignup';
import { DataValue } from '../../../molecules';

class TableScheduleServices extends React.Component {
  render() {
    return (
      <>
        <DeckSwiper
          ref={c => (this._deckSwiper = c)}
          dataSource={this.props.data.data}
          renderItem={(item, index) => {
            return (
              <Card key={index} style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Left>
                    <Body>
                      <DataValue label="Cliente" value={item.Cliente} />
                      <DataValue label="Endereco" value={item.Endereco} />
                      <DataValue label="Serviço" value={item.Servico} />
                      <DataValue label="Horário" value={item.Horario} />
                      <DataValue
                        label="Taxa do serviço"
                        value={item.TaxaServico}
                      />
                      <DataValue
                        label="Valor do serviço"
                        value={item.ValorServico}
                      />
                      <DataValue label="Desconto" value={item.Desconto} />
                      <DataValue
                        label="Total à receber"
                        value={item.TotalReceber}
                      />
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button
                      transparent
                      iconRight
                      onPress={() => this._deckSwiper._root.swipeRight()}>
                      <Icon
                        type="AntDesign"
                        name="left"
                        style={{ color: '#ED4A6A' }}
                      />
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      transparent
                      iconRight
                      onPress={() => this._deckSwiper._root.swipeRight()}>
                      <Icon
                        type="AntDesign"
                        name="right"
                        style={{ color: '#ED4A6A' }}
                      />
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            );
          }}
        />
      </>
    );
  }
}

const ScheduleServicesPresentation = props => {
  return (
    <Container>
      <HeaderSignup />
      <H1>Lista de serviços agendados</H1>
      <TableScheduleServices data={props.data} />
    </Container>
  );
};

export default ScheduleServicesPresentation;
