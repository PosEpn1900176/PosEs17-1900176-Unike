import http from '../http';
import { paramToQuery } from '../../lib';

const FinalizeRequestService = {
  post: ({ query }) => {
    console.log('POST', query)
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

export { FinalizeRequestService };
