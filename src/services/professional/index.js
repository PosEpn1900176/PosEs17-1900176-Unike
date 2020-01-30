import http from '../http';

const ProfessionalService = {
  post: async param => {
    return new Promise((resolve, reject) => {
      http
        .post('Profissional/Adicionar', param)
        .then(response => {
          resolve(response);
          console.log('ResponseProfessional', response);
        })
        .catch(error => {
          reject(error);
          console.log('ErrorProfessional', error);
        });
    });
  },
};

export { ProfessionalService };
