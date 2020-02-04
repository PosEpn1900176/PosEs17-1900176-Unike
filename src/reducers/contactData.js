import { SET_CONTACT_DATA } from '../actions/actionTypes';

const initialState = {
  Nome: {
    value: '',
    valid: true,
  },
  Sobrenome: {
    value: '',
    valid: true,
    pristine: true,
  },
  Nascimento: {
    value: new Date(),
    valid: true,
    pristine: true,
  },
  Rg: {
    value: '',
    valid: true,
    pristine: true,
  },
  Cpf: {
    value: '',
    valid: true,
    pristine: true,
  },
  Telefone: {
    value: '',
    valid: true,
    pristine: true,
  },
  PossuiInternetMovel: {
    value: '',
    valid: true,
    pristine: true,
  },
  Cep: {
    value: '',
    valid: true,
    pristine: true,
  },
  Endereco: {
    value: '',
    valid: true,
    pristine: true,
  },
  Numero: {
    value: '',
    valid: true,
    pristine: true,
  },
  Bairro: {
    value: '',
    valid: true,
    pristine: true,
  },
  Cidade: {
    value: '',
    valid: true,
    pristine: true,
  },
  Complemento: {
    value: '',
    valid: true,
    pristine: true,
  },
  Estado: {
    value: '',
    valid: true,
    pristine: true,
  },
  Senha: {
    value: '',
    valid: true,
    pristine: true,
  },
  Email: {
    value: '',
    valid: true,
    pristine: true,
  },
  TempoExperiencia: {
    value: '2',
    valid: true,
    pristine: true,
  },
  ExperienciaAtendimentoDomicilio: {
    value: true,
    valid: true,
    pristine: true,
  },
  Esterilizacao: {
    value: '',
    valid: true,
    pristine: true,
  },
  Descricao: {
    value: '',
    valid: true,
    pristine: true,
  },
  MeioComunicacao: {
    Id: 0,
    Nome: '',
  },
  SituacaoProfissional: {
    value: 0,
    Nome: '',
  },
  Servicos: {
    value: [],
    valid: true,
    pristine: true,
  },
  Observacao: {
    value: '',
    valid: true,
    pristine: true,
  },
  Foto: {
    value: '',
    valid: true,
    pristine: true,
  },
  DataCadastro: {
    value: '', //"2020-01-13T23:36:03.459Z"
    valid: true,
    pristine: true,
  },
  TrabalhaOutroAplicativo: {
    value: false,
    valid: true,
    pristine: true,
  },
  Observacoes: {
    valid: [],
    valid: true,
    pristine: true,
  },
  CaminhoFoto: {
    value: '',
    valid: true,
    pristine: true,
  },
  CodigoPermissaoMoip: {
    value: '',
    valid: true,
    pristine: true,
  },
};

const contactDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default contactDataReducer;
