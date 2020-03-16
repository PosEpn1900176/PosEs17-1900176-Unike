export const formatMoney = value =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const totalService = (request = [], field) => {
  return request.reduce((accumulator, currentValue) => {
    return accumulator + currentValue[field];
  }, 0);
};
