import http from '../http';
import { getFilterByStatus } from './utils';

const ScheduleServiceServices = {
  get: param => {
    return new Promise((resolve, reject) => {
      http
        .get('Pedido/PedidosProfissional', param)
        .then(({ data, response }) => {
          resolve({
            ...response,
            data: getFilterByStatus(data, param.status),
          });
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
