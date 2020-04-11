import React from 'react';
import { Content, CardItem, Body, Card, Grid, Col, Text } from 'native-base';
import { DataValue } from '../../../molecules';
import { getDate } from '../../../../lib';
import { ImageUser } from '../../../organisms/imageUser';

const InfoProfilePresentation = ({ profile }) => {
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text>Identificação</Text>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Grid>
              <Col>
                <DataValue
                  label="Situação"
                  value={profile.SituacaoProfissional.Nome}
                />
                <DataValue
                  label="Nome"
                  value={`${profile.Nome} ${profile.Sobrenome}`}
                />
                <DataValue
                  label="Data de nascimento"
                  value={getDate(profile.Nascimento, 'date')}
                />
              </Col>
              <Col>
                <ImageUser photo={profile.Foto} />
              </Col>
            </Grid>
          </Body>
        </CardItem>
      </Card>
      <Card>
        <CardItem header bordered>
          <Text>Localização</Text>
        </CardItem>
        <CardItem cardBody>
          <Content>
            <DataValue label="Endereço" value={profile.Endereco} />
            <DataValue label="Número" value={profile.Numero} />
            <DataValue label="Endereço" value={profile.Bairro} />
            <DataValue label="Cidade" value={profile.Cidade} />
            <DataValue label="Estado" value={profile.Estado} />
            <DataValue
              label="Complemento"
              value={profile.Complemento || 'Não possui'}
            />
          </Content>
        </CardItem>
      </Card>
      <Card>
        <CardItem header bordered>
          <Text>Contato</Text>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <DataValue label="Telefone" value={`${profile.Telefone}`} />
            <DataValue label="Email" value={`${profile.Email}`} />
          </Body>
        </CardItem>
      </Card>
      <Card>
        <CardItem header bordered>
          <Text>Documento</Text>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <DataValue label="RG" value={`${profile.Rg}`} />
            <DataValue label="CPF" value={`${profile.Cpf}`} />
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

export default InfoProfilePresentation;
