import React from 'react';
import styles from './styles';
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Icon,
  Fab,
  Right,
  Grid,
  Col,
  Text,
  Container,
  List,
  Content,
  ListItem,
  Thumbnail,
  Badge,
} from 'native-base';
import { DataValue } from '../../../molecules';
import { HeaderSignup } from '../../headerSignup';
import { ListService } from '../../listService';
import { getFullName, getFullAddress, getDate } from '../../../../lib';
import { ScrollView, View } from 'react-native';

const TableScheduleServicesPresentation = ({ data = [] }) => {
  console.log('Presentation', data);
  return (
    <Container>
      <Content>
        {/* <ScrollView> */}
        <List>
          {data.map((item, index) => {
            return (
              <ListItem key={index}>
                <Body>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                      <Text>{getFullName(item.Cliente)}</Text>
                      <Text note>{getFullAddress(item.EnderecoCliente)}</Text>
                      <View style={{ flexDirection: 'row', padding: 5 }}>
                        {item.ItemsPedido.map((request, i) => {
                          return (
                            <View key={i}>
                              <Text note>{getDate(request.Horario)}</Text>
                              <View style={{ padding: 5 }}>
                                <Badge primary>
                                  <Text>{request.Servico.Nome}</Text>
                                </Badge>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                    <View>
                      <Button transparent>
                        <Icon name="arrow-forward" />
                      </Button>
                    </View>
                  </View>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default TableScheduleServicesPresentation;

// export class TableScheduleServicesPresentation1 extends React.Component {
//   render() {
//     return (
//       <>
//         <DeckSwiper
//           ref={c => (this._deckSwiper = c)}
//           dataSource={this.props.data}
//           renderItem={(item, index) => {
//             console.log('ITEM', item);
//             return (
//               <Card key={index} style={styles.scheduleCard}>
//                 <CardItem header>
//                   <Left>
//                     <Button
//                       transparent
//                       iconRight
//                       onPress={() => this._deckSwiper._root.swipeRight()}>
//                       <Icon type="AntDesign" name="left" />
//                     </Button>
//                   </Left>
//                   <Body>
//                     <Button
//                       transparent
//                       block
//                       iconRight
//                       onPress={() => this.props.onViewMap([item])}>
//                       <Icon
//                         type="EvilIcons"
//                         name="location"
//                         style={styles.iconLarge}
//                       />
//                     </Button>
//                   </Body>
//                   <Right>
//                     <Button
//                       transparent
//                       iconRight
//                       onPress={() => this._deckSwiper._root.swipeRight()}>
//                       <Icon type="AntDesign" name="right" />
//                     </Button>
//                   </Right>
//                 </CardItem>

//                 <CardItem cardBody>
//                   <Left>
//                     <Body>
//                       <DataValue label="Cliente" value={item.Cliente.Nome} />
//                       <DataValue
//                         label="Endereco"
//                         value={item.EnderecoCliente.Endereco}
//                       />
//                       {/* <DataValue label="Serviço" value={item.Servico} /> */}
//                       <DataValue label="Horário" value={item.HorarioInicial} />
//                       {/* <DataValue
//                         label="Taxa do serviço"
//                         value={item.TaxaServico}
//                       />
//                       <DataValue
//                         label="Valor do serviço"
//                         value={item.ValorServico}
//                       />
//                       <DataValue label="Desconto" value={item.Desconto} /> */}
//                       {/* <Grid>
//                         <Col>
//                           <DataValue
//                             label="Total à receber"
//                             value={item.TotalReceber}
//                           />
//                         </Col>
//                         <Col>
//                           <Button
//                             primary
//                             onPress={() => this.props.onFinish(item)}>
//                             <Text>Fnalizar serviço</Text>
//                           </Button>
//                         </Col>
//                       </Grid> */}
//                     </Body>
//                   </Left>
//                 </CardItem>
//               </Card>
//             );
//           }}
//         />
//       </>
//     );
//   }
// }
