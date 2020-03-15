export const getFullName = client => {
  return client ? `${client.Nome} ${client.Sobrenome}` : '';
};
