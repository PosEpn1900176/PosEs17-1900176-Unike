const getFullName = client => {
  return `${client.Nome} ${client.Sobrenome}`;
};

const getFullAddress = address => {
  return `${address.Endereco}, ${address.Numero}, ${address.Cidade}`;
};

const formatDate = date => {
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hour = date
    .getHours()
    .toString()
    .padStart(2, '0');
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, '0');
  const seconds = date
    .getSeconds()
    .toString()
    .padStart(2, '0');

  return `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
};

const getDateHour = request => {
  const date = formatDate(new Date(request.Data));
  return `${date}`;
};

export { getFullName, getFullAddress, getDateHour };
