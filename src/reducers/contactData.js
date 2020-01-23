import { SET_CONTACT_DATA } from '../actions/actionTypes';

const initialState = {
  Nome: {
    value: '',
    valid: true,
  },
  Sobrenome: {
    value: '',
    valid: true,
  },
  Nascimento: {
    value: '',
    valid: true,
  },
  Rg: {
    value: '',
    valid: true,
  },
  Cpf: {
    value: '',
    valid: true,
  },
  Telefone: {
    value: '',
    valid: true,
  },
  PossuiInternetMovel: {
    value: '',
    valid: true,
  },
  Cep: {
    value: '',
    valid: true,
  },
  Endereco: {
    value: '',
    valid: true,
  },
  Numero: {
    value: '',
    valid: true,
  },
  Bairro: {
    value: '',
    valid: true,
  },
  Cidade: {
    value: '',
    valid: true,
  },
  Complemento: {
    value: '',
    valid: true,
  },
  Estado: {
    value: '',
    valid: true,
  },
  Senha: {
    value: '',
    valid: true,
  },
  Email: {
    value: '',
    valid: true,
  },
  TempoExperiencia: {
    value: '2',
    valid: true,
  },
  ExperienciaAtendimentoDomicilio: {
    value: true,
    valid: true,
  },
  Esterilizacao: {
    value: '',
    valid: true,
  },
  Descricao: {
    value: '',
    valid: true,
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
  },
  Observacao: {
    value: '',
    valid: true,
  },
  Foto: {
    value: '',
    valid: true,
  },
  DataCadastro: {
    value: '', //"2020-01-13T23:36:03.459Z"
    valid: true,
  },
  TrabalhaOutroAplicativo: {
    value: false,
    valid: true,
  },
  Observacoes: {
    valid: [],
    valid: true,
  },
  CaminhoFoto: {
    value: '',
    valid: true,
  },
  CodigoPermissaoMoip: {
    value: '',
    valid: true,
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
