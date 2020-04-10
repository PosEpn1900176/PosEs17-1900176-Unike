import React from 'react';
import {
  Text,
  Container,
  Content,
  Button,
  Icon,
  Row,
  Grid,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Card,
} from 'native-base';
import { DataValue } from '../../../molecules';

const InfoProfilePresentation = ({ profile }) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              large
              source={{ uri: `data:image/png;base64,${profile.Foto}` }}
            />
            <Body>
              <DataValue
                label="Nome"
                value={`${profile.Nome} ${profile.Sobrenome}`}
              />
              <DataValue label="Telefone" value={profile.Telefone} />
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Content>
            <DataValue label="Endereço" value={profile.Endereco} />
            <DataValue label="Numero" value={profile.Numero} />
            <DataValue label="Bairro" value={profile.Bairro} />
            <DataValue label="Cidade" value={profile.Cidade} />
            <DataValue label="Estado" value={profile.Estado} />
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
  );
};

export default InfoProfilePresentation;
