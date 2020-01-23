// @flow
import validator from 'validator';

const validate = (type: string, value: string | Array<any>) => {
  const valid = {
    Nome: validator.isAlphanumeric(value.toString()),
    Sobrenome: validator.isAlphanumeric(value.toString()),
    Nascimento: validator.isAlphanumeric(value.toString()),
    Rg: validator.isAlphanumeric(value.toString()),
    Cpf: validator.isAlphanumeric(value.toString()),
    Telefone: validator.isAlphanumeric(value.toString()),
    PossuiInternetMovel: true,
    Cep: true,
    Endereco: true,
    Numero: true,
    Bairro: true,
    Cidade: true,
    Complemento: true,
    Estado: true,
    Senha: true,
    Email: validator.isEmail(value.toString()),
    TempoExperiencia: true,
    Esterilização: true,
    Descricao: true,
    MeioComunicacao: true,
    SituacaoProfissional: true,
    Servicos: true,
    Observacao: true,
    Foto: true,
    DataCadastro: true,
  };

  return valid[type];
};

export default validate;
