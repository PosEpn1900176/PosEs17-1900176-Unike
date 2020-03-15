export const getFullAddress = address => {
  return address
    ? `${address.Endereco}, ${address.Numero}, ${address.Cidade}`
    : '';
};
