export const getFilterByStatus = (data, status) => {
  return data.filter(item => item.StatusPedido === status);
};
