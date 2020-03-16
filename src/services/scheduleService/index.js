import http from '../http';

const ScheduleServiceServices = {
  get: param => {
    return new Promise((resolve, reject) => {
      http
        .get('Pedido/PedidosProfissional', param)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log('Erro na solicitaçao de Pedidos');
          console.log(error);
          reject(error);
        });
    });
  },
};

export { ScheduleServiceServices };
