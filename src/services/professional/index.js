import http from '../http';

const ProfessionalService = {
  post: async params => {
    return new Promise((resolve, reject) => {
      http
        .post('Profissional/Adicionar', params)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log('Erro cadastro');
          console.log(error);
          reject(error);
        });
    });
  },
};

export { ProfessionalService };
