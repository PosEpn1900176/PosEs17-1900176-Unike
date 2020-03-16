import http from '../http';
import { paramToQuery } from '../../lib';

const AproveRequestService = {
  get: params => {
    return new Promise((resolve, reject) => {
      http
        .get('Pedido/PedidosProfissional', {
          params: params,
        })
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
  post: ({ query }) => {
    console.log(`Pedido/AceitarPedidoProfissional?${paramToQuery(query)}`);
    return new Promise((resolve, reject) => {
      http
        .post(`Pedido/AceitarPedidoProfissional?${paramToQuery(query)}`)
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

export { AproveRequestService };
