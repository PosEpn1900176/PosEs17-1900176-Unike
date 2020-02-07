import React from 'react';
import { useSelector } from 'react-redux';
import {
  Thumbnail,
  Left,
  Body,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  View,
  Grid,
  Row,
} from 'native-base';
import { DataValue } from '../../molecules';

const AboutPage = () => {
  const selector = useSelector(state => state.user);
  console.log(selector);
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                large
                source={{ uri: `data:image/png;base64,${selector.Foto}` }}
              />
              <Body>
                <DataValue
                  label="Nome"
                  value={`${selector.Nome} ${selector.Sobrenome}`}
                />
                <DataValue label="Telefone" value={selector.Telefone} />
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Content>
              <DataValue label="Endereço" value={selector.Endereco} />
              <DataValue label="Numero" value={selector.Numero} />
              <DataValue label="Bairro" value={selector.Bairro} />
              <DataValue label="Cidade" value={selector.Cidade} />
              <DataValue label="Estado" value={selector.Estado} />
            </Content>
          </CardItem>

          <CardItem footer>
            <Grid>
              <Row>
                <Button primary iconRight disabled>
                  <Text>Alterar Dados Pessoais</Text>
                  <Icon name="person" />
                </Button>
              </Row>
              <Row>
                <Button primary iconRight disabled>
                  <Text>Alterar Dados de Serviços</Text>
                  <Icon name="briefcase" />
                </Button>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export { AboutPage };
