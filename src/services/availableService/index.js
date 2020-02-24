import http from '../http';

const AvailableServiceServices = {
  get: param => {
    return new Promise((resolve, reject) => {
      http
        .get('Pedido/PedidosSemProfissional', param)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(param)
          console.log('Erro na solicitaçao de Pedidos');
          console.log(error);
          reject(error);
        });
    });
  },
};

export { AvailableServiceServices };
