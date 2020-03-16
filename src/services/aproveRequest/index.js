import http from '../http';
import { paramToQuery } from '../../lib';

const AproveRequestService = {
  post: param => {
    return new Promise((resolve, reject) => {
      console.log('APROVEREQUEST');
      console.log(param);
      
      http
        .post(
          `Pedido/AceitarPedidoProfissional/?ProfissionalId=${paramToQuery(
            param.query,
          )}`,
          param,
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(param);
          console.log('Erro na solicitaçao de Pedidos');
          console.log(error);
          reject(error);
        });
    });
  },
};

export { AproveRequestService };
